// Get the modal
const modal = document.getElementById("myModal");
const mealTitle = document.getElementsByClassName("meal-title");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img[i].src;
        captionText.innerHTML = mealTitle[i].textContent;
        captionText.style.fontFamily = "Roboto";
        captionText.style.fontSize = "1.5rem"
    });
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
    modal.style.display = "none";
});

console.log(img);
