(() => {
  // เริ่มเขียนโค้ด
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll('section'));
    // console.log(sectionElems);
    sectionElems.forEach(sectionElem => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const scrollPosition = window.pageYOffset;
      // The top position of the image and the height of the image divided by 10
      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

      if (scrollPosition >= revealPosition) {
        // Add reveal class to textElem so the class will be both text and reveal
        // This allows to define CSS styles that are associated with the "reveal" class, and these styles will be applied to the element once the class is added.
        textElem.classList.add('reveal');
      }
    });

  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }

  run();
})();
