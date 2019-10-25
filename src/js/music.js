import { setPlayback, loop } from "./index";

// Object which contains pad value, animation color, and sound
export var drumKit = {
	z: {
		pad: "z",
		sound: new Howl({
			src: ["sounds/kit/Kick.mp3"],
			volume: 1.0
		})
	},
	x: {
		pad: "x",
		sound: new Howl({
			src: ["sounds/kit/Snare.mp3"],
			volume: 1.0
		})
	},
	c: {
		pad: "c",
		sound: new Howl({
			src: ["sounds/kit/Hihat.mp3"],
			volume: 1.0
		})
	},
	v: {
		pad: "v",
		sound: new Howl({
			src: ["sounds/kit/Hihat2.mp3"],
			volume: 1.0
		})
	},
	a: {
		pad: "a",
		sound: new Howl({
			src: ["sounds/kit/Kick2.mp3"],
			volume: 1.0
		})
	},
	s: {
		pad: "s",
		sound: new Howl({
			src: ["sounds/kit/Clap.mp3"],
			volume: 1.0
		})
	},
	d: {
		pad: "d",
		sound: new Howl({
			src: ["sounds/kit/Rim.mp3"],
			volume: 1.0
		})
	},
	f: {
		pad: "f",
		sound: new Howl({
			src: ["sounds/kit/Snare2.mp3"],
			volume: 1.0
		})
	},
	q: {
		pad: "q",
		sound: new Howl({
			src: ["sounds/kit/Kick3.mp3"],
			volume: 1.0
		})
	},
	w: {
		pad: "w",
		sound: new Howl({
			src: ["sounds/kit/Shaker.mp3"],
			volume: 1.0
		})
	},
	e: {
		pad: "e",
		sound: new Howl({
			src: ["sounds/kit/Clave.mp3"],
			volume: 1.0
		})
	},
	r: {
		pad: "r",
		sound: new Howl({
			src: ["sounds/kit/Cowbell.mp3"],
			volume: 1.0
		})
	},
	1: {
		pad: "1",
		sound: new Howl({
			src: ["sounds/kit/Conga1.mp3"],
			volume: 1.0
		})
	},
	2: {
		pad: "2",
		sound: new Howl({
			src: ["sounds/kit/Conga2.mp3"],
			volume: 1.0
		})
	},
	3: {
		pad: "3",
		sound: new Howl({
			src: ["sounds/kit/Conga3.mp3"],
			volume: 1.0
		})
	},
	4: {
		pad: "4",
		sound: new Howl({
			src: ["sounds/kit/Cymbal.mp3"],
			volume: 1.0
		})
	}
};

export var song = {
	sound: new Howl({
		src: ["sounds/songs/hype.mp3"],
		volume: 1.0,
		onend: function() {
			if (!loop) {
				setPlayback(false);
			}
		}
	})
};
