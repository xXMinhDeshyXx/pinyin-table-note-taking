# Thanh Van Pinyin Table

Personal static study workspace for Mandarin pinyin. The app uses a FastAPI backend, a plain HTML/CSS/JavaScript frontend, and JSON files for local persistence.

## Requirements

- Python 3.9 or newer
- `uv`

## Install

Create the virtual environment and install dependencies:

```bash
uv sync
```

## Run

Start the local server from the project root:

```bash
uv run uvicorn main:app --reload
```

Open the app in your browser:

```text
http://127.0.0.1:8000
```

## What The App Does

- Shows a three-panel pinyin workspace
- Lets you click a pinyin cell to open the detail panel
- Shows the `Phien am` tooltip when you hover a pinyin cell
- Saves per-cell notes and highlight state
- Lets you create, edit, and delete lecture threads
- Persists thread content and note data in local JSON files

## Data Storage

The backend creates the storage files automatically if they do not exist:

- `data/notes.json`
- `data/threads.json`

This happens on app startup and also inside the read/write helpers, so an untracked or missing `data/` folder will still be created at runtime as long as the process can write to the project directory.

## Basic Usage

1. Run the server with `uv run uvicorn main:app --reload`.
2. Open `http://127.0.0.1:8000`.
3. Click a pinyin cell to inspect and edit that entry.
4. Edit the phonetic text, note text, or highlight state for that cell.
5. Use the thread workspace to create and maintain lecture notes.

## Project Structure

- `main.py`: FastAPI app and JSON persistence endpoints
- `static/`: frontend HTML, CSS, and JavaScript
- `data/`: runtime note and thread storage
- `AGENTS.md`: project operating rules

## Notes

- `data/` is gitignored in this repository.
- `key.txt` is gitignored and should not be committed.
