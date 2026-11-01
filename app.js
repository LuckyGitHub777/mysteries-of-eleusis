const data = {
  orientation: [
    ["Plain answer", "Eleusis is a sacred place near Athens where ancient Greek mysteries honored Demeter and Persephone."],
    ["Story", "The myth comes first: Demeter searches for Persephone, who descends and returns changed."],
    ["Boundary", "The known/hidden boundary prevents mystery from becoming false certainty."],
    ["Figures", "Demeter, Persephone, Hades, Triptolemos, Eumolpos, and the Initiate appear as story roles."],
    ["Symbols", "Seed, grain, torch, veil, pomegranate, cup, road, hall, and dawn become readable symbols."],
    ["Path", "The historic Sacred Way connected Athens with the sanctuary at Eleusis; the site adds a modern symbolic return."],
    ["Creation", "A gentle Mystery Chamber can be composed after the pattern becomes clear."]
  ],
  myth: [
    { title: "Persephone Is Taken Below", icon: "✺", text: "Persephone, daughter of Demeter, is taken into the underworld by Hades. Her disappearance sets the story in motion.", question: "Persephone is the daughter taken below; Demeter is her mother." },
    { title: "Demeter Searches", icon: "♨", text: "Demeter is the mother who searches for Persephone. Her grief becomes action, attention, and sacred search.", question: "Plain key: Demeter is the searching mother." },
    { title: "The Earth Becomes Barren", icon: "☷", text: "As Demeter mourns, the fertile world is interrupted. The outer world mirrors the broken bond between mother and daughter.", question: "Plain key: the myth links personal loss with the life of the earth." },
    { title: "The Return Is Arranged", icon: "◐", text: "Zeus sends Hermes to bring Persephone back. A pomegranate seed binds her to return to the underworld for part of each year.", question: "The pomegranate explains why the return is not permanent." },
    { title: "Persephone Returns Changed", icon: "☼", text: "Persephone returns to Demeter for part of the year. Their reunion links the story to the fertility of the land and the rhythm of the seasons.", question: "Plain key: return means transformation, not reset." }
  ],
  pattern: [
    ["Invocation", "Attention gathers for a retelling of the story."],
    ["Loss", "Persephone is separated from Demeter; ordinary life is disrupted."],
    ["Search", "Demeter looks for what was lost; grief becomes motion."],
    ["Descent", "The story moves toward the underworld and the hidden threshold."],
    ["Revelation", "A deeper meaning is recognized, not fully explained."],
    ["Return", "Persephone returns, and life returns changed."],
    ["Blessing", "The pattern becomes something the initiate can carry outward."]
  ],
  known: [
    "Demeter and Persephone stand at the center of the story.",
    "The simple story is Demeter searching for Persephone and Persephone returning changed.",
    "The Mysteries belonged to Eleusis and were treated as sacred.",
    "The experience involved secrecy, participation, and remembered symbols.",
    "A safe modern experience can teach the pattern without claiming to reveal the hidden rite."
  ],
  hidden: [
    "The exact inner ritual sequence.",
    "The exact words spoken in the hidden center.",
    "The exact objects shown to initiates.",
    "The exact subjective experience of ancient participants.",
    "Any claim that a website can literally reproduce the ancient rite."
  ],
  figures: [
    { name: "Demeter", role: "The Search", icon: "☼", text: "Grief, devotion, earth, nourishment, and refusal to forget what has been lost." },
    { name: "Persephone", role: "The Descent", icon: "◒", text: "The crossing below, the changed return, and the knowledge that comes from the hidden place." },
    { name: "Hades", role: "The Threshold", icon: "⬟", text: "The dark boundary where transformation becomes unavoidable and easy answers end." },
    { name: "Triptolemos", role: "The Transmission", icon: "✦", text: "What is received becomes carried outward as cultivation, teaching, and continuity." },
    { name: "Eumolpos", role: "The Voice", icon: "♬", text: "Sacred memory, song, lineage, and the power of words held with restraint." },
    { name: "The Initiate", role: "The Witness", icon: "𐀒", text: "The one who participates in the ancient celebration and remembers the experience." }
  ],
  symbols: [
    { name: "Seed", icon: "◍", is: "Life hidden inside darkness.", means: "Descent can become renewal.", read: "What is buried may not be dead." },
    { name: "Grain", icon: "⌁", is: "The cultivated life that feeds a community.", means: "Return becomes nourishment.", read: "Wisdom is proven by what it helps grow." },
    { name: "Torch", icon: "♨", is: "A moving light in the dark.", means: "Search, guidance, and attention.", read: "The path appears step by step, not all at once." },
    { name: "Veil", icon: "◐", is: "A boundary between visible and hidden.", means: "Mystery protects depth from flattening.", read: "Some truths must be approached carefully." },
    { name: "Pomegranate", icon: "✹", is: "A red fruit of seeds and binding.", means: "Descent leaves a mark and a bond.", read: "Every threshold changes the one who crosses." },
    { name: "Cup", icon: "▽", is: "A vessel for symbolic participation.", means: "The body belongs to the mystery.", read: "Experience is not only thought; it is attention embodied." },
    { name: "Road", icon: "━", is: "The way between ordinary world and sanctuary.", means: "Initiation unfolds through movement.", read: "Understanding comes by walking the sequence." },
    { name: "Hall", icon: "▣", is: "The inner chamber of encounter.", means: "The center is entered, not explained from outside.", read: "Ask what is spoken, shown, and done." },
    { name: "Dawn", icon: "☼", is: "Light after the hidden passage.", means: "Return after descent.", read: "Completion is the ability to come back changed." }
  ],
  way: [
    { title: "Ordinary World", icon: "I", text: "The path begins outside the mystery, with no special knowledge required.", question: "Plain key: the path starts where the visitor already is." },
    { title: "Separation", icon: "II", text: "The story separates from everyday life: Persephone is below, Demeter searches, and attention slows.", question: "Plain key: separation tells the visitor that the journey has begun." },
    { title: "Search", icon: "III", text: "The torch stands for Demeter’s search. It turns grief into movement and gives the visitor a visible path.", question: "Plain key: search is grief becoming action." },
    { title: "Bridge", icon: "IV", text: "A bridge marks a careful crossing from ordinary understanding toward mystery.", question: "Plain key: a threshold should be clear, chosen, and safe." },
    { title: "Eleusis", icon: "V", text: "Eleusis is a real place near Athens, with a sanctuary where the initiates gathered.", question: "Eleusis names the place; the Mysteries name its sacred tradition." },
    { title: "Inner Hall", icon: "VI", text: "The hidden center is approached through words, images, and actions, but not exposed as a complete script.", question: "Plain key: hidden does not mean confusing; it means responsibly veiled." },
    { title: "Return", icon: "VII", text: "The path closes by returning to ordinary life with one clear word and a changed understanding.", question: "Plain key: the visitor returns able to explain what they learned." }
  ],
  hall: [
    { name: "Words Spoken", text: "The mystery has language: names, invocations, vows, warnings, and phrases that focus attention." },
    { name: "Things Shown", text: "The mystery has image: object, light, grain, veil, and visible symbol." },
    { name: "Actions Done", text: "The mystery has movement: walking, waiting, choosing, witnessing, and returning." }
  ],
  returnWords: [
    ["Grain", "Return as nourishment: something living can grow."],
    ["Torch", "Return as guidance: the next step can be lit without forcing the whole path."],
    ["Memory", "Return as remembrance: what was lost should not be erased."],
    ["Silence", "Return as restraint: not everything deep must be over-explained."],
    ["Renewal", "Return as renewal: descent can become life again."],
    ["Courage", "Return as crossing: the threshold can be met with care."],
    ["Wonder", "Return as openness: the mystery remains alive."]
  ],
  keys: [
    { prompt: "The mother who searches is", answer: "Demeter", options: ["Athena", "Demeter", "Hera", "Artemis"] },
    { prompt: "The daughter who is taken into the underworld is", answer: "Persephone", options: ["Hestia", "Aphrodite", "Persephone", "Iris"] },
    { prompt: "The place where the ancient Mysteries were celebrated is", answer: "Eleusis", options: ["Olympia", "Delphi", "Delos", "Eleusis"] },
    { prompt: "The ancient inner rites are", answer: "not fully known", options: ["not fully known", "fully documented", "a modern script", "a public play"] },
    { prompt: "The fruit that helps explain Persephone's recurring time below is", answer: "pomegranate", options: ["fig", "olive", "pomegranate", "grape"] },
    { prompt: "The historic Sacred Way linked Athens with", answer: "Eleusis", options: ["Corinth", "Eleusis", "Sparta", "Crete"] },
    { prompt: "The seven-movement pattern on this website is", answer: "a modern interpretation", options: ["the secret ancient script", "a recorded oracle", "a modern interpretation", "an original initiation"] }
  ],
  lens: [
    ["Saturn", "Loss / descent", "The first chamber begins with gravity, limitation, and the dark threshold."],
    ["Jupiter", "Search / order", "The seeker looks for mercy, orientation, and a larger frame."],
    ["Mars", "Crisis / force", "Conflict becomes usable when held by form and boundary."],
    ["Sol", "Revelation", "A center appears: recognition, radiance, and conscious meaning."],
    ["Venus", "Renewal", "Beauty, relation, and fertility return with ethical choice."],
    ["Mercury", "Interpretation", "Signs, speech, and movement turn experience into language."],
    ["Luna", "Return", "Memory, reflection, and integration close the arc gently."]
  ],
  guide: [
    ["Eleusis", "The ancient Greek sanctuary near Athens where the Mysteries of Demeter and Persephone were celebrated."],
    ["Mystery", "A sacred pattern entered through story, symbol, secrecy, and participation."],
    ["Demeter", "The searching mother: grief, earth, nourishment, devotion, and memory."],
    ["Persephone", "The descending and returning daughter: rupture, underworld, transformation, and seasonal renewal."],
    ["Initiate", "The one who enters, witnesses, remembers, and returns with changed understanding."],
    ["Veil", "The boundary that keeps hidden things from becoming cheap explanations."],
    ["Sacred Way", "The historical route from Athens to Eleusis, interpreted here as a symbolic journey and return."],
    ["Symbol", "An object, image, gesture, color, or sound that holds more than one meaning."],
    ["Return", "The final movement: bringing insight back into life without pretending nothing changed."]
  ],
  principles: [
    ["No false reconstruction", "The hidden center remains honestly veiled."],
    ["No hidden intensity", "No shocks, pressure tactics, or concealed effects."],
    ["Choice stays visible", "Watching, pausing, or leaving are valid paths."],
    ["Beauty remains readable", "Luxury is calm, spacious, and clear."],
    ["Symbol before spectacle", "Objects teach through meaning, not noise."],
    ["Return is required", "Every descent needs grounding and ordinary light."],
    ["Accessible by design", "Contrast, focus, reduced motion, keyboard flow, and plain language are part of the experience."],
    ["Create with care", "Modern chambers should inspire reflection, not coercion or overclaiming."]
  ]
};

