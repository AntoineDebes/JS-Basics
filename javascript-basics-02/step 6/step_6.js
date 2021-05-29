(function(){
    var img = document.querySelectorAll("img");

    img.forEach(img => img.addEventListener("mouseover", () => {
        img.src = img.src.replace(".jpg","_2.jpg"); 
    }));

    img.forEach(img => img.addEventListener("mouseout", () => {
        img.src = img.src.replace("_2.jpg",".jpg"); 
    }));
})();
