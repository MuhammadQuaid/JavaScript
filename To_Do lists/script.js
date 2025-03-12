const inputs =document.getElementById("inp");
const text = document.querySelector(".text");

function add(){
if (inputs.value=="") {
    alert('pleace enter task!')
} else {
     const NewEle= document.createElement("ul");
       NewEle.innerHTML=`${inputs.value} <i class="fasolid fa-pen"></i> <i class="fa-solid fa-trash"></i>`;
        text.appendChild(NewEle);
        inputs.value="";
         NewEle.querySelector("i").removeEventListener("click", remove)
        function remove() {
            NewEle.remove()
        }
    }
}
NewEle.querySelector("i").removeEventListener("click", remove)