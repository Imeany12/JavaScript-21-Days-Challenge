(() => {
  // เริ่มเขียนโค้ด
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ]

  let index = 0;

  function onKeyDown(event) {
    event.key ===konamiCode[index] ? index++ : index = 0;

    if (konamiCode.length === index){
      // we can call this function from other file as long as we defined the file that contain the function in index.html
      startSnowing();
    }
  }

  function run() {

    // keydown will listen to what key on the keyboard we are pressing
    document.addEventListener('keydown', onKeyDown);
  }
  run();
})();
