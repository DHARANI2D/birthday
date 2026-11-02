# 🎂 Happy Birthday, Kaviya

A little interactive birthday surprise that runs in the browser — no installs for the person opening it.

**The story**

1. In a warm, candle-lit room (wine damask walls, velvet drapes, a balloon arch and her name in bunting) Mom, Dad and her sister sing *Happy Birthday* around the cake while Kaviya claps along, lyrics shown live. A gentle piano-and-strings arrangement keeps playing throughout.
2. A **"Make a wish"** popup appears. Kaviya closes her eyes, the family hushes, and she can type her wish (kept private, or sent to you if you set up a wish inbox, see below).
3. She takes a breath and **blows out the candles**. You can see her breath carry across to the flames, the smoke curl up, and her wish float away.
4. The room lights come up, everybody cheers, and **Kaviya cuts the cake**. Drag down (or press <kbd>Space</kbd> / tap the button) and the knife eases smoothly through the cake in her hand while she watches the blade. Two cuts make a slice.
5. She lifts the slice out with a cake server and walks it over to a plate, showing the real cross-section: sponge, cream and strawberry jam. Confetti, applause, the family sings once more, and there's a personal note to read.

Everything is generated in code: the 3D scene (Three.js), every texture (canvas), every sound (Web Audio). There are no images or audio files, so the whole site is a handful of small files and works offline.

## Run it

Just double-click **`index.html`**, or serve the folder:

```bash
npm run serve        # then open http://localhost:8080
```

## Make it yours

Everything personal lives in **`src/config.js`**: her name, what you call her, the song lyrics, the letter, how you sign off, and where her wish is sent.

```bash
npm install          # first time only
npm run build        # rebuilds dist/birthday.js from src/
```

Want to change how the family looks (skin tone, outfit colours, hair, who stands where)? See `SPECS` and `createFamily` in `src/people.js`.

## Put it online (free) with GitHub Pages

1. **Make the repo public.** GitHub Pages is free only for public repositories: repo → *Settings* → *General* → scroll to *Danger Zone* → *Change visibility* → *Public*. (Everything in the repo, including the letter, becomes visible to anyone who looks.)
2. Repo → *Settings* → *Pages* → *Source: Deploy from a branch* → pick this branch and the `/ (root)` folder → *Save*.
3. After a minute your link appears at the top of that page, e.g. `https://dharani2d.github.io/birthday/`.

Or drag the whole folder onto [Netlify Drop](https://app.netlify.com/drop).

## Receive her wish 💌

When she types a wish, the site can email it to you through [Formspree](https://formspree.io) (free).

1. Sign up at formspree.io and click **+ New form** (any name, e.g. *Kaviya's wish*). Use the email address where you want the wish to arrive, and confirm it.
2. Copy the form's endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `wishInbox` in **`src/config.js`**, then run `npm run build` and push.
4. Submit one test wish yourself; Formspree may ask you to confirm the first submission.

With an address set, the wish popup tells her that her wish *"will be sent to Dharani 💌"*. Without one, it promises the wish stays on her screen, and nothing is sent. Sending only happens on the real website (GitHub Pages or similar), not when `index.html` is opened directly from a folder.

## Notes

- Works best in a recent Chrome, Edge, Safari or Firefox, on desktop or phone (it adapts to portrait screens). If a device is slow it quietly lowers the quality.
- Sound needs one tap to start (browsers require it) — that's the *Open your surprise* button. There's a mute button in the corner.

## Project layout

```
index.html, styles.css     page + overlays (intro, wish popup, letter)
src/config.js              ← names, lyrics, letter, wish inbox
src/story.js               the whole sequence, start to finish
src/people.js              the family: faces, outfits, arm IK, animation
src/cake.js, geometry.js   cake as real solid wedges, decorations, knife grooves
src/tools.js               knife and cake server
src/stage.js, engine.js    table, lights, balloons, camera, bloom
src/fx.js                  flames, smoke, breath, crumbs, sparkles
src/audio.js               synthesised music (piano, strings, celesta) + sound effects
src/textures.js            procedural textures
dist/birthday.js           the built bundle (committed)
```
