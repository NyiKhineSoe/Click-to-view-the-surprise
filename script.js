document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("surpriseBox");
  const message = document.querySelector(".message");
  const hidden = document.querySelector(".hidden-message");
  const song = document.getElementById("birthdaySong");
  const button = document.getElementById("playPauseBtn");
  const wishText = document.getElementById("wishText");

  // 🎁 Reveal message when clicking box
  box.addEventListener("click", (event) => {
    // Prevent clicking the music button from retriggering reveal
    if (event.target.id === "playPauseBtn") return;

    message.style.display = "none";
    hidden.style.display = "flex";

    // Try to auto-play the music
    song.play().then(() => {
      button.textContent = "⏸️ Pause Music";
      button.classList.add("glow");
    }).catch(() => {
      button.textContent = "🎵 Play Music";
    });

    // ✨ Start typing the text
    typeWriterEffect();
  });

  // 🎵 Toggle play / pause
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // stop the box from triggering again

    if (song.paused) {
      song.play();
      button.textContent = "⏸️ Pause Music";
      button.classList.add("glow");
    } else {
      song.pause();
      button.textContent = "🎵 Play Music";
      button.classList.remove("glow");
    }
  });

  // 💬 Typewriter effect function
  function typeWriterEffect() {
    const text = wishText.getAttribute("data-text");
    let index = 0;
    wishText.textContent = "";

    function type() {
      if (index < text.length) {
        wishText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 60); // adjust speed here (ms per letter)
      }
    }
    type();
  }
});













