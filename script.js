const text = "Currently building my tech tool kit.";
const speed = 50;
let i = 0;

const typeSound = document.getElementById("typeSound");

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    
    // Play sound only for visible characters
    if (text.charAt(i) !== " ") {
      typeSound.currentTime = 0;
      typeSound.play();
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  setTimeout(typeWriter, 700); // Slight delay to allow fade-in
};
