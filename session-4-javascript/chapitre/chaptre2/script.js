let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = " my dream!";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "images/my dream.jpg");
  image.setAttribute("alt", "photos de G-Class");
});
