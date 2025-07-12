const text = "Currently building my tech tool kit.";
const speed = 50;       // typing speed
const pause = 2000;     // pause before deleting
let i = 0;
let typing = true;

const typeSound = document.getElementById("typeSound");
const output = document.getElementById("typewriter");

function typeLoop() {
  if (typing) {
    if (i < text.length) {
      output.innerHTML += text.charAt(i);
      if (text.charAt(i) !== " ") {
        typeSound.currentTime = 0;
        typeSound.play();
      }
      i++;
      setTimeout(typeLoop, speed);
    } else {
      typing = false;
      setTimeout(typeLoop, pause);
    }
  } else {
    if (i > 0) {
      output.innerHTML = text.substring(0, i - 1);
      i--;
      setTimeout(typeLoop, speed / 2);
    } else {
      typing = true;
      setTimeout(typeLoop, 500);
    }
  }
}

window.onload = () => {
  setTimeout(typeLoop, 800); // Delay to allow fade-in
};
