const EPISODES = {
  latest: {
    title: "The Invisible Gorilla Study: Why We Miss What’s Right in Front of Us",
    src: "https://audio2.redcircle.com/episodes/7449e6f3-a6e8-43bd-b98f-5cab1a5d46d2/stream.mp3",
    page: "episode/invisible-gorilla-experiment.html",
    duration: 442
  },
  "ep-2": {
    title: "The Illusion of Control: Why We Think We Can Control Random Events",
    src: "https://audio2.redcircle.com/episodes/0f6b94cd-3866-49bf-93a5-3e090ebb2e1d/stream.mp3",
    page: "episode/illusion-of-control.html",
    duration: 400
  },
  "ep-3": {
    title: "The Lost in the Mall Study: Can You Remember Something That Never Happened?",
    src: "https://audio2.redcircle.com/episodes/fcbf723b-1e27-4a01-9cd7-861a1e5c87c8/stream.mp3",
    page: "episode/lost-in-the-mall-experiment.html",
    duration: 365
  },
  "ep-4": {
    title: "The Barnum-Forer Effect: Why Personality Descriptions Describe You Perfectly",
    src: "https://audio2.redcircle.com/episodes/e4abb3c5-dee7-43b9-9b0b-d6892f7cec82/stream.mp3",
    page: "episode/barnum-forer-effect.html",
    duration: 413
  },
  "ep-5": {
    title: "The End-of History Illusion: Why We Think We've Stopped Changing",
    src: "https://audio2.redcircle.com/episodes/f7bfdfe0-0630-4dd4-989a-20123087ccb6/stream.mp3",
    page: "episode/end-of-history-illusion.html",
    duration: 456
  },
  "ep-6": {
    title: "Harlow’s Monkeys: Why Love and Comfort Matter More Than We Think",
    src: "https://audio2.redcircle.com/episodes/db9c0e75-05d9-41b5-a2b6-5711852f46e7/stream.mp3",
    page: "episode/harlows-monkey-experiments.html",
    duration: 509
  },
  "ep-7": {
    title: "The Peak-End Rule: How We Judge Experiences",
    src: "https://audio2.redcircle.com/episodes/3532e010-ca3a-46fd-89bd-ba13e1cc001b/stream.mp3",
    page: "episode/peak-end-rule.html",
    duration: 468
  },
  "ep-8": {
    title: "The Hot Coffee Experiment: Can Coffee Change How We See People",
    src: "https://audio2.redcircle.com/episodes/7bf2261a-a316-4e03-858e-2b4d1dbb2c77/stream.mp3",
    page: "episode/hot-coffee-experiment.html",
    duration: 394
  },
  "ep-9": {
    title: "The Scarcity Effect: Why We Want What We Can't Have",
    src: "https://audio2.redcircle.com/episodes/8f1fe5fe-0f1e-4fc9-b00a-37ecb93f355f/stream.mp3",
    page: "episode/scarcity-effect.html",
    duration: 472
  },
  "ep-10": {
    title: "The Chameleon Effect: Why We Imitate Those Around Us",
    src: "https://audio2.redcircle.com/episodes/01aeccdd-a30b-47f4-a4ec-26776f8817ed/stream.mp3",
    page: "episode/chameleon-effect.html",
    duration: 441
  },
  "ep-11": {
    title: "The Broken Windows Theory: How Small Signs of Disorder Change Behaviour",
    src: "https://audio2.redcircle.com/episodes/55577daf-1688-43e8-af9f-f8f4cd326bcc/stream.mp3",
    page: "episode/broken-windows-theory.html",
    duration: 428
  },
  "ep-12": {
    title: "The Gambler's Fallacy: Why We See Patterns in Randomness",
    src: "https://audio2.redcircle.com/episodes/e6729b1c-e013-4049-9268-e7bbbe407d13/stream.mp3",
    page: "episode/gamblers-fallacy.html",
    duration: 455
  },
  "ep-13": {
    title: "The Phone in the Room Study: Is Your Phone Distracting You Without You Knowing?",
    src: "https://audio2.redcircle.com/episodes/f7f83408-446f-4c31-b19a-82f48f1e0085/stream.mp3",
    page: "episode/phone-in-the-room-study.html",
    duration: 372
  },
  "ep-14": {
    title: "The White Bear Suppression Study: Why Suppressing Thoughts Backfires",
    src: "https://audio2.redcircle.com/episodes/c740225b-1fe3-4293-b921-f96a85c173fe/stream.mp3",
    page: "episode/white-bear-experiment.html",
    duration: 370
  },
  "ep-15": {
    title: "The Foot-in-the-Door Technique: How Tiny Yeses Lead to Bigger Ones",
    src: "https://audio2.redcircle.com/episodes/5bbb8057-e3a3-4a43-9ce7-ad5655dbbccf/stream.mp3",
    page: "episode/foot-in-the-door-technique.html",
    duration: 415
  },
  "ep-16": {
    title: "The Curse of Knowledge: Why Experts Forget what Beginners Don't Know",
    src: "https://audio2.redcircle.com/episodes/4de1b070-cce9-4c5e-a1c2-5963aa3b5faf/stream.mp3",
    page: "episode/curse-of-knowledge.html",
    duration: 383
  },
  "ep-17": {
    title: "The Scar Experiment: How Your Beliefs Change the Way You See Yourself",
    src: "https://audio2.redcircle.com/episodes/e7876ffa-cd2e-4d17-8243-b6ba8515ba14/stream.mp3",
    page: "episode/scar-experiment.html",
    duration: 361
  },
  "ep-18": {
    title: "The Decoy Effect: How a Third Option Changes Your Decision",
    src: "https://audio2.redcircle.com/episodes/d47b253f-67d0-42b2-a984-f02df56ece4b/stream.mp3",
    page: "episode/decoy-effect.html",
    duration: 311
  },
  "ep-19": {
    title: "The Identifiable Victim Effect: Why One Story Moves Us More",
    src: "https://audio2.redcircle.com/episodes/6c3734b7-b487-43c2-922b-6d4367325fef/stream.mp3",
    page: "episode/identifiable-victim-effect.html",
    duration: 311
  },
  "ep-20": {
    title: "Outcome Bias: Why Bad Decisions Sometimes Appear Right in Hindsight",
    src: "https://audio2.redcircle.com/episodes/c4dfc8aa-6c7b-41ae-ad1a-862560d033b0/stream.mp3",
    page: "episode/outcome-bias.html",
    duration: 294
  },
  "ep-21": {
    title: "The Fundamental Attribution Error: Why We Misjudge Other People's Behaviour",
    src: "https://audio2.redcircle.com/episodes/d8c62567-9572-4a42-b402-f8b23acae61b/stream.mp3",
    page: "episode/fundamental-attribution-error.html",
    duration: 394
  },
  "ep-22": {
    title: "Hindsight Bias: Why The Past Seems Predictable",
    src: "https://audio2.redcircle.com/episodes/04ac8d88-9dd4-4a9e-834a-2b5071153ab7/stream.mp3",
    page: "episode/hindsight-bias.html",
    duration: 295
  },
  "ep-23": {
    title: "The Pratfall Effect: Why Mistakes Can Make Us More Likeable",
    src: "https://audio2.redcircle.com/episodes/a039bab0-264c-4e83-a818-d892a57e71ac/stream.mp3",
    page: "episode/pratfall-effect.html",
    duration: 277
  },
  "ep-24": {
    title: "Moral Licensing: When Doing Good Makes Us Do Bad",
    src: "https://audio2.redcircle.com/episodes/e1ef7266-013f-454c-9ee3-185db7d7bb19/stream.mp3",
    page: "episode/moral-licensing.html",
    duration: 336
  },
  "ep-25": {
    title: "The False Consensus Effect: Why We Think Others Think Like Us",
    src: "https://audio2.redcircle.com/episodes/ced3c58d-cac1-460e-a11f-c4cc6f66c3ea/stream.mp3",
    page: "episode/false-consensus-effect.html",
    duration: 354
  },
  "ep-26": {
    title: "The Spotlight Effect: Why We Think Everyone Is Watching",
    src: "https://audio2.redcircle.com/episodes/80dedfc7-89a2-49e7-a26f-8a49745889de/stream.mp3",
    page: "episode/spotlight-effect.html",
    duration: 304
  },
  "ep-27": {
    title: "The Self-Fulfilling Prophecy: How Beliefs Shape Reality",
    src: "https://audio2.redcircle.com/episodes/7ed20acc-dd6e-4a73-9444-c86fba29f2e4/stream.mp3",
    page: "episode/self-fulfilling-prophecy.html",
    duration: 360
  },
  "ep-28": {
    title: "The Halo and Devil Effect: How One Trait Colours Everything",
    src: "https://audio2.redcircle.com/episodes/090cae96-c77f-4513-88e0-9e7f06bb3a53/stream.mp3",
    page: "episode/halo-and-devil-effect.html",
    duration: 266
  },
  "ep-29": {
    title: "The Zeigarnik Effect: Why Your Brain Remembers Incomplete Tasks",
    src: "https://audio2.redcircle.com/episodes/d456cb0b-13df-47de-a56a-6f2753024283/stream.mp3",
    page: "episode/zeigarnik-effect.html",
    duration: 378
  },
  "ep-30": {
    title: "Loss Aversion: Why Losing Hurts More Than Winning Feels Good",
    src: "https://audio2.redcircle.com/episodes/5807cccd-06bd-4b5d-bbb0-9aa783530c2f/stream.mp3",
    page: "episode/loss-aversion.html",
    duration: 410
  },
  "ep-31": {
    title: "Temporal Discounting: Why We Sacrifice the Future for Today",
    src: "https://audio2.redcircle.com/episodes/0da51f0a-e281-445c-9139-3a590f5fe664/stream.mp3",
    page: "episode/temporal-discounting.html",
    duration: 305
  },
  "ep-32": {
    title: "The Framing Effect: How Words Change Decisions",
    src: "https://audio2.redcircle.com/episodes/4485875b-15d1-4586-90b5-ec0e4a8cfac6/stream.mp3",
    page: "episode/framing-effect.html",
    duration: 329
  },
  "ep-33": {
    title: "The Dunning-Kruger Effect: Why Those Who Know Less Think They Know More",
    src: "https://audio2.redcircle.com/episodes/966ecc50-bd17-4382-b8b3-94e3db350cfd/stream.mp3",
    page: "episode/dunning-kruger-effect.html",
    duration: 318
  },
  "ep-34": {
    title: "The Progress Principle: The Psychology of Progress",
    src: "https://audio2.redcircle.com/episodes/aec03c01-57b7-4607-9826-7ce3233ff0e3/stream.mp3",
    page: "episode/progress-principle.html",
    duration: 356
  },
  "ep-35": {
    title: "Confirmation Bias: Why We Only See What We Want to Believe",
    src: "https://audio2.redcircle.com/episodes/d4426fe0-f77b-41d7-aa6d-4af571afab6f/stream.mp3",
    page: "episode/confirmation-bias.html",
    duration: 318
  },
  "ep-36": {
    title: "Anchoring Bias: How Anchors Control Our Decisions",
    src: "https://audio2.redcircle.com/episodes/fa35ab35-dcfc-48ec-9cc7-4496e28ef4d6/stream.mp3",
    page: "episode/anchoring-bias.html",
    duration: 345
  },
  "ep-37": {
    title: "The Availability Heuristic: Why Vivid Events Stick In Our Minds",
    src: "https://audio2.redcircle.com/episodes/d69f8b73-a892-435a-841c-82f441330c84/stream.mp3",
    page: "episode/availability-heuristic.html",
    duration: 295
  },
  "ep-38": {
    title: "The Rat Park: What Really Drives Addiction?",
    src: "https://audio2.redcircle.com/episodes/eef60bf3-c31e-4a3b-a17c-013121ed8dd1/stream.mp3",
    page: "episode/rat-park.html",
    duration: 324
  },
  "ep-39": {
    title: "Priming: How Subtle Cues Shape Behaviour",
    src: "https://audio2.redcircle.com/episodes/762381ec-cebc-4afc-bb38-b66849192705/stream.mp3",
    page: "episode/priming.html",
    duration: 343
  },
  "ep-40": {
    title: "The Stanford Prison Experiment: How Situations Shape Behaviour",
    src: "https://audio2.redcircle.com/episodes/bfbb4ff5-7406-4311-92e1-2cc301b32f04/stream.mp3",
    page: "episode/stanford-prison-experiment.html",
    duration: 390
  },
  "ep-41": {
    title: "The Bystander Effect: Why Crowds Can Stop Us Acting",
    src: "https://audio2.redcircle.com/episodes/89224b17-8b25-4bab-ac55-225d698611d2/stream.mp3",
    page: "episode/bystander-effect.html",
    duration: 360
  },
  "ep-42": {
    title: "The Asch Conformity Tests: Why We Doubt Our Own Eyes",
    src: "https://audio2.redcircle.com/episodes/ac62e03f-140e-4edc-a91e-073366ce8cf6/stream.mp3",
    page: "episode/asch-conformity-experiments.html",
    duration: 328
  },
  "ep-43": {
    title: "The Milgram Shock Experiment: How Far Will We Follow Authority?",
    src: "https://audio2.redcircle.com/episodes/f0997c9b-6fad-43ee-b5ae-5be9d4180a32/stream.mp3",
    page: "episode/milgram-obedience-experiments.html",
    duration: 383
  },
};

