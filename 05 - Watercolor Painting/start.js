(() => {
  // เริ่มเขียนโค้ด

  // get canvas to set dimension
  const canvas = document.getElementById('painting');
    
  // Set the canvas dimension to window's dimension
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  // This is where we are gonna draw
  const context = canvas.getContext('2d');

  let previousPoint = {x: 0, y:0};

  function getDistance(previousPoint, currentPoint) {
    return Math.sqrt((previousPoint.x - currentPoint.x) **2 + (previousPoint.y - currentPoint.y) ** 2);
  }

  function onMouseMove({pageX, pageY}){
    const currentPoint = {x: pageX, y: pageY };

    // Tell context that we gonna start drawing
    context.beginPath();

    context.lineCap = 'round';
    context.lineJoin = 'round';
    const distance = getDistance(previousPoint, currentPoint);

    // If the distance increase the width of the line will be thinner
    context.lineWidth = Math.random() / distance * 40;

    // The opacity will not be less than 0.5 if the distance is so big
    const opacity = Math.min(0.5, 1 / distance);
    context.strokeStyle = `rgba(222, 10, 109, ${opacity})`;

    // Starting point
    context.moveTo(previousPoint.x, previousPoint.y);

    // Ending point
    context.lineTo(currentPoint.x, currentPoint.y);

    // Create line connecting to the point 
    context.stroke();

    // Done drawing
    context.closePath();

    // Set new current point so that the previous point and the current point will make a line
    previousPoint = currentPoint;
    }

  function onMouseEnter({pageX, pageY}) {
    previousPoint.x = pageX;
    previousPoint.y = pageY;
    
  }

  function run() {

    // addEventListener('event', function )
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseenter', onMouseEnter);
    

  }
  run();

})();
