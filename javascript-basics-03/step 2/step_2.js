const show = document.getElementById("show");
const hide = document.getElementById("hide");
const texte = document.getElementById("texte");

let target = [show,hide];
target.forEach(item => {
    item.addEventListener("click", () => {
        if( item === target[0]){
            texte.style.display = "block";
        }else{
            texte.style.display = "none";
        }
    });
});