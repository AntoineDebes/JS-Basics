var img = document.querySelectorAll("img");

const onImageMouseOver = (event) => {
  const img = event.target;
  img.src = img.src.replace(".jpg","_2.jpg"); 
}

const onImageMouseOut = (event) => {
  const img = event.target;
  img.src = img.src.replace("_2.jpg",".jpg"); 
}

img.forEach(img => {

  img.addEventListener("mouseover", onImageMouseOver);
  img.addEventListener("mouseout", onImageMouseOut);

});