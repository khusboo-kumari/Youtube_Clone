function calculateTimeLeft() {
    const today = new Date();
    const diwaliDate = new Date(2023, 10, 12, 0, 0, 0); // Diwali is on November 12th, 2023, at 00:00:00
    const timeDifference = diwaliDate - today;
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return { daysLeft, hoursLeft, minutesLeft, secondsLeft };  
  }
  
  function updateCountdown() {
    const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = calculateTimeLeft();
  
    const daysElement = document.getElementById('daysCountdown');
    daysElement.textContent = daysLeft;
  
    const hoursElement = document.getElementById('hoursCountdown');
    hoursElement.textContent = hoursLeft;
  
    const minutesElement = document.getElementById('minutesCountdown');
    minutesElement.textContent = minutesLeft;
  
    const secondsElement = document.getElementById('secondsCountdown');
    secondsElement.textContent = secondsLeft;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  