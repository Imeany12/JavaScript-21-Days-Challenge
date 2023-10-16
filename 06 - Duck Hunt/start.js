(() => {
  // เริ่มเขียนโค้ด
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDucks() {

    // This will result in [unde, unde, unde, unde, unde]
    // if [Array(5)], we will get array empty array with  length = 1 
    return [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),

        // Since top left is 0, 0 so this will set the bird to fly up form the bottom
        y: window.innerHeight,

        // Go to left or right
        speedX: random(-50,50),

        // Fly upwards only
        speedY:random(0, 10)
      };
    });
  }

  function setupDuckElement(duck) {
    // create <div> elem
    const duckElem = document.createElement('div');
    duckElem.className = 'duck';

    // In obj duck contains number but css style need px 
    duckElem.style.left  = `${duck.x}px`;
    duckElem.style.top = `${duck.y}px`;
    
    // Set the duck image
    duckElem.style.backgroundImage = 'url(./left-1.png)';

    // Adding newly created duck to the body
    document.body.appendChild(duckElem);

    return {duck, duckElem};
  }

function getDuckBackgroudImage(duck, duckElem) {

  // Short form of if before ? is condition if true return the left value else return the right value
  const direction = duck.speedX > 0 ? 'right' : 'left';

  // if the function does not found '1' it will return -1
  return duckElem.style.backgroundImage.indexOf('1') !== -1 ? 
  `url(./${direction}-2.png)` :
  `url(./${direction}-1.png)`
}

function moveDuck(duckElem, duck) {

  // This function returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
  const {left, top} = duckElem.getBoundingClientRect();
  const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
  const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;

  if (outOfBoundX) {
    duck.speedX *=-1;
  }

  if (outOfBoundY) {
    duck.speedY *=-1;
  }
  
  duck.x = left + duck.speedX;
  duck.y = top - duck.speedY;
  duckElem.style.left  = `${duck.x}px`;
  duckElem.style.top = `${duck.y}px`;

  duckElem.style.backgroundImage = getDuckBackgroudImage(duck, duckElem);
}

function shootDuck(event) {
  const duckElem = event.target;

  // After we change the top style move within 2 sec
  duckElem.style.transition = 'top 2s';
  duckElem.style.top = `${window.innerHeight}px`;

  // Clear the interval from the run() funciton
  clearInterval(duckElem.interval);

  // Wait 2 sec then use the arrow function
  setTimeout(() => {
    document.body.removeChild(duckElem);

    // Try to find class 'duck'
    const duck = document.querySelector('.duck');

    // If there is no duck make the class winning apear
    if (!duck) {
      const winningElem = document.querySelector('.winning');
      winningElem.style.opacity = 1;
    }
  }, 2000);
}

  function run() {
    const ducks = createDucks();
    
    // map() will return an array
    const duckElems = ducks.map(setupDuckElement);

    duckElems.forEach(({duck, duckElem}) => {
      // We use arrow function to pass duckElem and duck args
      duckElem.interval = setInterval(() =>moveDuck(duckElem, duck), 100);
      duckElem.addEventListener('click', shootDuck);
    });
  }

  run();
})();
