const buttons = document.querySelectorAll(".container button");
const sound = document.querySelector(".sound");

buttons.forEach((btn) => {
  btn.addEventListener("focusin", changeSound);
  btn.addEventListener("focusout", stopSound);
});

function changeSound(e) {
  const soundSrc = `${e.target.dataset.name}.wav`;
  sound.src = `./sound/${soundSrc}`;
  sound.play();
}

function stopSound() {
  sound.pause();
}
