/*
  'smart_vehicle'
  'garbage_collection'
  'carbon_reduction'
 */
 let data = {
  'smart_vehicle':`<h1>Smart Vehicles </h1>
                    <p>Smart Vehicles</p>`,
   'garbage_collection':`<h2>Garbage Collection</h2><h3>ABOUT</h3><p>Garbage Collection System provides an interface between users and the garbage collector/driver.There interface between the user portal and driver portal are collected by the admin.</p><h3>FEATURES</h3><p>Responsive Website/Mobile application<br>Schedule waste pickup<br>Efficient routing of location<br>Categorisation of waste</p>`,              
    'carbon_reduction':`<h2>Identification in reduction of carbon footprint emission</h2> <h3>ABOUT SIH</h3><p>Smart India Hackathon is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.The last edition of the hackathon saw over 5 million+ students from various engineering colleges compete for the top prize at 35+ locations.In SIH, the students would also have the opportunity to work on challenges faced within the private sector organisations and create world class solutions for some of the top companies in the world, thus helping the Private sector hire the best minds from across the nation.</p> <h3>Project Description</h3><p>Idea is to predict the per capita CO2 footprints caused due to the heavy usage of transport in our country. We first cleaned our dataset and performed Categorical Encoding on Categorical Features and Feature Scaling on Numerical
Features.
-After that, we tried different Regression Algorithms ( Multi-Variable Linear Regression, Support Vector Regression,
Decision Tree Regression Random Forest Regression ).
-Finally, we opted for Random Forest Regression for our model for its stable predictions through which we led our
model to an accuracy of 99.6</p>` ,
     'Nail_brain':`<h2>Nail the brain</h2><h3>ABOUT</h3><p>Nail the brain is an online learning project , malking continuous efforts to help you build your future regardless of fact from which college you belong.</p><h3>PROBLEMS SOLVED</h3><p>Flexibility<br> Lower cost<br>Includes IDE<br>Best guidance<br>Provides Roadmap for technologies<br>Provides ability to enhance your career</p>
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
    //  Slider code
    
    var array =["item1","item2"]
    var sliderMain = document.getElementById("slider-main");
    var item = sliderMain.getElementsByClassName("item");
      function next(){
         sliderMain.append(item[0]);
      }
      function prev(){
        sliderMain.prepend(item[item.length-1])
      }
