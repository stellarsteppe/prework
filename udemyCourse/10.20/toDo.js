/**
 * Creator: steppe
 * Date Created: 10.20 .18
 * Date Last Modified: 10.20 .18
 */

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
    //  
    this.classList.add("selected");
     });
     lis[i].addEventListener("mouseout", function () {
              //   this.style.color = "black";
    this.classList.remove("selected");
     });
    lis[i].addEventListener("click", function () {
        this.classList.toggle("done");
    });
}
// firstLi.addEventListener("mouseover", function() {
//     firstLi.style.color = "green";
// });

// firstLi.addEventListener("mouseout", function () {
//     firstLi.style.color = "black";
// });


