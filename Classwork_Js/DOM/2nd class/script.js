let idExample = document.getElementById("div1");
console.log(idExample);
// querySelector()
let Query = document.querySelector(".para");
console.log(Query);
// querySelectorAll()
let queryAll = document.querySelectorAll(".para");
console.log(queryAll);

// getElementsByClassName()

let className = document.getElementsByClassName("dom");
console.log(className);
// getElementsByName()
let name = document.getElementsByName("email");
console.log(name);

// getElementsByTagName()
let tagName = document.getElementsByTagName("h2");
console.log(tagName);

// Event Handlers

// onclick

// function click() {
//   console.log("you clicked me!!!");
// }
// click();

// let clicked = document.getElementById("clickEvent");
// clicked.addEventListener("click", () => {
//   console.log("you clicked me!!!");
// });
let clicked = document
  .getElementById("clickEvent")
  .addEventListener("click", () => {
    console.log("you clicked me!!!");
  });
function mouserOver() {
  console.log("mouse over exmaple");
}
function mouseOut() {
  console.log("mouse out exmaple");
}
function keyDown() {
  console.log("keydown  exmaple");
}
function onchangeExample() {
  console.log("onchange  exmaple");
}
function login() {
  console.log("submit event  exmaple");
}
  let webdevelopmentData = [
      { name: "wafi", isGraduate: true },
      { name: "zain", isGraduate: true },
      { name: "Shan", isGraduate: false },
      { name: "saliha", isGraduate: true },
      { name: "Daniyal", isGraduate: false },
    ];

    let graduateStd = webdevelopmentData
      .filter((stds) => {
        console.log(stds, "data");
        return stds.isGraduate === true;
      })
      .map((graduate) => graduate.name);
    console.log(graduateStd);