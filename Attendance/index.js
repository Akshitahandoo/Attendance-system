document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const attendanceSection = document.getElementById("attendance-section");
  const attendanceMessage = document.getElementById("attendance-message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate login authentication - Replace this with your actual authentication logic
    if (username === "student" && password === "password") {
      loginForm.style.display = "none";
      attendanceSection.style.display = "block";
      attendanceMessage.textContent = "";
    } else {
      attendanceMessage.textContent = "Invalid credentials. Please try again.";
    }
  });

  const markAttendanceBtn = document.getElementById("mark-attendance-btn");
  markAttendanceBtn.addEventListener("click", function () {
    const selectedClass = document.getElementById("class-select").value;
    // Simulate marking attendance - Replace this with your actual attendance logic
    attendanceMessage.textContent = `Attendance marked for ${selectedClass}`;
  });
});
