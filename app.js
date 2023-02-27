const upButton = document.querySelector('.bloo .up');
const midButton = document.querySelector('.bloo .mid');
const downButton = document.querySelector('.bloo .down');
const coolButton = document.querySelector('.buttons .cool-bloo');
const changeBgButton = document.querySelector('.buttons .change-background');
const hatsButton = document.querySelector('.buttons .hats');
const eyesRoll = document.getElementById('eyes');
const waveHand = document.getElementById('wave');
const runBloo = document.getElementById('run');
const mainBloo = document.getElementById('bloo-main');
const coolBloo = document.getElementById('bloo-cool');
const hat1 = document.getElementById('hat-1');
const hat2 = document.getElementById('hat-2');
const hat3 = document.getElementById('hat-3');
const buttonWrapper = document.querySelector('.buttons');

upButton.addEventListener('click', addEyes);
function addEyes() {
  if (!eyesRoll.classList.contains('active')) {
    eyesRoll.classList.add('active');
    eyesRoll.play();
  }

  if (eyesRoll.classList.contains('active')) {
    setTimeout(removeEyes, 1000 * 1.5);
  }
}

function removeEyes() {
  if (eyesRoll.classList.contains('active')) {
    eyesRoll.classList.remove('active');
    eyesRoll.stop();
  }
}

midButton.addEventListener('click', addWave);
function addWave() {
  if (!waveHand.classList.contains('active')) {
    waveHand.classList.add('active');
    waveHand.play();
  }

  if (waveHand.classList.contains('active')) {
    setTimeout(removeWave, 1000 * 1.5);
  }
}

function removeWave() {
  if (waveHand.classList.contains('active')) {
    waveHand.classList.remove('active');
    waveHand.stop();
  }
}

downButton.addEventListener('click', addRun);
function addRun() {
  if (!runBloo.classList.contains('active')) {
    runBloo.play();
    mainBloo.classList.add('false');
    runBloo.classList.add('active');
  }

  if (runBloo.classList.contains('active')) {
    setTimeout(removeRun, 1000 * 1.5);
  }
}

function removeRun() {
  if (runBloo.classList.contains('active')) {
    mainBloo.classList.remove('false');
    runBloo.classList.remove('active');
    runBloo.stop();
  }
}

coolButton.addEventListener('click', addCool);
function addCool() {
  if (!coolBloo.classList.contains('active')) {
    coolBloo.play();
    coolBloo.classList.add('active');
  }

  if (coolBloo.classList.contains('active')) {
    setTimeout(removeCool, 1000 * 4.5);
  }
}

function removeCool() {
  if (coolBloo.classList.contains('active')) {
    coolBloo.classList.remove('active');
    coolBloo.stop();
  }
}

let index = 0;
changeBgButton.addEventListener('click', () => {
  const urls = [
    './../images/bg-1.jpg',
    './../images/bg-2.jpg',
    './../images/bg-3.jpg',
  ];

  index = (index + 1) % urls.length;

  const container = document.getElementById('container');

  console.log(`url(${urls[index]})`);

  container.style.backgroundImage = `url(${urls[index]})`;
});

let index2 = -1;

hatsButton.addEventListener('click', () => {
  const hats = [hat1, hat2, hat3];

  index2 = (index2 + 1) % hats.length;

  if (!hats[index2].classList.contains('active')) {
    hats[index2].play();
    hats[index2].classList.add('active');
  }

  if (hats[1].classList.contains('active')) {
    hats[0].classList.remove('active');
    hats[0].stop();
  }

  if (hats[2].classList.contains('active')) {
    hats[1].classList.remove('active');
    hats[1].stop();
  }

  if (hats[0].classList.contains('active')) {
    hats[2].classList.remove('active');
    hats[2].stop();
  }

  hatsButton.innerHTML = 'Next Hat';

  removeHatsButton.classList.remove('false');

  removeHatsButton.addEventListener('click', () => {
    hats[index2].classList.remove('active');
    hatsButton.innerHTML = 'Add Hat';
    removeHatsButton.classList.add('false');
  });
});

let removeHatsButton = document.createElement('button');
removeHatsButton.innerHTML = 'Remove Hats';
removeHatsButton.type = 'submit';
removeHatsButton.classList.add('remove-hat', 'false');
buttonWrapper.appendChild(removeHatsButton);
