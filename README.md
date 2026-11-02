# 🎂 Happy Birthday, Kaviya

A little interactive birthday surprise that runs in the browser — no installs for the person opening it.

**The story**

1. A music-box *Happy Birthday* plays while Kaviya, Mom, Dad and her sister sing and clap around the cake, with the lyrics shown live.
2. A **"Make a wish"** popup appears. Kaviya closes her eyes, the family hushes, and she can type her wish (it never leaves the page).
3. She takes a breath and **blows out the candles** — tap *Blow!* or really blow into the microphone. You can see her breath carry across to the flames, the smoke curl up, and her wish float away to the stars.
4. The room lights come up, everybody cheers, and **Kaviya cuts the cake**. Drag the knife down (or press <kbd>Space</kbd> / tap the button) — the blade presses through the cake and she follows with her arm. Two cuts make a slice.
5. A cake server lifts the slice out and carries it to a plate, showing the real cross-section: sponge, cream and strawberry jam. Confetti, sparkles, applause — and a personal note to read.

Everything is generated in code: the 3D scene (Three.js), every texture (canvas), every sound (Web Audio). There are no images or audio files, so the whole site is a handful of small files and works offline.

## Run it

Just double-click **`index.html`**, or serve the folder:

```bash
npm run serve        # then open http://localhost:8080
```

## Make it yours

Everything personal lives in **`src/config.js`** — her name, what you call her, the song lyrics, the letter, and how you sign off.

```bash
npm install          # first time only
npm run build        # rebuilds dist/birthday.js from src/
```

Want to change how the family looks (skin tone, outfit colours, hats, who stands where)? See `SPECS` and `createFamily` in `src/people.js`.

## Put it online (free)

The built site is committed, so any static host works.

**GitHub Pages:** repo → *Settings* → *Pages* → *Deploy from a branch* → pick this branch and the `/ (root)` folder → *Save*. Your link will be `https://<your-username>.github.io/birthday/`.

Or drag the whole folder onto [Netlify Drop](https://app.netlify.com/drop).

## Notes

- Works best in a recent Chrome, Edge, Safari or Firefox, on desktop or phone (it adapts to portrait screens). If a device is slow it quietly lowers the quality.
- Sound needs one tap to start (browsers require it) — that's the *Open your surprise* button. There's a mute button in the corner.
- The microphone is only used if you choose *Use my mic*, and the audio never leaves the device.

## Project layout

```
index.html, styles.css     page + overlays (intro, wish popup, letter)
src/config.js              ← names, lyrics, letter
src/story.js               the whole sequence, start to finish
src/people.js              the family: faces, outfits, arm IK, animation
src/cake.js, geometry.js   cake as real solid wedges, decorations, knife grooves
src/tools.js               knife and cake server
src/stage.js, engine.js    table, lights, balloons, camera, bloom
src/fx.js                  flames, smoke, breath, crumbs, sparkles
src/audio.js               synthesised music box + sound effects
src/textures.js            procedural textures
dist/birthday.js           the built bundle (committed)
```
