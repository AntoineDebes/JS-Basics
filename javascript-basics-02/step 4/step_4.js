const reset = document.querySelector("button");

reset.addEventListener("click", () => {
    if(confirm("Are you sure?")){
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("city").value = "";
    }
});