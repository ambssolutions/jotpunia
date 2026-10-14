# Jot's AI welcome video

The site's welcome screen is ready for a short video of Jot, in his own voice, inviting visitors in. Until the file is added, the welcome shows his cut-out photo with his line appearing word by word, like captions.

## The script (about 11 seconds)
> Kia ora, sat sri akal, I'm Jot Punia, your South Auckland agent with Barfoot & Thompson.
> I've put everything in one place: my homes for sale, the suburbs I know best, and how I sell.
> Come on, let's take a look at my website.

The captions in `assets/video/welcome.vtt` match this script. If Jot changes a word, change it there too.

## How to make it (about 30 minutes, done by Jot himself)
The video has to be made from Jot's own face and voice, with his consent. These tools require him to record that consent himself.

1. **Choose a tool.** For example, HeyGen ("Instant Avatar") or Synthesia ("Personal Avatar"). Both clone a voice from a short recording.
2. **Record the training footage.** Use a phone in portrait, at eye level, with good front light, a plain background and **no one else in the shot**. Wear what he wears for work (navy, turban). Record 2 minutes talking naturally, then read the tool's consent statement on camera.
3. **Clone his voice.** Upload the same recording, or record 1 to 2 minutes of clean audio in a quiet room.
4. **Make the clip.** Paste the script above, choose a 9:16 portrait format and a plain dark or transparent background, and preview it. Fix any Māori or Punjabi pronunciation with the tool's phonetic spelling (for example "sut sree a-kaal").
5. **Export.** MP4 (H.264), 1080 x 1920 or 720 x 1280, under 4 MB. Many tools offer "compress" on export.

## Put it on the site
1. Save the clip as `assets/video/welcome.mp4`.
2. In `index.html`, find `id="intro"` and set `data-video="assets/video/welcome.mp4"`.
3. Commit and push. Vercel redeploys automatically.

The video plays muted (browsers block sound until a tap), with a **Tap for sound** button and the captions on. If the file fails to load, the photo and captions show instead.

## Rules
- Only Jot in frame, the whole clip.
- Don't add claims that aren't on the site (no "number one", no prices).
- Approval: Barfoot & Thompson should see the clip before it goes live, like any advertising.
