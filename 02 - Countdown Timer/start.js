(() => {
  // เริ่มเขียนโค้ด
  // 1000 miliseconds = 1 second
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  let thisYear = new Date().getFullYear();


  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;

  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date(`Decomber 31 , ${thisYear} 23:59:59`).getTime();
    const unixTimeLeft = newYear - now;

    // const daysElem = document.getElementById('days');
    // daysElem.innerHTML = Math.floor(unixTimeLeft / DAY)
    setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
    setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
    setElementInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
    setElementInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));

  }
  function run() {
    countDown();

    // Make the year dynamic 
    const title = document.querySelector('h1');
    title.innerHTML = `Countdown To New Year ${thisYear + 1}`;

    // Just name of the function no need to call
    setInterval(countDown, SECOND);
  }
  run();

})();
