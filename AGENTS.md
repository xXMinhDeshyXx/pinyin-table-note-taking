# AGENTS.md

## Project
- Personal static webpage for studying Mandarin pinyin.
- Primary artifact: a VSCode-style three-panel UI with an interactive pinyin table and JSON-backed note persistence.

## Working Rules
- Use Conventional Commits for every commit.
- Run the app through a local `uv` virtual environment and a Python ASGI server.
- Prefer a minimal Python backend plus plain HTML, CSS, and JavaScript unless the user asks for a framework.
- Preserve the pinyin chart ordering and grouped header layout derived from the provided `pinyin_table.png`.
- Persist user edits and notes in `data/notes.json`.

## UI Constraints
- Left and right panels must be collapsible.
- Clicking a pinyin cell must reveal the right details panel.
- Hovering a pinyin cell must show a tooltip for `Phiên âm`.
