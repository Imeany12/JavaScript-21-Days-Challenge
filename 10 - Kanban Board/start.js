(() => {
  // เริ่มเขียนโค้ด
  let draggingElem;

  function onDragStart() {
    // Set draggingElem to this
    console.log(this);

    // *this* refers to the task element.
    draggingElem = this;
    console.log('drag');
  }

  function onDrop() {
    // *this* refers to the element on which the event listener is attached, which is a drop zone element (.drop-zone).
    this.append(draggingElem);
    console.log(this);
    draggingElem = null;
  }

  function onDragOver(event) {
    // Prevent default behavior of DragOver
    event.preventDefault();
  }

  function onDragEnter(event) {
    // Prevent default behavior of DragEnter
    event.preventDefault();
  }

  function run() {
    // Covert from node to array
    const taskElems = Array.from(document.querySelectorAll('.task'));
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener('dragstart', onDragStart);
    });

    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('drangenter', onDragEnter);
    });
  }

  run();
})();
