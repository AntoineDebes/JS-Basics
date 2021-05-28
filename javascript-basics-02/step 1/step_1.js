const image = document.querySelector("#image1");

image.addEventListener("mouseover", () => {
   image.src =  image.src.replace(".jpg", "_2.jpg");
});