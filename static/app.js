const COLUMN_GROUPS = [
  { label: "a", finals: ["a", "ai", "ao", "an", "ang"] },
  { label: "o", finals: ["o", "ong", "ou"] },
  { label: "e", finals: ["e", "ei", "en", "eng", "er"] },
  { label: "i", finals: ["i", "ia", "iao", "ie", "iu", "ian", "iang", "in", "ing", "iong"] },
  { label: "u", finals: ["u", "ua", "uo", "ui", "uai", "uan", "un", "uang", "ueng"] },
  { label: "ü", finals: ["ü", "üe", "üan", "ün"] },
];

const ROW_ORDER = ["", "b", "p", "m", "f", "d", "t", "n", "l", "z", "c", "s", "zh", "ch", "sh", "r", "j", "q", "x", "g", "k", "h"];

const ROW_DATA = {
  "": [
    "a", "ai", "ao", "an", "ang", "o", "ou", "e", "ei", "en", "eng", "er",
    "yi", "ya", "yao", "ye", "you", "yan", "yang", "yin", "ying", "yong",
    "wu", "wa", "wo", "wei", "wai", "wan", "wen", "wang", "weng",
    "yu", "yue", "yuan", "yun",
  ],
  b: ["ba", "bai", "bao", "ban", "bang", "bo", "bei", "ben", "beng", "bi", "biao", "bie", "bian", "bin", "bing", "bu"],
  p: ["pa", "pai", "pao", "pan", "pang", "po", "pou", "pei", "pen", "peng", "pi", "piao", "pie", "pian", "pin", "ping", "pu"],
  m: ["ma", "mai", "mao", "man", "mang", "mo", "mou", "mei", "men", "meng", "mi", "miao", "mie", "miu", "mian", "min", "ming", "mu"],
  f: ["fa", "fan", "fang", "fo", "fou", "fei", "fen", "feng", "fu"],
  d: ["da", "dai", "dao", "dan", "dang", "dong", "dou", "de", "dei", "deng", "di", "diao", "die", "diu", "dian", "ding", "du", "duo", "dui", "duan", "dun"],
  t: ["ta", "tai", "tao", "tan", "tang", "tong", "tou", "te", "teng", "ti", "tiao", "tie", "tian", "ting", "tu", "tuo", "tui", "tuan", "tun"],
  n: ["na", "nai", "nao", "nan", "nang", "nong", "nou", "ne", "nei", "nen", "neng", "ni", "niao", "nie", "niu", "nian", "niang", "nin", "ning", "nu", "nuo", "nuan", "nü", "nüe"],
  l: ["la", "lai", "lao", "lan", "lang", "long", "lou", "le", "lei", "leng", "li", "lia", "liao", "lie", "liu", "lian", "liang", "lin", "ling", "lu", "luo", "luan", "lun", "lü", "lüe"],
  z: ["za", "zai", "zao", "zan", "zang", "zong", "zou", "ze", "zei", "zen", "zeng", "zi", "zu", "zuo", "zui", "zuan", "zun"],
  c: ["ca", "cai", "cao", "can", "cang", "cong", "cou", "ce", "cen", "ceng", "ci", "cu", "cuo", "cui", "cuan", "cun"],
  s: ["sa", "sai", "sao", "san", "sang", "song", "sou", "se", "sen", "seng", "si", "su", "suo", "sui", "suan", "sun"],
  zh: ["zha", "zhai", "zhao", "zhan", "zhang", "zhong", "zhou", "zhe", "zhei", "zhen", "zheng", "zhi", "zhu", "zhua", "zhuo", "zhui", "zhuai", "zhuan", "zhun", "zhuang"],
  ch: ["cha", "chai", "chao", "chan", "chang", "chong", "chou", "che", "chen", "cheng", "chi", "chu", "chua", "chuo", "chui", "chuai", "chuan", "chun", "chuang"],
  sh: ["sha", "shai", "shao", "shan", "shang", "shou", "she", "shei", "shen", "sheng", "shi", "shu", "shua", "shuo", "shui", "shuai", "shuan", "shun", "shuang"],
  r: ["rao", "ran", "rang", "rong", "rou", "re", "ren", "reng", "ri", "ru", "rua", "ruo", "rui", "ruan", "run"],
  j: ["ji", "jia", "jiao", "jie", "jiu", "jian", "jiang", "jin", "jing", "jiong", "ju", "jue", "juan", "jun"],
  q: ["qi", "qia", "qiao", "qie", "qiu", "qian", "qiang", "qin", "qing", "qiong", "qu", "que", "quan", "qun"],
  x: ["xi", "xia", "xiao", "xie", "xiu", "xian", "xiang", "xin", "xing", "xiong", "xu", "xue", "xuan", "xun"],
  g: ["ga", "gai", "gao", "gan", "gang", "gong", "gou", "ge", "gei", "gen", "geng", "gu", "gua", "guo", "gui", "guai", "guan", "gun", "guang"],
  k: ["ka", "kai", "kao", "kan", "kang", "kong", "kou", "ke", "kei", "ken", "keng", "ku", "kua", "kuo", "kui", "kuai", "kuan", "kun", "kuang"],
  h: ["ha", "hai", "hao", "han", "hang", "hong", "hou", "he", "hei", "hen", "heng", "hu", "hua", "huo", "hui", "huai", "huan", "hun", "huang"],
};

