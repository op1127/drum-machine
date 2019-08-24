import paper from 'paper';
import { drumKit } from './music'

paper.install(window);

// Get a reference to the canvas object
var canvas = document.getElementById('myCanvas');
// Create an empty project and a view for the canvas:
paper.setup(canvas);

// Array to push animation shapes into
var shapes = [];
var rotateNum;

// Called by the triggerPad function below
function changeColor(key, color) {
    var padClass = ".pad-" + key;
    var el = document.querySelector(padClass);
    el.style.backgroundColor = color;
    el.style.color = color;
    el.style.transform = 'scale(.94)';
    document.querySelector('.signature').style.color = color;
}

export function resetColor(key) {
    var padClass = ".pad-" + key;
    var el = document.querySelector(padClass);
    el.style.backgroundColor = 'rgb(238, 238, 238)';
    el.style.color = 'rgb(110, 110, 110)';
    el.style.transform = 'scale(1)';
}


export function triggerPad(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = {
        x: maxPoint.x * randomPoint.x,
        y: maxPoint.y * randomPoint.y
    };
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
view.onFrame = function () {
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

