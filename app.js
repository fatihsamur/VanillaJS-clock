const moment = new Date();
const seconds = moment.getSeconds();
const minutes = moment.getMinutes();
const hours = moment.getHours();
let secondsDegree = seconds * 6 - 90;
let minutesDegree = minutes * 6 - 90;
let hoursDegree = (hours - 12) * 30 - 90 + minutesDegree / 30;

setInterval(() => {
  secondsDegree += 6;
  minutesDegree += 0.1;
  hoursDegree += 1 / 600;
  console.log(hoursDegree);

  const secondsHand = document.querySelector(".seconds-hand");
  const minutesHand = document.querySelector(".minutes-hand");
  const hoursHand = document.querySelector(".hours-hand");
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}, 1000);

setInterval(() => {
  const now = new Date();
  setDigitalClock(now);
}, 1000);

function setDigitalClock(time) {
  const digitalTime = document.querySelector(".digital-time");
  const digitalDate = document.querySelector(".digital-date");
  digitalTime.innerHTML = time.toLocaleTimeString("tr-TR");
  digitalDate.innerHTML = time.toLocaleDateString("tr-TR");
}
