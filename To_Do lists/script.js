const inputs =document.getElementById("inp");
const text = document.querySelector(".text");
function add(){
if (inputs.value=="") {
    alert('pleace enter task!')
} else {
     let NewEle= document.createElement("ul");
       NewEle.innerHTML=`${inputs.value} <i class="fa-solid fa-pen"></i> <i class="fa-solid fa-trash"></i>`;
        text.appendChild(NewEle);
        inputs.value="";
         NewEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            btn.addEventListener("click")
        }
    }
}
