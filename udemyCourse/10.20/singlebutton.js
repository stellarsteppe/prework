/**
 * Creator: steppe
 * Date Created: 10.20 .18
 * Date Last Modified: 10.20 .18
 */

// var button = document.querySelector("button");
// var isPurple = false;
// button.addEventListener("click", function () {
//     //alert("clicked");
//     if (isPurple) {
//         document.body.style.background = "white";
//         //isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         //isPurple = true;
//     }
//     isPurple = !isPurple;
// });
 // OR

 button.addEventListener("click", function() {
     document.body.classList.toggle("purple");
 });