const NULL_INITIAL_FINALS = {
  a: "a",
  ai: "ai",
  ao: "ao",
  an: "an",
  ang: "ang",
  o: "o",
  ou: "ou",
  e: "e",
  ei: "ei",
  en: "en",
  eng: "eng",
  er: "er",
  yi: "i",
  ya: "ia",
  yao: "iao",
  ye: "ie",
  you: "iu",
  yan: "ian",
  yang: "iang",
  yin: "in",
  ying: "ing",
  yong: "iong",
  wu: "u",
  wa: "ua",
  wo: "uo",
  wei: "ui",
  wai: "uai",
  wan: "uan",
  wen: "un",
  wang: "uang",
  weng: "ueng",
  yu: "ü",
  yue: "üe",
  yuan: "üan",
  yun: "ün",
};

const INITIAL_LABELS = { "": "-" };
const FINAL_ORDER = COLUMN_GROUPS.flatMap((group) => group.finals);
const SAVE_DEBOUNCE_MS = 280;

const state = {
  selectedId: null,
  notes: {},
  cells: new Map(),
  buttons: new Map(),
  statusTimer: null,
  saveTimer: null,
};

const elements = {
  body: document.body,
  table: document.getElementById("pinyin-table"),
  tooltip: document.getElementById("tooltip"),
  toggleLeft: document.getElementById("toggle-left-panel"),
  expandLeft: document.getElementById("expand-left-panel"),
  toggleRight: document.getElementById("toggle-right-panel"),
  expandRight: document.getElementById("expand-right-panel"),
  mobileLeftShortcut: document.getElementById("mobile-left-shortcut"),
  detailEmpty: document.getElementById("detail-empty-state"),
  detailForm: document.getElementById("detail-form"),
  originalSyllable: document.getElementById("original-syllable"),
  cellPosition: document.getElementById("cell-position"),
  phoneticInput: document.getElementById("phonetic-input"),
  noteInput: document.getElementById("note-input"),
  highlightToggle: document.getElementById("highlight-toggle"),
  saveState: document.getElementById("save-state"),
};

window.addEventListener("DOMContentLoaded", () => {
  init().catch(() => {
    elements.saveState.textContent = "Không tải được notes từ backend.";
  });
});

async function init() {
  await loadNotes();
  buildTable();
  bindPanelControls();
  bindDetailForm();
  syncMobilePanelDefaults();
  window.addEventListener("resize", syncMobilePanelDefaults);
  renderDetails();
  elements.saveState.textContent = "Đã tải notes từ data/notes.json.";
}

async function loadNotes() {
  const response = await fetch("/api/notes");
  if (!response.ok) {
    throw new Error("Failed to load notes");
  }

  const payload = await response.json();
  state.notes = payload.notes || {};
}

