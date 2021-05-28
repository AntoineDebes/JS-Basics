// const password = document.getElementById("password");
// const confirmation = document.getElementById("confirmation");
let passwords = 
    { password : document.getElementById("password"),
    confirmation : document.getElementById("confirmation")
    }

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let valueOne = passwords.password;
    let valueToo = passwords.confirmation;
    if( valueOne.value !== valueToo.value ) {
        valueOne.style.border = "2px solid red";
        valueToo.style.border = "2px solid red"; 
    }
});
