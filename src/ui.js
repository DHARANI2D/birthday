import { CONFIG } from './config.js';

const $ = (id) => document.getElementById(id);
const show = (el, on = true) => el.classList.toggle('hidden', !on);

/** only send from the real website (not when the file is opened directly or in a preview) */
export function canSendWish() {
  return Boolean(CONFIG.wishInbox) && /^https?:$/.test(location.protocol) && !/claude/i.test(location.hostname);
}

/** post her wish to the form inbox; retries a couple of times if the network blips */
export async function sendWish(text, attempt = 0) {
  try {
    const res = await fetch(CONFIG.wishInbox, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `${CONFIG.name}'s birthday wish 💌`,
        wish: text,
        from: CONFIG.name,
        sentAt: new Date().toString(),
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return true;
  } catch (e) {
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 4000 * (attempt + 1)));
      return sendWish(text, attempt + 1);
    }
    console.warn('Could not send the wish:', e);
    return false;
  }
}

/** Thin wrapper around the page's DOM overlays. Every method returns a Promise or nothing. */
export function createUI() {
  const el = {
    intro: $('intro'), openBtn: $('openBtn'), headline: $('headline'), lyrics: $('lyrics'),
    prompt: $('prompt'), promptText: $('promptText'), promptBtns: $('promptBtns'),
    wish: $('wish'), wishInput: $('wishInput'), wishDone: $('wishDone'), wishFloat: $('wishFloat'),
    cutHint: $('cutHint'), big: $('bigGreeting'), endBar: $('endBar'), readNote: $('readNote'), replay: $('replay'),
    letter: $('letter'), letterBack: $('letterBack'), mute: $('mute'), wishNote: $('wishNote'),
  };
  // personalise the page from config
  document.title = `Happy Birthday ${CONFIG.name} 🎂`;
  document.querySelectorAll('.script-name').forEach((n) => (n.textContent = CONFIG.name));
  el.intro.querySelector('.kicker').textContent = CONFIG.kicker;
  el.intro.querySelector('.intro-sub').textContent = `Today is all about you, ${CONFIG.pet}.`;
  $('letterTitle').textContent = CONFIG.letter.title;
  $('letterBody').innerHTML = CONFIG.letter.paragraphs.map((p) => `<p>${p.replace(/</g, '&lt;')}</p>`).join('');
  $('letterClose').textContent = CONFIG.letter.closing;
  $('letterSign').textContent = `— ${CONFIG.signedBy}`;

  const once = (target, evt) => new Promise((res) => target.addEventListener(evt, res, { once: true }));
  let lyricTimer = 0;

  return {
    el,
    waitOpen() {
      return once(el.openBtn, 'click').then(() => {
        el.intro.classList.add('hidden');
      });
    },
    headline(on) {
      show(el.headline, on);
    },
    lyric(text) {
      clearTimeout(lyricTimer);
      el.lyrics.innerHTML = text ? `<span>${text}</span>` : '';
    },
    /** show a prompt with buttons; resolves with the id of the button pressed */
    ask(text, buttons, pos = 'bottom') {
      el.prompt.classList.toggle('top', pos === 'top');
      el.promptText.textContent = text || '';
      el.promptBtns.innerHTML = '';
      show(el.prompt, true);
      return new Promise((resolve) => {
        buttons.forEach((b) => {
          const btn = document.createElement('button');
          btn.className = `btn ${b.kind || 'primary'}`;
          btn.textContent = b.label;
          btn.addEventListener('click', () => {
            resolve(b.id);
          });
          el.promptBtns.appendChild(btn);
        });
      });
    },
    hidePrompt() {
      show(el.prompt, false);
    },
    /** the make-a-wish popup; when an inbox is set, the wish is sent to it */
    wish() {
      const sending = canSendWish();
      el.wishNote.textContent = sending
        ? `Think of the one thing your heart wants most this year, and whisper it here. Your wish will be sent to ${CONFIG.signedBy} 💌`
        : 'Think of the one thing your heart wants most this year. You can whisper it here; it never leaves this page.';
      el.wishInput.value = '';
      show(el.wish, true);
      setTimeout(() => el.wishInput.focus({ preventScroll: true }), 700);
      return once(el.wishDone, 'click').then(() => {
        show(el.wish, false);
        const text = el.wishInput.value.trim();
        if (sending && text) sendWish(text);
        return text;
      });
    },
    floatWish(text) {
      el.wishFloat.firstElementChild.textContent = text || '✨ your wish is on its way ✨';
      el.wishFloat.classList.remove('hidden', 'go');
      void el.wishFloat.offsetWidth;
      el.wishFloat.classList.add('go');
    },
    cutHint(on) {
      show(el.cutHint, on);
    },
    bigGreeting(on) {
      show(el.big, on);
      if (on) {
        const h = el.big.querySelector('h2');
        h.style.animation = 'none';
        void h.offsetWidth;
        h.style.animation = '';
      }
    },
    endBar(on) {
      show(el.endBar, on);
    },
    letter(on) {
      show(el.letter, on);
    },
    onReadNote(fn) {
      el.readNote.addEventListener('click', fn);
    },
    onLetterBack(fn) {
      el.letterBack.addEventListener('click', fn);
    },
    onReplay(fn) {
      el.replay.addEventListener('click', fn);
    },
  };
}