function buildTable() {
  const thead = document.createElement("thead");
  const groupRow = document.createElement("tr");
  groupRow.className = "group-row";

  const cornerTop = document.createElement("th");
  cornerTop.className = "corner-cell";
  cornerTop.rowSpan = 2;
  cornerTop.textContent = "Âm đầu";
  groupRow.append(cornerTop);

  COLUMN_GROUPS.forEach((group) => {
    const th = document.createElement("th");
    th.colSpan = group.finals.length;
    th.textContent = group.label;
    groupRow.append(th);
  });

  const finalRow = document.createElement("tr");
  finalRow.className = "final-row";

  COLUMN_GROUPS.forEach((group) => {
    group.finals.forEach((finalKey) => {
      const th = document.createElement("th");
      th.textContent = finalKey;
      finalRow.append(th);
    });
  });

  thead.append(groupRow, finalRow);

  const tbody = document.createElement("tbody");

  ROW_ORDER.forEach((initial) => {
    const row = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.className = "row-header";
    rowHeader.scope = "row";
    rowHeader.textContent = INITIAL_LABELS[initial] || initial;
    row.append(rowHeader);

    const syllableMap = buildSyllableMap(initial);

    FINAL_ORDER.forEach((finalKey) => {
      const td = document.createElement("td");
      const syllable = syllableMap.get(finalKey);

      if (!syllable) {
        td.className = "chart-blank";
        row.append(td);
        return;
      }

      const id = `${initial || "null"}:${finalKey}`;
      const button = document.createElement("button");
      button.className = "chart-cell";
      button.type = "button";
      button.textContent = syllable;
      button.dataset.id = id;
      button.dataset.original = syllable;
      button.dataset.final = finalKey;
      button.dataset.initial = initial;

      const cellMeta = { id, initial, final: finalKey, original: syllable };
      state.cells.set(id, cellMeta);
      state.buttons.set(id, button);

      bindCellInteractions(button);

      td.append(button);
      syncButtonState(id);
      row.append(td);
    });

    tbody.append(row);
  });

  elements.table.replaceChildren(thead, tbody);
}

function buildSyllableMap(initial) {
  const syllables = ROW_DATA[initial];
  const map = new Map();

  syllables.forEach((syllable) => {
    const finalKey = deriveFinalKey(initial, syllable);
    if (finalKey) {
      map.set(finalKey, syllable);
    }
  });

  return map;
}

function deriveFinalKey(initial, syllable) {
  if (!initial) {
    return NULL_INITIAL_FINALS[syllable] || null;
  }

  if (initial === "j" || initial === "q" || initial === "x") {
    if (syllable.endsWith("iong")) return "iong";
    if (syllable.endsWith("iang")) return "iang";
    if (syllable.endsWith("ian")) return "ian";
    if (syllable.endsWith("ing")) return "ing";
    if (syllable.endsWith("in")) return "in";
    if (syllable.endsWith("iao")) return "iao";
    if (syllable.endsWith("ie")) return "ie";
    if (syllable.endsWith("iu")) return "iu";
    if (syllable.endsWith("ia")) return "ia";
    if (syllable.endsWith("uan")) return "üan";
    if (syllable.endsWith("un")) return "ün";
    if (syllable.endsWith("ue")) return "üe";
    if (syllable.endsWith("u")) return "ü";
  }

  return syllable.slice(initial.length) || null;
}

function bindCellInteractions(button) {
  button.addEventListener("mouseenter", (event) => {
    showTooltip(event, getTooltipText(button.dataset.id));
  });

  button.addEventListener("mousemove", (event) => {
    moveTooltip(event);
  });

  button.addEventListener("mouseleave", hideTooltip);
  button.addEventListener("blur", hideTooltip);

  button.addEventListener("click", () => {
    selectCell(button.dataset.id);
  });
}

function bindPanelControls() {
  elements.toggleLeft.addEventListener("click", toggleLeftPanel);
  elements.expandLeft.addEventListener("click", toggleLeftPanel);
  elements.mobileLeftShortcut.addEventListener("click", toggleLeftPanel);
  elements.toggleRight.addEventListener("click", toggleRightPanel);
  elements.expandRight.addEventListener("click", toggleRightPanel);
}

function bindDetailForm() {
  elements.phoneticInput.addEventListener("input", scheduleSave);
  elements.noteInput.addEventListener("input", scheduleSave);
  elements.highlightToggle.addEventListener("change", scheduleSave);
}

function selectCell(id) {
  if (state.selectedId && state.buttons.has(state.selectedId)) {
    state.buttons.get(state.selectedId).classList.remove("is-selected");
  }

  state.selectedId = id;
  state.buttons.get(id).classList.add("is-selected");

  if (elements.body.classList.contains("right-collapsed")) {
    toggleRightPanel();
  }

  renderDetails();
}

