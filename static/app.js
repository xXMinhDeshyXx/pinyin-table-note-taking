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
    "a", "ai", "ao", "an", "ang", "o", "ong", "ou", "e", "ei", "en", "eng", "er",
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
  ong: "ong",
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
const SAVE_DEBOUNCE_MS = 300;
const THREAD_DEFAULT_TITLE = "Untitled thread";
const DEFAULT_INSPECTOR_WIDTH = 360;
const LECTURE_TEMPLATE_DEFAULTS = {
  hsk: "",
  lesson: "",
  nouns: "",
  verbs: "",
  conjunctions: "",
  phrases: "",
  measures: "",
  numbers: "",
  adjectives: "",
  suffixes: "",
  pronouns: "",
  keywords: "",
  keyphrases: "",
  grammar: "",
  questions: "",
};

const WORKSPACE_COPY = {
  pinyin: {
    tab: "Pinyin Table",
    hint: "Di chuột để xem tooltip. Bấm vào ô để mở ghi chú.",
    storage: "Notes are persisted on disk in <code>data/notes.json</code>.",
    inspectorTitle: "Chi tiết ô",
  },
  threads: {
    tab: "Lecture Notes",
    hint: "Tạo note ở giữa. Bấm vào note để mở trang dài, kéo mép panel phải để chỉnh độ rộng.",
    storage: "Threads are persisted on disk in <code>data/threads.json</code>.",
    inspectorTitle: "Lecture Note",
  },
};

const state = {
  workspace: "pinyin",
  selectedCellId: null,
  selectedThreadId: null,
  notes: {},
  threads: [],
  cells: new Map(),
  buttons: new Map(),
  noteSaveTimer: null,
  threadSaveTimer: null,
  noteStatusTimer: null,
  threadStatusTimer: null,
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
  workspaceButtons: Array.from(document.querySelectorAll("[data-workspace-target]")),
  workspaceStorageLabel: document.getElementById("workspace-storage-label"),
  workspaceTab: document.getElementById("workspace-tab"),
  workspaceHint: document.getElementById("workspace-hint"),
  detailPanelTitle: document.getElementById("detail-panel-title"),
  pinyinView: document.getElementById("workspace-pinyin-view"),
  threadsView: document.getElementById("workspace-threads-view"),
  pinyinDetailWorkspace: document.getElementById("detail-pinyin-workspace"),
  threadsDetailWorkspace: document.getElementById("detail-threads-workspace"),
  detailEmpty: document.getElementById("detail-empty-state"),
  detailForm: document.getElementById("detail-form"),
  originalSyllable: document.getElementById("original-syllable"),
  cellPosition: document.getElementById("cell-position"),
  phoneticInput: document.getElementById("phonetic-input"),
  noteInput: document.getElementById("note-input"),
  highlightToggle: document.getElementById("highlight-toggle"),
  saveState: document.getElementById("save-state"),
  createThreadButton: document.getElementById("create-thread-button"),
  threadList: document.getElementById("thread-list"),
  threadEmptyState: document.getElementById("thread-empty-state"),
  threadEditorForm: document.getElementById("thread-editor-form"),
  threadTitleInput: document.getElementById("thread-title-input"),
  threadContentInput: document.getElementById("thread-content-input"),
  threadSaveState: document.getElementById("thread-save-state"),
  deleteThreadButton: document.getElementById("delete-thread-button"),
  lectureInputs: {
    hsk: document.getElementById("lecture-hsk-input"),
    lesson: document.getElementById("lecture-lesson-input"),
    nouns: document.getElementById("lecture-nouns-input"),
    verbs: document.getElementById("lecture-verbs-input"),
    conjunctions: document.getElementById("lecture-conjunctions-input"),
    phrases: document.getElementById("lecture-phrases-input"),
    measures: document.getElementById("lecture-measures-input"),
    numbers: document.getElementById("lecture-numbers-input"),
    adjectives: document.getElementById("lecture-adjectives-input"),
    suffixes: document.getElementById("lecture-suffixes-input"),
    pronouns: document.getElementById("lecture-pronouns-input"),
    keywords: document.getElementById("lecture-keywords-input"),
    keyphrases: document.getElementById("lecture-keyphrases-input"),
    grammar: document.getElementById("lecture-grammar-input"),
    questions: document.getElementById("lecture-questions-input"),
  },
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});

async function init() {
  buildTable();
  bindPanelControls();
  bindWorkspaceControls();
  bindDetailForm();
  bindThreadEditor();
  syncMobilePanelDefaults();
  window.addEventListener("resize", syncMobilePanelDefaults);
  await hydrateWorkspaceData();
  syncAllCellStates();
  renderThreadList();
  renderPinyinDetails();
  renderThreadEditor();
  applyWorkspaceChrome();
}

