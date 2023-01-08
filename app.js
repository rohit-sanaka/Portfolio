let words = Object.values(document.querySelectorAll(".d-text")); //select the actul text
let wordsBox = document.querySelector(".dynamic-text-parent");
let textWidth = document.querySelectorAll(".dynamic-text-parent .d-text");

let menuIcon = document.querySelector(".menu-icon");
let hamBurger = document.querySelector(".hamburger");

let navBar = document.querySelector(".nav-bar");

function setWidth(index) {
  let currentWidth = textWidth[index].offsetWidth;
  wordsBox.style.setProperty("--element-width", `${currentWidth + 5}px`);
}
function setHidden(index) {
  words[index].classList.remove("is-visible");
  words[index].classList.add("is-hidden");
}
function setVisible(index) {
  words[index].classList.add("is-visible");
  words[index].classList.remove("is-hidden");
}
setWidth(0);

function toggle() {
  for (let i = 0; i < words.length; i++) {
    if (words[i].classList.contains("is-visible")) {
      setHidden(i);

      //looping back if reached the last word.
      if (i == words.length - 1) {
        setWidth(0);
        setVisible(0);
      } else {
        setWidth(i + 1);
        setVisible(i + 1);
      }
      break;
    }
  }
}
setInterval(toggle, 3400);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navBar.classList.toggle("open");
});

//================================================================//
//                Pure javascript typing effect                   //
//================================================================//

// const typedText = document.querySelector(".typed-text");
// const cursor = document.querySelector(".cursor");

// const textArray = [
//   "an Engineer. ",
//   "a Front End Developer. ",
//   "a Proud Indian. ",
// ];
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, 30);
//   } else {
//     cursor.classList.toggle("hide");
//     setTimeout(erase, 2000);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     typedText.textContent = textArray[textArrayIndex].substring(
//       0,
//       charIndex - 1
//     );
//     charIndex--;
//     setTimeout(erase, 30);
//   } else {
//     cursor.classList.toggle("hide");
//     textArrayIndex++;
//     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//     setTimeout(type, 100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(type, 500);
// });
