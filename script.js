let lessonsCompleted = 0;

document.getElementById("startLesson").addEventListener("click", () => {
  alert("Starting your kata tutorial: Heian Shodan.");
  lessonsCompleted++;
  updateProgress();
});

function updateProgress() {
  const progressText = document.getElementById("progressText");
  progressText.textContent = `Lessons Completed: ${lessonsCompleted}`;
  if (lessonsCompleted === 1) {
    alert("Great work! Advanced lesson unlocked!");
  }
}
