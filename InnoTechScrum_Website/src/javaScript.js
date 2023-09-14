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
// function callCloseModal(){
//   modal.style.display="none";
// }
// function closeModal(){
//   //Data
//   var modal = document.getElementById("modalCase");
//   var closeButton=document.getElementsByClassName("close")[0];
//   for(let closeBtn of closeButton){
//     closeBtn.onclick =callCloseModal;
//   }
//   console.log('closeModal function called');
//   $('#modalCase').modal('hide');
//   // closeButton.onclik=function(){
//   //   modal.style.display="none";
//   //   $('#modalCase').modal('hide');
//   // }
// }
// window.closeModal = function(){
//   parent.$('#modelCase').modal('hide');
// };
