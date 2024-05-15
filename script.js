
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
const futureDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days from now
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()}am`;
function getRemainingTime() {
  const t = futureDate - new Date().getTime();
  const [days, hours, minutes, seconds] = [
    Math.floor(t / (24 * 60 * 60 * 1000)),
    Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
    Math.floor((t % (60 * 60 * 1000)) / (60 * 1000)),
    Math.floor((t % (60 * 1000)) / 1000)
  ];
  const format = (item) => (item < 10 ? `0${item}` : item);
  items.forEach((item, index) => (item.innerHTML = format([days, hours, minutes, seconds][index])));
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();