const audio = document.querySelector("#player");
const dock = document.querySelector("#dock");
const dockTitle = document.querySelector("#dockTitle");
const dockLink = document.querySelector("#dockLink");
const dockPlay = document.querySelector("#dockPlay");
const scrub = document.querySelector("#scrub");
const scrubFill = document.querySelector("#scrubFill");
const timeNow = document.querySelector("#timeNow");
const timeDur = document.querySelector("#timeDur");
const listenLabels = document.querySelectorAll("[data-listen-label]");
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

let currentId = null;

function fmt(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const s = Math.max(0, Math.floor(seconds));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}

function paintPlaying() {
  const playing = !audio.paused && !audio.ended;
  document.querySelectorAll("[data-play]").forEach((btn) => {
    btn.classList.toggle("is-playing", playing && btn.dataset.play === currentId);
  });
  if (dockPlay) {
    dockPlay.classList.toggle("is-playing", playing);
    dockPlay.setAttribute("aria-label", playing ? "Pause" : "Play");
  }
  listenLabels.forEach((el) => {
    el.textContent = playing && currentId === "latest" ? "Pause" : "Listen now";
  });
  document.querySelectorAll("[data-feature-label]").forEach((el) => {
    const id = el.closest("[data-play]")?.dataset.play || "latest";
    el.textContent = playing && currentId === id ? "Pause" : "Play episode";
  });
}

