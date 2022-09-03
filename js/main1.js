/*
  'smart_vehicle'
  'garbage_collection'
  'carbon_reduction'
 */
 let data = {
  'smart_vehicle':`<h1>kya hal hai </h1>
                    <p>hello dosto</p>`,
  
}
// Initialize Variables
    let closePopup = document.querySelector(".popupclose");
    let content = document.querySelector(".popupcontent");
    let overlay = document.getElementById("overlaya");
    let popup = document.getElementById("popup");
    let button = document.getElementById("button");
    // Close Popup Event
    closePopup.onclick = function() {
      overlay.style.display = 'none';
      popup.style.display = 'none';
    };
    // Show Overlay and Popup
    function show_card(e) {
      overlay.style.display = 'block';
      popup.style.display = 'block';
      content.innerHTML = data[e]
    }
  