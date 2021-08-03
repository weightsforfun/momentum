const images = ["river1.jpg", "bg1.jpeg", "bg2.jpeg", "bg3.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("mainbg");
document.body.prepend(bgImage);
