
var drumKits = [{
        z: {
            pad: 'z',
            color: '#1a1c2c',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Kick 1.wav'],
                volume: 0.5
            })
        },
        x: {
            pad: 'x',
            color: '#572956',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Snare 6.wav'],
                volume: 0.5
            })
        },
        c: {
            pad: 'c',
            color: '#b14156',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Top 8.wav'],
                volume: 0.5
            })
        },
        v: {
            pad: 'v',
            color: '#ee7b58',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Top 11.wav'],
                volume: 0.5
            })
        },
        a: {
            pad: 'a',
            color: '#ffd079',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Kick 12.wav'],
                volume: 0.5
            })
        },
        s: {
            pad: 's',
            color: '#a0f072',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Snare 14.wav'],
                volume: 0.5
            })
        },
        d: {
            pad: 'd',
            color: '#38b86e',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Top 9.wav'],
                volume: 0.5
            })
        },
        f: {
            pad: 'f',
            color: '#276e7b',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Top 13.wav'],
                volume: 0.5
            })
        },
        q: {
            pad: 'q',
            color: '#726da8',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Perc 13.wav'],
                volume: 0.5
            })
        },
        w: {
            pad: 'w',
            color: '#7d8cc4',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Perc 12.wav'],
                volume: 0.5
            })
        },
        e: {
            pad: 'e',
            color: '#a0d2db',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Perc 6.wav'],
                volume: 0.5
            })
        },
        r: {
            pad: 'r',
            color: '#bee7e8',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_Perc 15.wav'],
                volume: 0.5
            })
        },
        1: {
            pad: '1',
            color: '#c3acce',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 1.wav'],
                volume: 0.7
            })
        },
        2: {
            pad: '2',
            color: '#89909f',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 3.wav'],
                volume: 0.7
            })
        },
        3: {
            pad: '3',
            color: '#538083',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 5.wav'],
                volume: 0.4
            })
        },
        4: {
            pad: '4',
            color: '#2a7f62',
            sound: new Howl({
                src: ['sounds/rnb_kit/OS_RNB_125_Amin_Crazy Vocal 6.wav'],
                volume: 1.0
            })
        }
    },
    {}
];

var songs = [
    {
        sound: new Howl({
            src: ['sounds/songs/rnb_crazy.wav'],
            onend: function() {
                playback = false;
            }
        }),
    }
]

// Kitindex is how you change drum kits and also the music.
var kitIndex = 0;

var shapes = [];

var rotateNum;

var playback = false;

var kitNames = ["RNB Kit 1", "Hip Hop Kit 2", "Future Bass Kit 3", "Funk Kit 4", "Electro Kit 5"];

document.querySelector(".transport__play").addEventListener("click", function () {
    if (!playback) {
        songs[kitIndex].sound.play();
        playback = true;
    } else {
        songs[kitIndex].sound.pause();
        playback = false;
    }
});

document.querySelector(".transport__stop").addEventListener("click", function () {
    songs[kitIndex].sound.stop();
    playback = false;
});

document.querySelector(".transport__loop").addEventListener("click", function () {
    songs[kitIndex].sound.loop(true);
    console.log(songs[kitIndex].sound.loop);
    

    var el = document.querySelector(".transport__loop");
    el.classList.toggle('btn-loop');
    console.log(el.classList);
});

document.querySelector(".transport__next").addEventListener("click", function () {
    if(playback === false) {
        if (kitIndex < 4) {
            kitIndex++
        } else {
            kitIndex = 0;
        }
        document.querySelector(".screen").innerText = kitNames[kitIndex];
    }
});

document.querySelector(".transport__previous").addEventListener("click", function () {
    if (playback === false) {
        if (kitIndex === 0) {
            kitIndex = 4
        } else {
            kitIndex--;
        }
        document.querySelector(".screen").innerText = kitNames[kitIndex];
    }
});

// Event listener to be able to click each pad. Calls the triggerPad function below
document.querySelector(".grid").addEventListener("mousedown", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        triggerPad(key);
    }
});

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

document.querySelector(".grid").addEventListener("touchstart", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        triggerPad(key);
        event.preventDefault();
    }
});

document.querySelector(".grid").addEventListener("touchend", function (event) {
    if (event.target && event.target.matches("div.grid__item")) {
        var key = event.target.innerText.toLowerCase();
        resetColor(key);
        event.preventDefault();
    }
});


// Event listener for each key press. Calls the triggerPad function below
function onKeyDown(event) {
    if (drumKits[kitIndex][event.key]) {
        triggerPad(event.key);
    }
}

function onKeyUp(event) {
    if (drumKits[kitIndex][event.key]) {
        resetColor(drumKits[kitIndex][event.key].pad)
    }
}

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

// By using the integer value of kitIndex obove, we can access each kit by passing in kitIndex to the drumKits index array of objects. 
function triggerPad(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var num = Math.floor(Math.random() * 3);
    var newShape;

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
    newShape.strokeColor = drumKits[kitIndex][event].color
    drumKits[kitIndex][event].sound.play();
    shapes.push(newShape);
    changeColor(drumKits[kitIndex][event].pad, drumKits[kitIndex][event].color);
}   

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