async function hydrateWorkspaceData() {
  const [notesResult, threadsResult] = await Promise.allSettled([loadNotes(), loadThreads()]);

  if (notesResult.status === "rejected") {
    state.notes = {};
    elements.saveState.textContent = "Không tải được notes từ backend.";
  }

  if (threadsResult.status === "rejected") {
    state.threads = [];
    elements.threadSaveState.textContent = "Không tải được threads từ backend.";
  }
}

async function loadNotes() {
  const response = await fetch("/api/notes");
  if (!response.ok) {
    throw new Error("Failed to load notes");
  }

  const payload = await response.json();
  state.notes = payload.notes || {};
}

async function loadThreads() {
  const response = await fetch("/api/threads");
  if (!response.ok) {
    throw new Error("Failed to load threads");
  }

  const payload = await response.json();
  state.threads = Array.isArray(payload.threads) ? payload.threads : [];
}

function bindPanelControls() {
  elements.toggleLeft.addEventListener("click", toggleLeftPanel);
  elements.expandLeft.addEventListener("click", toggleLeftPanel);
  elements.mobileLeftShortcut.addEventListener("click", toggleLeftPanel);
  elements.toggleRight.addEventListener("click", toggleRightPanel);
  elements.expandRight.addEventListener("click", toggleRightPanel);
}

function bindWorkspaceControls() {
  elements.workspaceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchWorkspace(button.dataset.workspaceTarget);
    });
  });
}

function bindDetailForm() {
  elements.phoneticInput.addEventListener("input", scheduleNoteSave);
  elements.noteInput.addEventListener("input", scheduleNoteSave);
  elements.highlightToggle.addEventListener("change", scheduleNoteSave);
}

function bindThreadEditor() {
  elements.createThreadButton.addEventListener("click", createThread);
  elements.deleteThreadButton.addEventListener("click", deleteSelectedThread);

  elements.threadTitleInput.addEventListener("input", () => {
    updateThreadInspectorTitle(elements.threadTitleInput.value);
    scheduleThreadSave();
  });

  elements.threadContentInput.addEventListener("input", scheduleThreadSave);
  Object.values(elements.lectureInputs).forEach((input) => {
    input.addEventListener("input", scheduleThreadSave);
  });
}

function switchWorkspace(target) {
  if (!WORKSPACE_COPY[target]) {
    return;
  }

  state.workspace = target;

  if (target === "threads") {
    elements.body.classList.remove("right-collapsed");
  }

  applyWorkspaceChrome();

  if (target === "pinyin") {
    renderPinyinDetails();
  } else {
    renderThreadList();
    renderThreadEditor();
  }
}

function applyWorkspaceChrome() {
  const copy = WORKSPACE_COPY[state.workspace];

  elements.body.classList.toggle("workspace-pinyin", state.workspace === "pinyin");
  elements.body.classList.toggle("workspace-threads", state.workspace === "threads");

  elements.workspaceButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workspaceTarget === state.workspace);
  });

  elements.pinyinView.classList.toggle("is-active", state.workspace === "pinyin");
  elements.threadsView.classList.toggle("is-active", state.workspace === "threads");
  elements.pinyinDetailWorkspace.classList.toggle("is-active", state.workspace === "pinyin");
  elements.threadsDetailWorkspace.classList.toggle("is-active", state.workspace === "threads");

  elements.workspaceTab.textContent = copy.tab;
  elements.workspaceHint.textContent = copy.hint;
  elements.workspaceStorageLabel.innerHTML = copy.storage;

  if (state.workspace === "pinyin") {
    elements.detailPanelTitle.textContent = copy.inspectorTitle;
  } else {
    updateThreadInspectorTitle(elements.threadTitleInput.value);
  }
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

      state.cells.set(id, { id, initial, final: finalKey, original: syllable });
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

  button.addEventListener("mousemove", moveTooltip);
  button.addEventListener("mouseleave", hideTooltip);
  button.addEventListener("blur", hideTooltip);

  button.addEventListener("click", () => {
    selectCell(button.dataset.id);
  });
}

function selectCell(id) {
  if (state.selectedCellId && state.buttons.has(state.selectedCellId)) {
    state.buttons.get(state.selectedCellId).classList.remove("is-selected");
  }

  state.selectedCellId = id;
  state.buttons.get(id).classList.add("is-selected");

  if (state.workspace !== "pinyin") {
    switchWorkspace("pinyin");
  }

  if (elements.body.classList.contains("right-collapsed")) {
    toggleRightPanel();
  }

  renderPinyinDetails();
}