const modes = ["lowSensory", "highContrast", "focusMode"];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char])); }

function initControls() {
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem("eleusisModes") || "{}"); } catch (error) { saved = {}; }
  modes.forEach((mode) => { if (saved[mode]) document.body.classList.add(mode); });
  updateModeButtons();
  $$(".chip-button[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.toggle(button.dataset.mode);
      saveModes(); updateModeButtons();
    });
  });
  $("#resetModes")?.addEventListener("click", () => {
    modes.forEach((mode) => document.body.classList.remove(mode));
    saveModes(); updateModeButtons();
  });
}
function saveModes() {
  try { sessionStorage.setItem("eleusisModes", JSON.stringify(Object.fromEntries(modes.map((mode) => [mode, document.body.classList.contains(mode)])))); } catch (error) { /* preferences remain usable for this session */ }
}
function updateModeButtons() {
  $$(".chip-button[data-mode]").forEach((button) => button.setAttribute("aria-pressed", String(document.body.classList.contains(button.dataset.mode))));
}
function initNav() {
  const toggle = $(".nav-toggle"); const links = $("#navLinks");
  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links?.addEventListener("click", (event) => {
    if (event.target.tagName === "A") { links.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); }
  });
}
function initReveal() {
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("js-animations");
  const targets = $$(".reveal");
  if (!("IntersectionObserver" in window)) { targets.forEach((el) => el.classList.add("visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .1 });
  targets.forEach((el) => observer.observe(el));
}
function cardGrid(id, rows, className="info-card") {
  const root = $(id); if (!root) return;
  root.innerHTML = rows.map(([title, text]) => `<article class="${className}"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p></article>`).join("");
}
function initOrientation() { cardGrid("#orientationGrid", data.orientation); }
function initPattern() {
  const root = $("#patternRibbon"); if (!root) return;
  root.innerHTML = data.pattern.map(([title, text], i) => `<article class="pattern-step"><span class="num">${String(i+1).padStart(2,"0")}</span><strong>${escapeHTML(title)}</strong><p>${escapeHTML(text)}</p></article>`).join("");
}
function initKnownHidden() {
  $("#knownList").innerHTML = data.known.map((x) => `<li>${escapeHTML(x)}</li>`).join("");
  $("#hiddenList").innerHTML = data.hidden.map((x) => `<li>${escapeHTML(x)}</li>`).join("");
}
function initFigures() {
  const root = $("#figureGrid");
  root.innerHTML = data.figures.map((f) => `<article class="figure-card"><div class="figure-icon" aria-hidden="true">${escapeHTML(f.icon)}</div><div class="figure-role">${escapeHTML(f.role)}</div><h3>${escapeHTML(f.name)}</h3><p>${escapeHTML(f.text)}</p></article>`).join("");
}
function initSymbols() {
  const root = $("#symbolMuseum");
  root.innerHTML = data.symbols.map((s) => `<article class="symbol-card"><div class="symbol-object" aria-hidden="true">${escapeHTML(s.icon)}</div><h3>${escapeHTML(s.name)}</h3><div class="symbol-layer"><strong>What it is</strong><span>${escapeHTML(s.is)}</span></div><div class="symbol-layer"><strong>What it means</strong><span>${escapeHTML(s.means)}</span></div><div class="symbol-layer"><strong>How to read it</strong><span>${escapeHTML(s.read)}</span></div></article>`).join("");
}
function initTabbed(trackSelector, panelSelector, items, classBase) {
  const track = $(trackSelector); const panel = $(panelSelector); if (!track || !panel) return;
  const render = (index) => {
    const item = items[index];
    track.querySelectorAll("button").forEach((b, i) => { b.setAttribute("aria-selected", String(i === index)); b.setAttribute("tabindex", i === index ? "0" : "-1"); });
    panel.setAttribute("aria-labelledby", `${classBase}-tab-${index}`);
    panel.innerHTML = `<div class="panel-symbol" aria-hidden="true">${escapeHTML(item.icon)}</div><span class="panel-kicker">${String(index+1).padStart(2,"0")} · ${escapeHTML(item.title)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p><p class="panel-question">${escapeHTML(item.question)}</p>`;
  };
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "0");
  track.innerHTML = items.map((item, i) => `<button id="${classBase}-tab-${i}" aria-controls="${panel.id}" class="${classBase}-tab" type="button" role="tab" tabindex="${i === 0 ? "0" : "-1"}" aria-selected="${i === 0 ? "true" : "false"}"><span class="dot">${escapeHTML(item.icon)}</span><span>${escapeHTML(item.title)}</span></button>`).join("");
  const buttons = track.querySelectorAll("button");
  const focusTab = (index) => {
    buttons.forEach((button, i) => button.setAttribute("tabindex", i === index ? "0" : "-1"));
    buttons[index]?.focus();
    render(index);
  };
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => focusTab(index));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : (index + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1) + items.length) % items.length;
      focusTab(next);
    });
  });
  render(0);
}
function initMyth() { initTabbed("#mythTrack", "#mythPanel", data.myth, "myth"); }
function initWay() { initTabbed("#wayTrack", "#wayPanel", data.way, "way"); }
function initHall() {
  const root = $("#hallDoors");
  root.innerHTML = data.hall.map((d, i) => `<article class="hall-door"><div class="door-num">Door ${i+1}</div><h3>${escapeHTML(d.name)}</h3><p>${escapeHTML(d.text)}</p></article>`).join("");
}
function initReturn() {
  const grid = $("#returnWordGrid"); const panel = $("#returnPanel");
  const show = (word, note) => {
    grid.querySelectorAll(".word-button").forEach((b) => b.classList.toggle("active", b.textContent === word));
    panel.innerHTML = `<h3>Return word: ${escapeHTML(word)}.</h3><p>${escapeHTML(note)}</p><p class="panel-question">The story is known. The pattern is known. The hidden boundary is known. The symbols can be read. The return closes the symbolic journey.</p>`;
  };
  grid.innerHTML = data.returnWords.map(([word]) => `<button class="word-button" type="button">${escapeHTML(word)}</button>`).join("") + `<div class="custom-return"><input id="customWord" aria-label="Write a return word" placeholder="Write a return word" maxlength="32" /><button class="button ghost" type="button" id="customWordButton">Carry</button></div>`;
  grid.querySelectorAll(".word-button").forEach((button, i) => button.addEventListener("click", () => show(data.returnWords[i][0], data.returnWords[i][1])));
  $("#customWordButton")?.addEventListener("click", () => {
    const value = $("#customWord").value.trim() || "Mystery";
    show(value, "This word belongs to the return. It closes the path gently into ordinary life.");
  });
  // No return word is presumed before an intentional selection.
}
function initKeys() {
  const form = $("#keysForm"); const result = $("#keysResult"); if (!form) return;
  form.innerHTML = data.keys.map((k, i) => `<div class="key-row"><label>${escapeHTML(i+1)}. ${escapeHTML(k.prompt)}<select name="key${i}" aria-label="${escapeHTML(k.prompt)}"><option value="">Choose a key…</option>${k.options.map((o) => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("")}</select></label></div>`).join("") + `<button class="button primary keys-submit" type="submit">Open the Seven Keys</button>`;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    let correct = 0;
    data.keys.forEach((k, i) => { if (fd.get(`key${i}`) === k.answer) correct++; });
    result.classList.add("visible");
    if (correct === data.keys.length) {
      result.innerHTML = `<h3>The seven keys are open.</h3><p>The myth, the sacred place, the pomegranate, the procession, and the boundary between history and modern interpretation have been identified.</p>`;
    } else {
      result.innerHTML = `<h3>${correct} of ${data.keys.length} keys opened.</h3><p>The Myth, Known / Hidden, and Sacred Way sections hold the missing keys.</p>`;
    }
  });
}
function initBuilder() {
  const form = $("#mysteryForm"); const out = $("#blueprint"); if (!form) return;
  const compose = () => {
    const fd = new FormData(form);
    const title = escapeHTML(fd.get("title") || "Mystery Chamber");
    const beginning = escapeHTML(fd.get("beginning"));
    const path = escapeHTML(fd.get("path"));
    const symbol = escapeHTML(fd.get("symbol"));
    const returnState = escapeHTML(fd.get("returnState"));
    const role = escapeHTML(fd.get("role"));
    out.innerHTML = `<h3>${title}</h3><p>A symbolic chamber for a ${role.toLowerCase()} moving from ${beginning.toLowerCase()} through ${path.toLowerCase()} toward ${returnState.toLowerCase()}.</p><div class="blueprint-list"><div><strong>Threshold</strong>Begin with ${beginning.toLowerCase()} named gently, with a visible exit and no hidden intensity.</div><div><strong>Path</strong>Let the visitor move through ${path.toLowerCase()} using one clear gesture, one quiet choice, and enough silence to notice.</div><div><strong>Symbol</strong>Place the ${symbol.toLowerCase()} at the center. Let it teach through image before explanation.</div><div><strong>Return</strong>Close with ordinary light, a single word, and the return state of ${returnState.toLowerCase()}.</div><div><strong>Boundary</strong>This chamber is inspired by Eleusinian grammar; it does not claim to reproduce the hidden ancient rite.</div></div>`;
  };
  form.addEventListener("submit", (event) => { event.preventDefault(); compose(); });
  form.addEventListener("change", compose);
  form.addEventListener("input", compose);
  compose();
}
function initLens() { cardGrid("#lensGrid", data.lens.map(([a,b,c]) => [a, `${b}. ${c}`]), "lens-card"); }
function initGuide() { cardGrid("#guideGrid", data.guide, "guide-card"); }
function initPrinciples() { cardGrid("#principleGrid", data.principles, "principle-card"); }

document.addEventListener("DOMContentLoaded", () => {
  initControls(); initNav(); initReveal(); initOrientation(); initMyth(); initPattern(); initKnownHidden(); initFigures(); initSymbols(); initWay(); initHall(); initReturn(); initKeys(); initBuilder(); initLens(); initGuide(); initPrinciples();
});
