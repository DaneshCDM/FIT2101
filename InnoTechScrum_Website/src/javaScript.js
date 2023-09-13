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