function renderPinyinDetails() {
  const selected = state.selectedCellId ? state.cells.get(state.selectedCellId) : null;
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

function scheduleNoteSave() {
  if (!state.selectedCellId) {
    return;
  }

  const draft = buildNoteDraft(state.selectedCellId);
  elements.saveState.textContent = "Đang chuẩn bị lưu...";

  if (state.noteSaveTimer) {
    window.clearTimeout(state.noteSaveTimer);
  }

  state.noteSaveTimer = window.setTimeout(() => {
    persistNoteDraft(draft.cellId, draft.payload).catch(() => {
      elements.saveState.textContent = "Lưu thất bại. Backend không phản hồi.";
    });
  }, SAVE_DEBOUNCE_MS);
}

function buildNoteDraft(cellId) {
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
  announceNoteSaved();
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
  if (!button || !cell) {
    return;
  }

  const noteState = getCellNoteState(id);
  button.classList.toggle("is-highlighted", noteState.highlighted);
}

function syncAllCellStates() {
  state.buttons.forEach((_, id) => {
    syncButtonState(id);
  });
}

function getTooltipText(id) {
  const noteState = getCellNoteState(id);
  return `Phiên âm: ${noteState.phonetic}`;
}

function renderThreadList() {
  if (!state.threads.length) {
    const empty = document.createElement("div");
    empty.className = "thread-empty-list";
    empty.textContent = "Chưa có thread nào. Tạo thread mới để bắt đầu.";
    elements.threadList.replaceChildren(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  state.threads.forEach((thread) => {
    const button = document.createElement("button");
    button.className = "thread-card";
    button.type = "button";
    button.dataset.threadId = thread.id;
    button.classList.toggle("is-active", thread.id === state.selectedThreadId);

    const head = document.createElement("div");
    head.className = "thread-card-head";

    const title = document.createElement("div");
    title.className = "thread-card-title";
    title.textContent = thread.title || THREAD_DEFAULT_TITLE;

    const time = document.createElement("span");
    time.className = "thread-card-time";
    time.textContent = formatTimestamp(thread.updated_at);

    const snippet = document.createElement("div");
    snippet.className = "thread-card-snippet";
    snippet.textContent = buildThreadSnippet(thread);

    head.append(title, time);
    button.append(head, snippet);
    button.addEventListener("click", () => {
      selectThread(thread.id);
    });

    fragment.append(button);
  });

  elements.threadList.replaceChildren(fragment);
}

function selectThread(threadId) {
  state.selectedThreadId = threadId;

  if (state.workspace !== "threads") {
    switchWorkspace("threads");
  } else {
    renderThreadList();
    renderThreadEditor();
  }

  if (elements.body.classList.contains("right-collapsed")) {
    toggleRightPanel();
  }
}

function renderThreadEditor() {
  const thread = getSelectedThread();
  const disabled = !thread;
  const lectureTemplate = getLectureTemplate(thread);

  elements.threadEmptyState.hidden = !disabled;
  elements.threadEditorForm.hidden = disabled;
  elements.threadEditorForm.classList.toggle("is-disabled", disabled);
  elements.threadTitleInput.disabled = disabled;
  elements.threadContentInput.disabled = disabled;
  elements.deleteThreadButton.disabled = disabled;
  Object.values(elements.lectureInputs).forEach((input) => {
    input.disabled = disabled;
  });

  if (!thread) {
    elements.threadTitleInput.value = "";
    elements.threadContentInput.value = "";
    Object.values(elements.lectureInputs).forEach((input) => {
      input.value = "";
    });
    elements.threadSaveState.textContent = "Chọn một thread để chỉnh sửa.";
    updateThreadInspectorTitle("");
    return;
  }

  elements.threadTitleInput.value = thread.title || THREAD_DEFAULT_TITLE;
  elements.threadContentInput.value = thread.content || "";
  Object.entries(elements.lectureInputs).forEach(([key, input]) => {
    input.value = lectureTemplate[key] || "";
  });
  elements.threadSaveState.textContent = "Gõ để tự lưu vào data/threads.json.";
  updateThreadInspectorTitle(thread.title);
}

async function createThread() {
  elements.createThreadButton.disabled = true;
  elements.threadSaveState.textContent = "Đang tạo thread...";

  try {
    const response = await fetch("/api/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: THREAD_DEFAULT_TITLE }),
    });

    if (!response.ok) {
      throw new Error("Failed to create thread");
    }

    const payload = await response.json();
    state.threads = Array.isArray(payload.threads) ? payload.threads : [];
    state.selectedThreadId = payload.thread?.id || null;
    switchWorkspace("threads");
    renderThreadList();
    renderThreadEditor();

    if (elements.body.classList.contains("right-collapsed")) {
      toggleRightPanel();
    }

    elements.threadTitleInput.focus();
    elements.threadTitleInput.select();
  } catch {
    elements.threadSaveState.textContent = "Tạo thread thất bại.";
  } finally {
    elements.createThreadButton.disabled = false;
  }
}

async function deleteSelectedThread() {
  const thread = getSelectedThread();
  if (!thread) {
    return;
  }

  const confirmed = window.confirm(`Delete "${thread.title || THREAD_DEFAULT_TITLE}"? This cannot be undone.`);
  if (!confirmed) {
    return;
  }

  elements.deleteThreadButton.disabled = true;
  elements.threadSaveState.textContent = "Đang xóa thread...";

  try {
    const response = await fetch(`/api/threads/${encodeURIComponent(thread.id)}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete thread");
    }

    const result = await response.json();
    state.threads = Array.isArray(result.threads) ? result.threads : [];
    state.selectedThreadId = state.threads[0]?.id || null;
    renderThreadList();
    renderThreadEditor();
    elements.threadSaveState.textContent = "Thread đã bị xóa khỏi data/threads.json.";
  } catch {
    elements.threadSaveState.textContent = "Xóa thread thất bại. Backend không phản hồi.";
  } finally {
    elements.deleteThreadButton.disabled = !state.selectedThreadId;
  }
}

function scheduleThreadSave() {
  if (!state.selectedThreadId) {
    return;
  }

  const draft = buildThreadDraft();
  elements.threadSaveState.textContent = "Đang chuẩn bị lưu...";

  if (state.threadSaveTimer) {
    window.clearTimeout(state.threadSaveTimer);
  }

  state.threadSaveTimer = window.setTimeout(() => {
    persistThreadDraft(draft.threadId, draft.payload).catch(() => {
      elements.threadSaveState.textContent = "Lưu thread thất bại. Backend không phản hồi.";
    });
  }, SAVE_DEBOUNCE_MS);
}

function buildThreadDraft() {
  return {
    threadId: state.selectedThreadId,
    payload: {
      title: elements.threadTitleInput.value.trim() || THREAD_DEFAULT_TITLE,
      content: elements.threadContentInput.value,
      template: buildLectureTemplateDraft(),
    },
  };
}

function buildLectureTemplateDraft() {
  const template = {};

  Object.entries(elements.lectureInputs).forEach(([key, input]) => {
    template[key] = input.value;
  });

  return template;
}

async function persistThreadDraft(threadId, payload) {
  elements.threadSaveState.textContent = "Đang lưu vào JSON...";

  const response = await fetch(`/api/threads/${encodeURIComponent(threadId)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to save thread");
  }

  const result = await response.json();
  state.threads = Array.isArray(result.threads) ? result.threads : state.threads;

  if (result.thread?.id) {
    state.selectedThreadId = result.thread.id;
    updateThreadInspectorTitle(result.thread.title);
  }

  renderThreadList();
  announceThreadSaved();
}

function getSelectedThread() {
  return state.threads.find((thread) => thread.id === state.selectedThreadId) || null;
}

function buildThreadSnippet(thread) {
  const flattened = (thread?.content || "").replace(/\s+/g, " ").trim();
  if (flattened) {
    return flattened;
  }

  const template = getLectureTemplate(thread);
  const lecturePreview = [template.keywords, template.keyphrases, template.grammar]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return lecturePreview || "Empty page";
}

function getLectureTemplate(thread) {
  return {
    ...LECTURE_TEMPLATE_DEFAULTS,
    ...(thread?.template || {}),
  };
}

function formatTimestamp(value) {
  if (!value) {
    return "--:--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "--:--";
  }

  return date.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateThreadInspectorTitle(rawTitle) {
  if (state.workspace !== "threads") {
    return;
  }

  const title = rawTitle.trim() || WORKSPACE_COPY.threads.inspectorTitle;
  elements.detailPanelTitle.textContent = title;
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

function announceNoteSaved() {
  const timeLabel = formatClockTime();
  elements.saveState.textContent = `Đã lưu lúc ${timeLabel} vào data/notes.json.`;

  if (state.noteStatusTimer) {
    window.clearTimeout(state.noteStatusTimer);
  }

  state.noteStatusTimer = window.setTimeout(() => {
    elements.saveState.textContent = "Gõ để tự lưu vào data/notes.json.";
  }, 1800);
}

function announceThreadSaved() {
  const timeLabel = formatClockTime();
  elements.threadSaveState.textContent = `Đã lưu lúc ${timeLabel} vào data/threads.json.`;

  if (state.threadStatusTimer) {
    window.clearTimeout(state.threadStatusTimer);
  }

  state.threadStatusTimer = window.setTimeout(() => {
    elements.threadSaveState.textContent = "Gõ để tự lưu vào data/threads.json.";
  }, 1800);
}

function formatClockTime() {
  return new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
