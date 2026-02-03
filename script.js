let targetDate = null;
let countdownInterval = null;

function setCountdown() {
  const input = document.getElementById("targetTime").value;
  if (!input) {
    alert("Please select a date and time!");
    return;
  }

  targetDate = new Date(input);

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  if (!targetDate) return;

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").textContent = "🎉 The wait is over!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}


