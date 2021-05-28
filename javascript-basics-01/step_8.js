const btn = document.getElementById("validate").addEventListener("click", () => {
    const name = document.getElementById("age").value;
    if(name > 18 ){
        alert("you are over 18");
    }else{
        alert("you are under 18");
    }
});

