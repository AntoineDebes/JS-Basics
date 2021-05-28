const input = document.getElementById("name");

input.addEventListener("change", () => {
    let div = document.getElementById("div");
    div.innerHTML = input.value;
});
