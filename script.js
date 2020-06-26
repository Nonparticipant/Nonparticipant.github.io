document.addEventListener("DOMContentLoaded", function() {

/* fix for iOS :hover handling */
  document.addEventListener('touchstart', function() {});
      
/* handler to toggle menu visibility */
  var b = document.querySelectorAll("body header span")[0];
  var m = document.querySelectorAll("body nav")[0];
  if (b && m) {
    b.addEventListener('click', function(e) {
      var m = document.querySelectorAll("body nav")[0];
      if (m) {
        if (m.style.display === "block") {
          m.style.display = "none";
        } else {
          m.style.display = "block";
        }  
      }
    });
  }
    
});
