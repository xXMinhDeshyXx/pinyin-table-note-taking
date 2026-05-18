from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from threading import Lock
from typing import Any

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
DATA_DIR = BASE_DIR / "data"
NOTES_PATH = DATA_DIR / "notes.json"
WRITE_LOCK = Lock()


class NotePayload(BaseModel):
    original: str
    initial: str
    final: str
    phonetic: str
    note: str = ""
    highlighted: bool = False


app = FastAPI(title="Thanh Van Pinyin Table")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.on_event("startup")
def ensure_storage() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not NOTES_PATH.exists():
        NOTES_PATH.write_text("{}\n", encoding="utf-8")


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
