   var isUserProfileVisible = localStorage.getItem("userProfileVisible");

  if (isUserProfileVisible === "true") {
       document.getElementById("userProfile").style.display = "block";
       document.getElementById("userGreeting").style.display = "none";
   } else {
       document.getElementById("userProfile").style.display = "none";
       document.getElementById("userGreeting").style.display = "block";
   }