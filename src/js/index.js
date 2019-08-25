import '../sass/main.scss';

import 'howler';
import {
    drumKit,
    song
} from './music';
import {
    triggerPad,
    resetColor
} from './animations';


// State variables for playback and looping
var playback = false;
export var loop = false;

// State variables for music volume
var songVolume = 1.0;
var numVolume = 10;

// IE matches polyfill
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

export function setPlayback(bool) {
    playback = bool;
    var playBackIcon = document.querySelector('.play-back');
    !bool? playBackIcon.setAttribute('src', './img/play.svg') : playBackIcon.setAttribute('src', './img/pause.svg');
}

function setKitVolume(vol) {
    for (var prop in drumKit) {
        drumKit[prop].sound.volume(vol);
    }
    document.querySelector('.vol__num').textContent = vol > 0.9 ? numVolume : `0${numVolume}`;
    var volIcon = document.querySelector('.vol__icon');

    if (vol > 0.8) {
        volIcon.setAttribute('src', './img/vol-hi.svg');

    } else if (vol < 0.8 && vol > 0.5) {
        volIcon.setAttribute('src', './img/vol-med.svg');

    } else if (vol < 0.5 && vol > 0.2) {
        volIcon.setAttribute('src', './img/vol-lo.svg');

    } else if (vol < 0.1){
        volIcon.setAttribute('src', './img/vol-none.svg');
    }
}

// Play music
document.querySelector(".transport__play").addEventListener("click", function () {
    if (!playback) {
        song.sound.play();
        setPlayback(true);
    } else {
        song.sound.pause();
        setPlayback(false)
    }

});

// Stop music
document.querySelector(".transport__stop").addEventListener("click", function () {
    song.sound.stop();
    setPlayback(false)
});

// Loop music
document.querySelector(".transport__loop").addEventListener("click", function () {
    loop = loop ? false : true;
    song.sound.loop(loop);
    var el = document.querySelector(".loop");
    el.classList.toggle('invisible');
});

// Raise volume
document.querySelector(".transport__volume-up").addEventListener("click", function () {
    if (songVolume < 1.0) {
        songVolume += .1;
        numVolume += 1;
        song.sound.volume(songVolume);
        setKitVolume(songVolume);
    }
});

// Lower volume
document.querySelector(".transport__volume-down").addEventListener("click", function () {
    if (songVolume > 0.1) {
        songVolume -= .1;
        numVolume -= 1;
        song.sound.volume(songVolume);
        setKitVolume(songVolume);
    }
});

// Event listener to be able to click each pad. Calls the triggerPad function below
document.querySelector(".grid").addEventListener("mousedown", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        triggerPad(key);
    }
});

// Calls resetColor below to reset pad color back to white
document.querySelector(".grid").addEventListener("mouseup", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        resetColor(key);
    }
});

document.querySelector(".grid").addEventListener("mouseout", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        resetColor(key);
    }
});

// Event listener for drum pad/touch devices
document.querySelector(".grid").addEventListener("touchstart", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        triggerPad(key);
        event.preventDefault();
    }
});

// Resets color
document.querySelector(".grid").addEventListener("touchend", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        resetColor(key);
        event.preventDefault();
    }
});

var tool = new Tool();
// Event listener for each key press. Calls the triggerPad function below
tool.onKeyDown = function (event) {
    if (drumKit[event.key]) {
        triggerPad(event.key);
    }
}

// Event listener for each key release. Calls the resetColor function below
tool.onKeyUp = function (event) {
    if (drumKit[event.key]) {
        resetColor(drumKit[event.key].pad)
    }
}