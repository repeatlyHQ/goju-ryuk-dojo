// Initialize variables from localStorage or set defaults
let attendanceCount = localStorage.getItem("attendanceCount")
  ? parseInt(localStorage.getItem("attendanceCount"))
  : 0;
let lessonsCompleted = 0;
let lastReflection = localStorage.getItem("lastReflection")
  ? localStorage.getItem("lastReflection")
  : "You haven’t submitted a reflection yet.";

// Update the display on page load
function updateDisplay() {
  document.getElementById("attendanceDisplay").textContent = `Attendance: ${attendanceCount} day(s)`;
  document.getElementById("lessonProgress").textContent = `Lessons Completed: ${lessonsCompleted}`;
  document.getElementById("reflectionDisplay").textContent = `Today’s Reflection: "${lastReflection}"`;
}

// Mark attendance
document.getElementById("markAttendance").addEventListener("click", () => {
  attendanceCount++;
  localStorage.setItem("attendanceCount", attendanceCount);
  alert(`Attendance marked! You’ve attended ${attendanceCount} day(s).`);
  updateDisplay();
});

// Start lesson
document.getElementById("startLesson").addEventListener("click", () => {
  lessonsCompleted++;
  alert(`Starting your kata tutorial: Heian Shodan. Lesson ${lessonsCompleted} in progress.`);
  updateDisplay();
});

// Submit reflection
document.getElementById("submitReflection").addEventListener("click", () => {
  const reflectionInput = document.getElementById("lessonReflection").value.trim();
  if (reflectionInput === "") {
    alert("Please write a reflection before submitting.");
  } else {
    lastReflection = reflectionInput;
    localStorage.setItem("lastReflection", lastReflection);
    alert("Reflection submitted successfully!");
    document.getElementById("lessonReflection").value = "";
    updateDisplay();
  }
});

// Initialize display when the page loads
window.onload = () => {
  updateDisplay();
  if (attendanceCount > 0) {
    alert(`Welcome back! You’ve attended ${attendanceCount} day(s) in the dojo.`);
  }
};
