const colors = document.querySelectorAll(".color");
const text = document.getElementById("text");

colors.forEach(color => {
    color.addEventListener("click", () => {
        if( color == colors[0]){
            text.style.color = "green";
        }else if( color == colors[1]){
            text.style.color = "red";
        }else{
            text.style.color = "blue";
        }
    })
})