/* const PI = 3.14
let x = 5
var y = 15

const japanese = ["konniciwa", 2, "inu"]

const fruits = ["banana", "apple", "plum"]
fruits.push = ["melon"]

/* console.log(fruits.length)
console.log("Nasze zajęcia JS")
console.log("Ile ma elementów tabilca fruits?", fruits.length) */

/* const person = {
    firstname: "John",
    lastname: "Smith",
    eyecolor: "yellow",
    age: 50,
}; */

/* alert()

function showMessage() {
    alert( 'Hello everyone!' );
}
showMessage()
 */

/* var wiek = prompt("Podaj wiek");
var acces = prompt("Did your parent let you access the website?")

if (wiek >= 18) {
    alert('Yay, you can enter our website!');
} else {
    if (acces == yes){alert("Here you go")}
else {alert("access denied")}
} */
/*  */
/* function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}
  
let age = prompt('How old are you?', 18);
  
if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
} */

/* var photosSection = document.getElementById("photos");
photosSection.style.backgroundColor = 'red';

var mobileMenu = document.getElementsByClassName("hero-title")[0];
mobileMenu.style.color = 'red'; */

function mobileMenu() {
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");
    var menu = document.getElementById("main-menu");
  
    if (mobileMenuIcon) {
      mobileMenuIcon.addEventListener("click", function() {
        menu.classList.toggle("opened");
        mobileMenuIcon.classList.toggle("opened");
      });
    }
  }
  
  mobileMenu();