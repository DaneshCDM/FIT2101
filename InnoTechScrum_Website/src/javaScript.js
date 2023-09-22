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

function changeTdColor() {
  const values = document.querySelectorAll("td");
  for (let i = 0; i < values.length; i++) { // iterate all thorugh td
      if (values[i].innerText.trim() === "Low") { // check if td has desired value
          values[i].style.color = "green"; // if matches, change color
          console.log("Changing color for element: " + values[i].innerText);
      }
      else if (values[i].innerText.trim() === "Medium") { // check if td has desired value
        values[i].style.color = "yellow"; // if matches, change color
        console.log("Changing color for element: " + values[i].innerText);
      }
      else if (values[i].innerText.trim() === "Important") { // check if td has desired value
        values[i].style.color = "orange"; // if matches, change color
        console.log("Changing color for element: " + values[i].innerText);
      }
      else if (values[i].innerText.trim() === "Urgent") { // check if td has desired value
        values[i].style.color = "red"; // if matches, change color
        console.log("Changing color for element: " + values[i].innerText);
      }
  }
  console.log("changeTdColor function executed");
}

// changeTdColor();

//Test
//test
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

// function openPopUp(){
//     const overlay =document.getElementById("overlay")
//     const popup = document.getElementById("popup");
//     if (overlay&&popup){
//       const popupContentText = "This is the popup content";
//       const popupContent = document.createElement("div");
//       popupContent.textContent = popupContentText;
//       popup.appendChild(popupContent);
//       popup.style.display="block";
//       overlay.style.display="block";
//     }
//     const popupContentText = "This is the popup content";
//     const popupContent = document.createElement("div");
//     popupContent.textContent = popupContentText;
//     popup.appendChild(popupContent);
//     popup.style.display="block";
//   }
// function closePopUp(){
//     const overlay =document.getElementById("overlay")
//     const popup = document.getElementById("popup");
//     if(overlay&&popup){
//       popup.style.display="none";
//       overlay.style.display="none";
//       popup.innerHTML ="";
//     }
//     popup.style.display="none";
//     popup.innerHTML ="";
// }
// function openPopUpAndShowOverlay() {
//   openPopUp();
//   showOverlay();
// }

// function showOverlay() {
//   const overlay = document.getElementById("overlay");
//   overlay.style.display = "block";
// }
// function closePopUpAndHideOverlay() {
//   closePopUp();
//   hideOverlay();
// }

// function hideOverlay() {
//   const overlay = document.getElementById("overlay");
//   overlay.style.display = "none";
// }
// document.addEventListener("DOMContentLoaded", function() {
//   const checkPopUp = document.getElementById("open-button").addEventListener("click", openPopUp);
//   const checkClosePopUp = document.getElementById("close-button").addEventListener("click", closePopUp);
// });
// function openModal(){
//   $('modalCase').modal('show');

// }
// function modal(){
//     // Get the modal
//   var modal = document.getElementById("modalCase");

//   // Get the button that opens the modal
//   var btn = document.getElementById("btnModal");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks on the button, open the modal
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }
// function callCloseModal(){
//   $('#modalCase').modal('hide');
//   var modal = document.getElementById("modalCase");
//   var iframe = document.getElementById("taskIFrame");
//   modal.style.display="none";
//   iframe.style.display="none";
//   iframe.remove();
// }
// function closeModal(){
//   //Data
//   var modal = document.getElementById("modalCase");
//   var closeButton=document.getElementsByClassName("close");
//   var iframe = document.getElementById("taskIFrame");
//   //iframe.style.display = 'none';
//   for(let closeBtn of closeButton){
//     closeBtn.onclick =callCloseModal;
//   }
//   // console.log('closeModal function called');
//   // $('#modalCase').modal('hide');
//   // closeButton.onclik=function(){
//   //   modal.style.display="none";
//   //   $('#modalCase').modal('hide');
//   // }
// }
// window.closeModal = function(){
//   parent.$('#taskIFrame').modal('hide');
// };
// function closeModalAndIframe() {
//   // Close the modal containing the iframe
//   $('#modalCase').modal('hide');
  
//   // Hide or remove the iframe
//   var iframe = document.getElementById('taskIFrame');
//   iframe.style.display = 'none'; // or iframe.remove() to completely remove it
//   //iframe.remove();
// }
// function closeWindow(){
//   window.close();
//   $("#modalCase").modal("hide");
  
//   // Hide or remove the iframe
//   var iframe = document.getElementById("taskIFrame");
//   iframe.style.display = 'none'; // or iframe.remove() to completely remove it
//   //iframe.remove();
// }