function renderDetails() {
  const selected = state.selectedId ? state.cells.get(state.selectedId) : null;
  const noteState = selected ? getCellNoteState(selected.id) : null;
  const disabled = !selected;

  elements.detailEmpty.hidden = !disabled;
  elements.detailForm.classList.toggle("is-disabled", disabled);
  elements.phoneticInput.disabled = disabled;
  elements.noteInput.disabled = disabled;
  elements.highlightToggle.disabled = disabled;

  if (!selected) {
    elements.originalSyllable.textContent = "-";
    elements.cellPosition.textContent = "-";
    elements.phoneticInput.value = "";
    elements.noteInput.value = "";
    elements.highlightToggle.checked = false;
    elements.saveState.textContent = "Chọn một ô để chỉnh sửa.";
    return;
  }

  elements.originalSyllable.textContent = selected.original;
  elements.cellPosition.textContent = `${INITIAL_LABELS[selected.initial] || selected.initial} × ${selected.final}`;
  elements.phoneticInput.value = noteState.phonetic;
  elements.noteInput.value = noteState.note;
  elements.highlightToggle.checked = noteState.highlighted;
  elements.saveState.textContent = "Gõ để tự lưu vào data/notes.json.";
}

function scheduleSave() {
  if (!state.selectedId) return;
  const draft = buildDraft(state.selectedId);

  elements.saveState.textContent = "Đang chuẩn bị lưu...";

  if (state.saveTimer) {
    window.clearTimeout(state.saveTimer);
  }

  state.saveTimer = window.setTimeout(() => {
    persistNoteDraft(draft.cellId, draft.payload).catch(() => {
      elements.saveState.textContent = "Lưu thất bại. Backend không phản hồi.";
    });
  }, SAVE_DEBOUNCE_MS);
}

function buildDraft(cellId) {
  const cell = state.cells.get(cellId);
  return {
    cellId,
    payload: {
      original: cell.original,
      initial: cell.initial,
      final: cell.final,
      phonetic: elements.phoneticInput.value.trim(),
      note: elements.noteInput.value,
      highlighted: elements.highlightToggle.checked,
    },
  };
}

async function persistNoteDraft(cellId, payload) {
  elements.saveState.textContent = "Đang lưu vào JSON...";

  const response = await fetch(`/api/notes/${encodeURIComponent(cellId)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to save note");
  }

  const result = await response.json();

  if (result.saved) {
    state.notes[cellId] = result.note;
  } else {
    delete state.notes[cellId];
  }

  syncButtonState(cellId);
  announceSaved();
}

function getCellNoteState(id) {
  const cell = state.cells.get(id);
  const stored = state.notes[id];

  return {
    phonetic: stored?.phonetic || cell.original,
    note: stored?.note || "",
    highlighted: stored?.highlighted || false,
  };
}

function syncButtonState(id) {
  const button = state.buttons.get(id);
  const cell = state.cells.get(id);
  if (!button || !cell) return;

  const noteState = getCellNoteState(id);
  button.classList.toggle("is-highlighted", noteState.highlighted);
}

function getTooltipText(id) {
  const noteState = getCellNoteState(id);
  return `Phiên âm: ${noteState.phonetic}`;
}

function showTooltip(event, text) {
  elements.tooltip.textContent = text;
  elements.tooltip.setAttribute("aria-hidden", "false");
  elements.tooltip.classList.add("is-visible");
  moveTooltip(event);
}

function moveTooltip(event) {
  elements.tooltip.style.left = `${event.clientX}px`;
  elements.tooltip.style.top = `${event.clientY}px`;
}

function hideTooltip() {
  elements.tooltip.classList.remove("is-visible");
  elements.tooltip.setAttribute("aria-hidden", "true");
}

function toggleLeftPanel() {
  elements.body.classList.toggle("left-collapsed");
}

function toggleRightPanel() {
  elements.body.classList.toggle("right-collapsed");
}

function syncMobilePanelDefaults() {
  if (window.innerWidth <= 860) {
    elements.body.classList.add("left-collapsed");
  }
}

function announceSaved() {
  const timeLabel = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  elements.saveState.textContent = `Đã lưu lúc ${timeLabel} vào data/notes.json.`;

  if (state.statusTimer) {
    window.clearTimeout(state.statusTimer);
  }

  state.statusTimer = window.setTimeout(() => {
    elements.saveState.textContent = "Gõ để tự lưu vào data/notes.json.";
  }, 1800);
}
