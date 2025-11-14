let currentAudio = null;

function playAudio(url) {
    // If something is already playing, stop it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new audio object and play it
    currentAudio = new Audio(url);
    currentAudio.play().catch(err => {
        console.error("Audio playback failed:", err);
    });
}
