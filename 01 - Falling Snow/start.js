(() => {
  // เริ่มเขียนโค้ด
  function setup(){

    // const make the variable canvas connot be assigned to another value
    const canvas = document.getElementById('falling-snow-canvas');

    // Set width and height of the canva to the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight

    return{
      // return canvas, canvas 2d object, and number of snowballs
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls:250
    }
  }


  function random(min,max){

    // Very interesting way to random (Math.random() return 0 -0.999)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }





  function createSnowBalls(canvas, numberOfSnowBalls){

    // Spread(deep copy) the elements of the newly created array into x
    // let arr = [1, 2, 3]
    // console.log(...arr)  // 1 2 3 
    return [...Array(numberOfSnowBalls)].map(() =>{

      //  () => {} use anonymous function that take no parameters to return x and y
      return{

        // This will return obj that contain x,y coordinate of snow
        x:random(0,canvas.width),
        y:random(0,canvas.height),
        opacity: random(0.5, 1),
        radius: random(2,4),
        speedX: random(-5,5),
        speedY: random(1,3)
      };
    });
  }




  function drawSnowBall(canvasContext, snowBall){

    // While we need to draw, we are drawing in the 2d obj
    // Tell the canvas we are going to draw on this canvas
    canvasContext.beginPath();

    // Function to draw a circle (x , y , r , start from 0 rad, end at 2pi)
    canvasContext.arc(snowBall.x,snowBall.y, snowBall.radius, 0, 2 * Math.PI );

    // Set style rgba(red, green, blue, alpha(opacity)) used to fill the drawing
    canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;

    // Fills the current path
    canvasContext.fill();
  }




  function moveSnowBall(canvas, snowBall){
    snowBall.x +=snowBall.speedX;
    snowBall.y +=snowBall.speedY;

    // if the snowball fall to the right side reset the left most
    if (snowBall.x > canvas.width) {
      snowBall.x = 0;

    // else set to the right most
    } else if (snowBall.x < 0){
      snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height){
      snowBall.y = 0;
    } 
  }



  
  function run(){

    // Destructuring returned values
    const{canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);

    // Iterate snowBalls array and pass obj literal(dict in python but access by using ".")
    // forEach() method calls a function for each element in an array.
    snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));

    // setInterval(function, milliseconds) loop every milliseconds
    setInterval (() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext,snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
    }, 50)
  }
  run();
})();
