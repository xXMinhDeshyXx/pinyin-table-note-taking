from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from threading import Lock
from typing import Any
from uuid import uuid4

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
DATA_DIR = BASE_DIR / "data"
NOTES_PATH = DATA_DIR / "notes.json"
THREADS_PATH = DATA_DIR / "threads.json"
WRITE_LOCK = Lock()


class NotePayload(BaseModel):
    original: str
    initial: str
    final: str
    phonetic: str
    note: str = ""
    highlighted: bool = False


class ThreadCreatePayload(BaseModel):
    title: str = "Untitled thread"


class ThreadUpdatePayload(BaseModel):
    title: str = "Untitled thread"
    content: str = ""
    template: dict[str, str] = Field(default_factory=dict)


app = FastAPI(title="Thanh Van Pinyin Table")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.on_event("startup")
def ensure_storage() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not NOTES_PATH.exists():
        NOTES_PATH.write_text("{}\n", encoding="utf-8")
    if not THREADS_PATH.exists():
        THREADS_PATH.write_text("{\"threads\": []}\n", encoding="utf-8")


@app.get("/")
def read_index() -> FileResponse:
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/api/health")
def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/notes")
def get_notes() -> dict[str, Any]:
    return {"notes": load_notes()}


@app.put("/api/notes/{cell_id}")
def save_note(cell_id: str, payload: NotePayload) -> dict[str, Any]:
    cleaned_phonetic = payload.phonetic.strip() or payload.original
    cleaned_note = payload.note.rstrip()
    should_delete = (
        cleaned_phonetic == payload.original
        and cleaned_note.strip() == ""
        and not payload.highlighted
    )

    with WRITE_LOCK:
        notes = load_notes()

        if should_delete:
            notes.pop(cell_id, None)
            write_notes(notes)
            return {"saved": False, "notes": notes, "cell_id": cell_id}

        notes[cell_id] = {
            "original": payload.original,
            "initial": payload.initial,
            "final": payload.final,
            "phonetic": cleaned_phonetic,
            "note": cleaned_note,
            "highlighted": payload.highlighted,
            "updated_at": datetime.now(timezone.utc).isoformat(),
        }
        write_notes(notes)

    return {"saved": True, "note": notes[cell_id], "cell_id": cell_id}


@app.get("/api/threads")
def get_threads() -> dict[str, Any]:
    return {"threads": load_threads()}


@app.post("/api/threads")
def create_thread(payload: ThreadCreatePayload) -> dict[str, Any]:
    title = payload.title.strip() or "Untitled thread"
    now = timestamp_now()
    thread = {
        "id": uuid4().hex,
        "title": title,
        "content": "",
        "template": {},
        "created_at": now,
        "updated_at": now,
    }

    with WRITE_LOCK:
        threads = load_threads()
        threads.insert(0, thread)
        write_threads(threads)

    return {"thread": thread, "threads": threads}


@app.put("/api/threads/{thread_id}")
def update_thread(thread_id: str, payload: ThreadUpdatePayload) -> dict[str, Any]:
    title = payload.title.strip() or "Untitled thread"
    content = payload.content.rstrip()
    template = sanitize_template(payload.template)

    with WRITE_LOCK:
        threads = load_threads()
        for index, thread in enumerate(threads):
            if thread["id"] != thread_id:
                continue

            updated = {
                **thread,
                "title": title,
                "content": content,
                "template": template,
                "updated_at": timestamp_now(),
            }
            threads.pop(index)
            threads.insert(0, updated)
            write_threads(threads)
            return {"thread": updated, "threads": threads}

    return {"thread": None, "threads": load_threads()}


@app.delete("/api/threads/{thread_id}")
def delete_thread(thread_id: str) -> dict[str, Any]:
    with WRITE_LOCK:
        threads = load_threads()
        remaining_threads = [thread for thread in threads if thread["id"] != thread_id]
        deleted = len(remaining_threads) != len(threads)

        if deleted:
            write_threads(remaining_threads)

    return {"deleted": deleted, "threads": remaining_threads if deleted else threads}


def load_notes() -> dict[str, Any]:
    ensure_storage()
    try:
        raw = NOTES_PATH.read_text(encoding="utf-8").strip()
        if not raw:
            return {}
        data = json.loads(raw)
        return data if isinstance(data, dict) else {}
    except (json.JSONDecodeError, OSError):
        return {}


def write_notes(notes: dict[str, Any]) -> None:
    ensure_storage()
    NOTES_PATH.write_text(
        json.dumps(notes, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )


def load_threads() -> list[dict[str, Any]]:
    ensure_storage()
    try:
        raw = THREADS_PATH.read_text(encoding="utf-8").strip()
        if not raw:
            return []
        data = json.loads(raw)
        if isinstance(data, dict):
            threads = data.get("threads", [])
            return threads if isinstance(threads, list) else []
        return []
    except (json.JSONDecodeError, OSError):
        return []


def write_threads(threads: list[dict[str, Any]]) -> None:
    ensure_storage()
    THREADS_PATH.write_text(
        json.dumps({"threads": threads}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def timestamp_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def sanitize_template(template: dict[str, str]) -> dict[str, str]:
    cleaned: dict[str, str] = {}

    for key, value in template.items():
        if not isinstance(key, str) or not isinstance(value, str):
            continue
        cleaned[key] = value.rstrip()

    return cleaned
