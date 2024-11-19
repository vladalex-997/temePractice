const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;
let totalHours = 0;

document.getElementById("startTrackingButton").addEventListener("click", () => {
  totalHours = 0;
  currentDayIndex = 0;
  trackHours();
});

function trackHours() {
  if (currentDayIndex < workDays.length) {
    const day = workDays[currentDayIndex];
    let hours = null;

    while (
      hours === null ||
      hours === "" ||
      isNaN(hours) ||
      hours < 0 ||
      hours > 24
    ) {
      hours = prompt(`How many hours did you work on ${day}?`);
      if (hours === null) {
        alert("You need to enter a valid number of hours.");
        return;
      }
      if (hours === "" || isNaN(hours) || hours < 0 || hours > 24) {
        alert("Please enter a valid number of hours between 0 and 24.");
      }
    }

    totalHours += parseFloat(hours);
    currentDayIndex++;
    trackHours();
  } else {
    alert(`You worked a total of ${totalHours} hours this week.`);
  }
}
