var white = document.getElementById("white");
var greenSwatch = document.getElementById("green");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var blackSwatch = document.getElementById("black");
var image = document.getElementById("product-photo");
var price = document.getElementById("price");

greenSwatch.addEventListener("mouseover", function() {
  console.log("green");
  document.getElementById("green").className += " selected";
  image.src = "img/headphones-3.jpg";
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (tax)";
});


greenSwatch.addEventListener("mouseleave", function() {
  image.src = "img/headphones-5.jpg";
  document.getElementById("yellow").classList.remove(' selected');
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (tax)";
})

blueSwatch.addEventListener("mouseover", function() {
  image.src = "img/headphones-2.jpg";
  document.getElementById("blue").className += " selected";
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (tax)";
});

blueSwatch.addEventListener("mouseleave", function() {
  image.src = "img/headphones-5.jpg";
  document.getElementById("blue").classList.remove('selected');
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (tax)";
})

redSwatch.addEventListener("mouseover", function() {
  image.src = "img/headphones-4.jpg";
  document.getElementById("red").className += " selected";
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (Tax)";
});

redSwatch.addEventListener("mouseleave", function() {
  image.src = "img/headphones-5.jpg";
  document.getElementById("red").classList.remove(' selected');
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (Tax)";
})

black.addEventListener("mouseover", function() {
    image.src = "img/headphones-1.jpg";
    document.getElementById("black").className += " selected";
    price.innerHTML = "$548.99";
    price.style.color = "black";
    price.innerHTML += " (Tax)";
  });
  
  black.addEventListener("mouseleave", function() {
    image.src = "img/headphones-5.jpg";
    document.getElementById("black").classList.remove(' selected');
    price.innerHTML = "$548.99";
    price.style.color = "black";
    price.innerHTML += " (Tax)";
});
white.addEventListener("mouseover", function() {
  image.src = "img/headphones-5.jpg";
  document.getElementById("white").className += " selected";
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (Tax)";
});

white.addEventListener("mouseleave", function() {
  image.src = "img/headphones-5.jpg";
  document.getElementById("white").classList.remove(' selected');
  price.innerHTML = "$548.99";
  price.style.color = "black";
  price.innerHTML += " (Tax)";
});