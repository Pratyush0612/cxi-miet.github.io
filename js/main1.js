/*
  'smart_vehicle'
  'garbage_collection'
  'carbon_reduction'
 */
 let data = {
  'smart_vehicle':`<h1>Smart Vehicles </h1>
                    <p>Smart Vehicles</p>`,
   'garbage_collection':`<h2>Garbage Collection</h2><h3>ABOUT</h3><p>Garbage Collection System provides an interface between users and the garbage collector/driver.There interface between the user portal and driver portal are collected by the admin.</p><h3>FEATURES</h3><p>Responsive Website/Mobile application<br>Schedule waste pickup<br>Efficient routing of location<br>Categorisation of waste</p>`   ,              
    'carbon_reduction':`<h2>Identification in reduction of carbon footprint emission</h2> <h3>ABOUT</h3> <p>Idea is to predict the per capita CO2 footprints caused due to the heavy usage of transport in our country. We first cleaned our dataset and performed Categorical Encoding on Categorical Features and Feature Scaling on Numerical
Features.
-After that, we tried different Regression Algorithms ( Multi-Variable Linear Regression, Support Vector Regression,
Decision Tree Regression Random Forest Regression ).
-Finally, we opted for Random Forest Regression for our model for its stable predictions through which we led our
model to an accuracy of 99.6</p>` ,
     'Nail_brain':`<h2>Nail the brain</h2><h3>ABOUT</h3><p>Nail the brain is an online learning project , malking continuous efforts to help you build your future regardless of fact from which college you belong.</p><h3>PROBLEMS SOLVED</h3><p>Provides ability to enhance your career<br>Flexibility<br>Includes IDE<br>Best guidance<br>Provides Roadmap for technologies<br>Lower cost</p>
     `                   
                              
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
  