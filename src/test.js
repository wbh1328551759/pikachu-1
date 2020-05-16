import string from "./css.js";
let n = 1;
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(st);
    return;
  }
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

const stop = () => {
  window.clearInterval(st);
};

let time = 100;
const play = () => {
  return setInterval(run, time);
};
let st = play();

document.querySelector("#btnPlay").onclick = function () {
  stop();
  st = play();
};

document.querySelector("#btnStop").onclick = stop;

document.querySelector("#btnSlow").onclick = () => {
  stop();
  time = 200;
  st = play();
};

document.querySelector("#btnNormal").onclick = () => {
  stop();
  time = 100;
  st = play();
};

document.querySelector("#btnFast").onclick = () => {
  stop();
  time = 0;
  st = play();
};
