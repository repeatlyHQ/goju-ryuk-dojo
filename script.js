let lessonsCompleted = 0; // Not stored as this resets with each new lesson module
let attendanceCount = localStorage.getItem("attendanceCount")
  ? parseInt(localStorage.getItem("attendanceCount"))
  : 0; // Load attendance from local storage or default to 0
let lastReflection = localStorage.getItem("lastReflection")
  ? localStorage.getItem("lastReflection")
  : "You haven’t submitted a reflection yet."; // Load last reflection

// Update the reflection display on load
document.getElementById("reflectionDisplay").textContent = `Today’s Reflection: "${lastReflection}"`;

// Event Listener: Start Lesson
document.getElementById("startLesson").addEventListener("click", () => {
  alert("Starting your kata tutorial: Heian Shodan.");
  lessonsCompleted++;
  updateProgress();
});

// Event Listener: Mark Attendance
document.getElementById("markAttendance").addEventListener("click", () => {
  attendanceCount++;
  localStorage.setItem("attendanceCount", attendanceCount); // Save attendance to local storage
  alert(`Attendance marked! You’ve attended ${attendanceCount} day(s) in the dojo.`);
});

// Event Listener: Submit Lesson Reflection
document.getElementById("submitReflection").addEventListener("click", () => {
  const reflectionInput = document.getElementById("lessonReflection").value.trim();

  if (reflectionInput === "") {
    alert("Please write a reflection before submitting.");
  } else {
    localStorage.setItem("lastReflection", reflectionInput); // Save the reflection to local storage
    const reflectionDisplay = document.getElementById("reflectionDisplay");
    reflectionDisplay.textContent = `Today’s Reflection: "${reflectionInput}"`;
    document.getElementById("lessonReflection").value = ""; // Clear the input
    alert("Your reflection has been submitted. Great work!");
  }
});

// Update Progress Function
function updateProgress() {
  const progressText = document.getElementById("progressText");
  progressText.textContent = `Lessons Completed: ${lessonsCompleted}`;

  if (lessonsCompleted === 1) {
    alert("Great work! Advanced lesson unlocked!");
  }
}

// On page load, show attendance count
window.onload = () => {
  if (attendanceCount > 0) {
    alert(`Welcome back! You’ve attended ${attendanceCount} day(s) in the dojo.`);
  }
};
