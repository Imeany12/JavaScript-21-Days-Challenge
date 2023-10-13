(() => {
  // เริ่มเขียนโค้ด
function run(){
  const bodyElem = document.querySelector('body');
  const eyeElems = document.querySelectorAll('.eye');

  function onMouseMove({pageX, pageY}) {
    // We will get eyeElem in the forEach loop
    eyeElems.forEach((eyeElem) =>{
      // Get the cordinate of eye from the top left of the screen
      const {left , top} = eyeElem.getBoundingClientRect();

      // Get the center of the eye by adding width and height of the eye and divide by 2
      // .offsetWidth will return the width of the element
      // .offsetHeight will return the height of the element
      const eyeCenterX = left + eyeElem.offsetWidth / 2;
      const eyeCenterY = top + eyeElem.offsetHeight / 2;

      // Function to calcualte radian 
      // PageX = cordiate of cursor / eyeCenter = cordinate of eye 
      // Math.atan2 will return the arc tangent of y/x in radians
      const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);

      // Start off position is at the bottom so -1 will start at the bottom
      const angle = radian * 180 / Math.PI * -1;

      eyeElem.style.transform = `rotate(${angle}deg)`;
    });

   
 }


  bodyElem.addEventListener('mousemove', onMouseMove);
}
run();

})();
