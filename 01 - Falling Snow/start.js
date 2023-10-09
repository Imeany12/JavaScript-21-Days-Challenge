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
        x:random(0,canvas.width),
        y:random(0,canvas.height)
      };
    });
  }

  function drawSnowBall(canvasContext, snowBall){

    // While we need to draw, we are drawing in the 2d obj
    // Tell the canvas we are going to draw on this canvas
    canvasContext.beginPath();

    // Function to draw a circle (x , y , r , start from 0 rad, end at 2pi)
    canvasContext.arc(snowBall.x,snowBall.y, 4, 0, 2 * Math.PI );
    canvasContext.fillStyle = `rgba(255,255,255,1)`;
    canvasContext.fill();
  }

  function run(){

    // Destructuring returned values
    const{canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);

    //Iterate snowBalls array and pass obj literal(dict in python but access by using ".")
    snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall))
  }
  run();
})();
