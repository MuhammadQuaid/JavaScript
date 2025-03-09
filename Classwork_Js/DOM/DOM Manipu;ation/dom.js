
let innerHTMLExample = document.getElementById("para1");
innerHTMLExample.innerText = "hello dom i'm from js file";

let mainDiv = document.getElementById("main_div");
// createElement()
let h3 = document.createElement("h2");
h3.innerText = "hello heading 3 i'm from js file";
// appendChild()
mainDiv.append(h3);
// mainDiv.appendChild(h3);

// setAttribute() and getAttribute()
h3.setAttribute("class", "heading");
h3.setAttribute("id", "heading2");
// h3.getAttribute("id");

console.log(h3.getAttribute("class"));
h3.removeAttribute("id");
console.log(h3);

function removeElement() {
  let removeELe = document.getElementById("remove");
  removeELe.remove();
}

// Changing CSS Styles
// style property

h3.style.color = "white";
h3.style.fontSize = "14px";

// classList
h3.classList.add("h3");
// CSS Classes with inline styles

h3.setAttribute("style", "border-radius: 20px");

let webDevelopment = [
  { Name: "Daniyal", class: "basic" },
  { Name: "saliha", class: "basic" },
  { Name: "Sameer", class: "Advance" },
  { Name: "Sartaj", class: "Advance" },
  { Name: "Naji", class: "basic" },
  { Name: "shoaib", class: "Advance" },
  { Name: "Mumtaz", class: "basic" },
];

let advanceStd = document.getElementById("stdData");

let filteredAdvStd = webDevelopment
  .filter((stds) => {
    return stds.class === "Advance";
  })
  .map((advStds) => {
    return `<li>${advStds.Name}</li>`;
  })
  .join("");

console.log(filteredAdvStd);

advanceStd.innerHTML = filteredAdvStd;