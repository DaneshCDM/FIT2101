function openPopUp(){
  const popup = document.getElementById("popup");
  const popupContentText = "This is the popup content";
  const popupContent = document.createElement("div");
  popupContent.textContent = popupContentText;
  popup.appendChild(popupContent);
  popup.style.display="block";
}
function closePopUp(){
  const popup = document.getElementById("popup");
  popup.style.display="none";
  popup.innerHTML ="";
}

function chooseStorypoint(){

}


// // const draggabletask2 = document.querySelector(".draggable-task2")

// // const drag = (position) => {
// //   let styles = draggabletask2.getBoundingClientRect();
// //   let left = styles.left;
// //   let top = styles.top;

// //   draggabletask2.style.setProperty("left", `${left + position.movementX}px`);
// //   draggabletask2.style.setProperty("top", `${top + position.movementY}px`);
// // }

// // draggabletask2.addEventListener("mousedown", () => {
// //   document.addEventListener("mousemove", drag);
// // })

// const dragItems = document.querySelectorAll('.drag-item');
// const dropTarget = document.querySelector('.drop-target');

// dragItems.forEach((item) => {
// item.addEventListener('dragstart', (e) => {
//   e.dataTransfer.setData('text/plain', item.id);
// });
// });

// dropTarget.addEventListener('dragover', (e) => {
// e.preventDefault();
// });

// dropTarget.addEventListener('drop', (e) => {
// e.preventDefault();
// const data = e.dataTransfer.getData('text/plain');
// const draggedItem = document.getElementById(data);

// if (draggedItem) {
//   dropTarget.appendChild(draggedItem);
// }
// });