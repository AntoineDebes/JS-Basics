const shoeSize = document.getElementById("shoe_size").value;
const birthYear = document.getElementById("year").value;
const btn = document.getElementById("validate");
btn.addEventListener("click", () => {
    let output = ((((shoeSize * 2) + 5)*50) - birthYear) + 1766;

    return alert(output);
});