function sitePath(path) {
  if (!path || /^https?:/i.test(path)) return path;
  const nested = /\/episode\//.test(location.pathname);
  return (nested ? "../" : "") + path.replace(/^\//, "");
}

function showDock(ep) {
  dock.hidden = false;
  document.body.classList.add("dock-open");
  dockTitle.textContent = ep.title;
  dockLink.href = sitePath(ep.page);
  timeDur.textContent = fmt(ep.duration);
}

async function playEpisode(id) {
  const ep = EPISODES[id];
  if (!ep) return;
  if (currentId === id && !audio.paused) {
    audio.pause();
    return;
  }
  showDock(ep);
  if (currentId !== id) {
    currentId = id;
    audio.src = ep.src;
    scrubFill.style.width = "0%";
    scrub.setAttribute("aria-valuenow", "0");
    timeNow.textContent = "0:00";
    timeDur.textContent = fmt(ep.duration);
  }
  try {
    await audio.play();
  } catch (err) {
    const dest = sitePath(ep.page);
    const here = location.pathname.endsWith("/" + ep.page);
    if (dest && !here) location.href = dest;
  }
}

if (audio && dock && scrub && dockPlay) {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-play]");
    if (!btn) return;
    playEpisode(btn.dataset.play);
  });

  dockPlay.addEventListener("click", () => {
    if (!currentId) return;
    if (audio.paused) audio.play();
    else audio.pause();
  });

  audio.addEventListener("play", paintPlaying);
  audio.addEventListener("pause", paintPlaying);
  audio.addEventListener("ended", paintPlaying);
  audio.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(audio.duration)) timeDur.textContent = fmt(audio.duration);
  });
  audio.addEventListener("timeupdate", () => {
    const dur = Number.isFinite(audio.duration) ? audio.duration : (EPISODES[currentId]?.duration || 0);
    const ratio = dur ? audio.currentTime / dur : 0;
    const pct = Math.min(100, ratio * 100);
    scrubFill.style.width = pct + "%";
    scrub.setAttribute("aria-valuenow", String(Math.round(pct)));
    timeNow.textContent = fmt(audio.currentTime);
  });

  function seekTo(clientX) {
    const dur = Number.isFinite(audio.duration) ? audio.duration : (EPISODES[currentId]?.duration || 0);
    if (!dur) return;
    const rect = scrub.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * dur;
  }

  scrub.addEventListener("pointerdown", (event) => {
    if (!currentId) return;
    scrub.setPointerCapture(event.pointerId);
    seekTo(event.clientX);
  });
  scrub.addEventListener("pointermove", (event) => {
    if (!scrub.hasPointerCapture(event.pointerId)) return;
    seekTo(event.clientX);
  });
  scrub.addEventListener("keydown", (event) => {
    const dur = Number.isFinite(audio.duration) ? audio.duration : (EPISODES[currentId]?.duration || 0);
    if (!dur) return;
    if (event.key === "ArrowRight") audio.currentTime = Math.min(dur, audio.currentTime + 5);
    if (event.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
  });
}

