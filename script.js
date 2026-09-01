const audio = document.getElementById("audioPlayer");
const title = document.getElementById("songTitle");
const artist = document.getElementById("songArtist");
const lyricsBox = document.getElementById("lyricsBox");
const translationBox = document.getElementById("translationBox");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const messageBox = document.getElementById("messageBox");
const heartBtn = document.getElementById("heartBtn");

let index = 0;
let karaokeLines = [];
let translationLines = [];

function parseLyrics(raw) {
    const lines = raw.trim().split("\n");
    return lines.map(line => {
        const [time, ...textParts] = line.trim().split(" ");
        const [m, s] = time.split(":").map(Number);
        const seconds = m * 60 + s;
        return { time: seconds, text: textParts.join(" ") };
    });
}

function loadSong(i) {
    const s = songs[i];
    title.textContent = s.title;
    artist.textContent = s.artist;
    audio.src = s.file;

    karaokeLines = parseLyrics(s.lyrics);
    translationLines = parseLyrics(s.translation);

    lyricsBox.innerHTML = karaokeLines
        .map(l => `<p class="karaoke-line">${l.text}</p>`)
        .join("");

    translationBox.innerHTML = translationLines
        .map(l => `<p class="translation-line">${l.text}</p>`)
        .join("");
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);

    const current = audio.currentTime;
    let activeIndex = -1;

    for (let i = 0; i < karaokeLines.length; i++) {
        if (current >= karaokeLines[i].time) {
            activeIndex = i;
        }
    }

    const engLines = document.querySelectorAll(".karaoke-line");
    const spaLines = document.querySelectorAll(".translation-line");

    engLines.forEach((line, i) => {
        if (i < activeIndex) {
            line.style.opacity = "0";
            line.style.transform = "translateY(-15px)";
            line.style.display = "none";
        } else if (i === activeIndex) {
            line.style.display = "block";
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
            line.style.color = "#00bfff";
            line.style.fontWeight = "bold";
        } else {
            line.style.display = "block";
            line.style.opacity = "1";
            line.style.transform = "translateY(10px)";
            line.style.color = "#ffffff";
            line.style.fontWeight = "normal";
        }
    });

    spaLines.forEach((line, i) => {
        if (i < activeIndex) {
            line.style.opacity = "0";
            line.style.transform = "translateY(-15px)";
            line.style.display = "none";
        } else if (i === activeIndex) {
            line.style.display = "block";
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
            line.style.color = "#00ff99";
            line.style.fontWeight = "bold";
        } else {
            line.style.display = "block";
            line.style.opacity = "1";
            line.style.transform = "translateY(10px)";
            line.style.color = "#ffffff";
            line.style.fontWeight = "normal";
        }
    });
});

progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});

document.getElementById("playBtn").addEventListener("click", () => {
    if (audio.paused) audio.play();
    else audio.pause();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
});

/* ❤️ Mensaje personalizado */
heartBtn.addEventListener("click", () => {
    messageBox.style.opacity = "1";
    messageBox.style.transform = "scale(1)";
    setTimeout(() => {
        messageBox.style.opacity = "0";
        messageBox.style.transform = "scale(0.8)";
    }, 2000);
});

loadSong(index);
