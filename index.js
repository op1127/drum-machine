// Object which contains pad value, animation color, and sound
var drumKit = {
    z: {
        pad: 'z',
        color: '#1a1c2c',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Kick 1.wav'],
            volume: 0.3
        })
    },
    x: {
        pad: 'x',
        color: '#572956',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Snare 6.wav'],
            volume: 0.3
        })
    },
    c: {
        pad: 'c',
        color: '#b14156',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Top 8.wav'],
            volume: 0.2
        })
    },
    v: {
        pad: 'v',
        color: '#ee7b58',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Top 11.wav'],
            volume: 0.3
        })
    },
    a: {
        pad: 'a',
        color: '#ffd079',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Kick 12.wav'],
            volume: 0.3
        })
    },
    s: {
        pad: 's',
        color: '#a0f072',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Snare 14.wav'],
            volume: 0.3
        })
    },
    d: {
        pad: 'd',
        color: '#38b86e',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Top 9.wav'],
            volume: 0.3
        })
    },
    f: {
        pad: 'f',
        color: '#276e7b',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Top 13.wav'],
            volume: 0.3
        })
    },
    q: {
        pad: 'q',
        color: '#726da8',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Perc 13.wav'],
            volume: 0.3
        })
    },
    w: {
        pad: 'w',
        color: '#7d8cc4',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Perc 12.wav'],
            volume: 0.3
        })
    },
    e: {
        pad: 'e',
        color: '#a0d2db',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Perc 6.wav'],
            volume: 0.3
        })
    },
    r: {
        pad: 'r',
        color: '#bee7e8',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_Perc 15.wav'],
            volume: 0.3
        })
    },
    1: {
        pad: '1',
        color: '#f08700',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 1.wav'],
            volume: 0.3
        })
    },
    2: {
        pad: '2',
        color: '#f49f0a',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 3.wav'],
            volume: 0.3
        })
    },
    3: {
        pad: '3',
        color: '#efca08',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 5.wav'],
            volume: 0.3
        })
    },
    4: {
        pad: '4',
        color: '#00a6a6',
        sound: new Howl({
            src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 6.wav'],
            volume: 1.0
        })
    }
}

// Music
var song = {
    sound: new Howl({
        src: ['sounds/songs/future-rnb.wav'],
        volume: 1.0,
        onend: function () {
            playback = false;
        }
    }),
}

// Array to push animation shapes into
var shapes = [];
var rotateNum;

// State variables for playback and looping
var playback = false;
var loop = false;

// State variables for music volume
var songVolume = 1.0;
var numVolume = 10;

// Play music
document.querySelector(".transport__play").addEventListener("click", function () {
    if (!playback) {
        song.sound.play();
        playback = true;
    } else {
        song.sound.pause();
        playback = false;
    }
});

// Stop music
document.querySelector(".transport__stop").addEventListener("click", function () {
    song.sound.stop();
    playback = false;
});

// Loop music
document.querySelector(".transport__loop").addEventListener("click", function () {
    loop = loop ? false : true;
    song.sound.loop(loop);
    var el = document.querySelector("#loop");
    el.classList.toggle('invisible');
});

// Raise volume
document.querySelector(".transport__volume-up").addEventListener("click", function () {
    if (songVolume < 1.0) {
        songVolume += .1;
        numVolume += 1;
        song.sound.volume(songVolume);
        document.querySelector('#volume').textContent = numVolume;
    }
});

// Lower volume
document.querySelector(".transport__volume-down").addEventListener("click", function () {
    if (songVolume > 0.1) {
        songVolume -= .1;
        numVolume -= 1;
        song.sound.volume(songVolume);
        document.querySelector('#volume').textContent = numVolume;
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


// Event listener for each key press. Calls the triggerPad function below
function onKeyDown(event) {
    if (drumKit[event.key]) {
        triggerPad(event.key);
    }
}

// Event listener for each key release. Calls the resetColor function below
function onKeyUp(event) {
    if (drumKit[event.key]) {
        resetColor(drumKit[event.key].pad)
    }
}

// Called by the triggerPad function below
function changeColor(key, color) {
    var padClass = ".pad-" + key;
    var el = document.querySelector(padClass);
    el.style.backgroundColor = color;
    el.style.color = color;
    el.style.transform = 'scale(.94)';
    document.querySelector('.signature').style.color = color;
}

function resetColor(key) {
    var padClass = ".pad-" + key;
    var el = document.querySelector(padClass);
    el.style.backgroundColor = 'rgb(238, 238, 238)';
    el.style.color = 'rgb(110, 110, 110)';
    el.style.transform = 'scale(1)';
}

// By using the letter/integer value of each drum pad, we can access each kit by passing it into  the drumKit object at the very top. 
function triggerPad(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var num = Math.floor(Math.random() * 3);
    var newShape;

    // Determines a the shape using the random num
    if (num === 0) {
        newShape = new Path.Circle(point, 550);
    } else if (num === 1) {
        newShape = new Path.RegularPolygon(point, 3, 800);
        rotateNum = -5;
    } else if (num === 2) {
        newShape = new Path.Rectangle(point, 800, 800);
        rotateNum = 5;
    }
    newShape.strokeWidth = 25;
    newShape.strokeColor = drumKit[event].color
    drumKit[event].sound.play();
    shapes.push(newShape);
    changeColor(drumKit[event].pad, drumKit[event].color);

}

// Paper js animations
function onFrame() {
    for (var i = 0; i < shapes.length; i++) {
        shapes[i].scale(0.9);
        shapes[i].rotate(rotateNum);
        shapes[i].strokeColor.hue += 1;
        if (shapes[i].area < 1) {
            shapes[i].remove(); // remove the shape from the canvas
            shapes.splice(i, 1); // remove the shape from the array
        }
    }
}