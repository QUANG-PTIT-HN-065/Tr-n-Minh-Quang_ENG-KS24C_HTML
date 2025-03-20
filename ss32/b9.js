let progress = 0;
function changeProgress(value) {
    progress = Math.max(0, Math.min(100, progress + value));
    let progressBar = document.getElementById("progressBar");
    progressBar.style.width = progress + "%";
    document.body.style.opacity = 0.3 + (progress / 100) * 0.7;
}