if (header) {
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const filterRoot = document.querySelector("[data-filters]");
if (filterRoot) {
  const buttons = [...filterRoot.querySelectorAll("[data-filter]")];
  const typeButtons = buttons.filter((btn) => btn.dataset.filter !== "all");
  const typeOrder = typeButtons.map((btn) => btn.dataset.filter);
  const labels = Object.fromEntries(typeButtons.map((btn) => [btn.dataset.filter, btn.textContent.trim()]));
  const cards = [...document.querySelectorAll("[data-types]")];
  const status = filterRoot.querySelector("[data-filter-status]");
  const empty = document.querySelector("[data-filter-empty]");
  const known = new Set(typeOrder);

  const allCount = document.createElement("span");
  allCount.className = "filter-count";
  allCount.setAttribute("aria-hidden", "true");
  allCount.textContent = String(cards.length);
  buttons.find((btn) => btn.dataset.filter === "all").append(allCount);

  typeButtons.forEach((btn) => {
    const id = btn.dataset.filter;
    const count = cards.filter((card) => card.dataset.types.split(/\s+/).includes(id)).length;
    const countEl = document.createElement("span");
    countEl.className = "filter-count";
    countEl.setAttribute("aria-hidden", "true");
    countEl.textContent = String(count);
    btn.append(countEl);
    btn.setAttribute("aria-label", labels[id] + ", " + count + (count === 1 ? " episode" : " episodes"));
  });

  function readTypes() {
    const raw = new URLSearchParams(location.search).get("type") || "";
    return new Set(raw.split(",").map((part) => part.trim()).filter((part) => known.has(part)));
  }

  function writeTypes(selected) {
    const url = new URL(location.href);
    const value = typeOrder.filter((id) => selected.has(id));
    if (value.length) url.searchParams.set("type", value.join(","));
    else url.searchParams.delete("type");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function applyFilters(selected) {
    let shown = 0;
    cards.forEach((card) => {
      const types = card.dataset.types.split(/\s+/);
      const match = selected.size === 0 || types.some((type) => selected.has(type));
      card.hidden = !match;
      if (match) shown += 1;
    });
    buttons.forEach((btn) => {
      const on = btn.dataset.filter === "all" ? selected.size === 0 : selected.has(btn.dataset.filter);
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", String(on));
    });
    const names = typeOrder.filter((id) => selected.has(id)).map((id) => labels[id]);
    const noun = shown === 1 ? "episode" : "episodes";
    status.textContent = names.length ? names.join(" or ") + " · " + shown + " " + noun : shown + " " + noun;
    if (empty) empty.hidden = shown !== 0;
  }

  let selected = readTypes();
  applyFilters(selected);

  filterRoot.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn || !filterRoot.contains(btn)) return;
    const id = btn.dataset.filter;
    if (id === "all") selected.clear();
    else if (selected.has(id)) selected.delete(id);
    else selected.add(id);
    applyFilters(selected);
    writeTypes(selected);
  });
}

const form = document.querySelector("#contact-form");
const formError = document.querySelector("#form-error");
const formOk = document.querySelector("#form-ok");
if (form && formError && formOk) form.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.hidden = true;
  formOk.hidden = true;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    if (!name) form.elements.name.setAttribute("aria-invalid", "true");
    if (!emailOk) form.elements.email.setAttribute("aria-invalid", "true");
    if (!message) form.elements.message.setAttribute("aria-invalid", "true");
    formError.textContent = "Add your name, a real email, and a message.";
    formError.hidden = false;
    return;
  }
  const body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
  const href = "mailto:ami_to9@icloud.com?subject=" + encodeURIComponent("Circuit Breaker") + "&body=" + encodeURIComponent(body);
  formOk.hidden = false;
  window.location.href = href;
});
