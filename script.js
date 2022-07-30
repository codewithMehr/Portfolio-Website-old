// For small screen header
let menu = document.getElementById("menu_logo");
menu.addEventListener('click', () => {
   document.querySelector(".small").classList.toggle("blue");
})
// Light Mode
let lightMode = document.getElementById('lightMode');
lightMode.addEventListener('click', () => {
   document.getElementById("backgroundColor").classList.toggle("light-theme");
   document.getElementById("profilePicture").src = "normal.jpg";
   document.getElementById("navbar").classList.toggle("light-theme");
   document.getElementById("section1").classList.toggle("light-theme");
   document.getElementById("section2").classList.toggle("light-theme");
   document.getElementById("section3").classList.toggle("light-theme");
   document.getElementById("section4").classList.toggle("light-theme");
   audio.play();
   if (document.getElementById("backgroundColor").classList.contains("light-theme")) {
      document.getElementById("lightMode").innerHTML = "&#9790;"
      document.getElementById("lightMode").title = "Dark Mode";
   }
   else {
      document.getElementById("lightMode").innerHTML = "&#9728;"
      document.getElementById("profilePicture").src = "black.jpg";
      document.getElementById("backgroundColor").style.backgroundSize = "contain";
      document.getElementById("lightMode").title = "light Mode";
   }
})
// toggle audio
let audio = new Audio("./switch.mp3");
audio.src = "./switch.mp3";
// Light Mode for small screen
let lightMode2 = document.getElementById("lightMode_2");
lightMode2.addEventListener('click', () => {
   document.getElementById("backgroundColor").classList.toggle("light-theme");
   document.getElementById("navbar").classList.toggle("light-theme");
   document.getElementById("profilePicture").src = "normal.jpg";
   document.getElementById("section1").classList.toggle("light-theme");
   document.getElementById("section2").classList.toggle("light-theme");
   document.getElementById("section3").classList.toggle("light-theme");
   document.getElementById("section4").classList.toggle("light-theme");
   audio.play();
   if (document.getElementById("backgroundColor").classList.contains("light-theme")) {
      document.getElementById("lightMode_2").innerHTML = "&#9790;"
      document.getElementById("lightMode_2").title = "Dark Mode";
   }
   else {
      document.getElementById("lightMode_2").innerHTML = "&#9728;"
      document.getElementById("profilePicture").src = "black.jpg";
      document.getElementById("backgroundColor").style.backgroundSize = "cover";
      document.getElementById("lightMode_2").title = "light Mode";
   }
})