// ضبط تاريخ العد التنازلي
const targetDate = new Date("June 25, 2025 00:00:00").getTime();

// تشغيل العد التنازلي
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // تحديث القيم في الصفحة
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // إذا انتهى الوقت
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-container").innerHTML = "<h2>انتهت الحرب! استعد للاحتفال 🎉</h2>";
  }
}, 1000);
