const btn = document.getElementById("validate");

btn.addEventListener("click", () => {
    const firstNumber = document.getElementById("first_number").value;
    const secondNumber = document.getElementById("second_number").value;

    let output = firstNumber / secondNumber;
    return alert(output);
});
