import {
    setPlayback
} from './index';

// Object which contains pad value, animation color, and sound
export var drumKit = {
    z: {
        pad: 'z',
        color: '#007EA7',
        sound: new Howl({
            src: ['sounds/kit/Kick.mp3'],
            volume: 1.0
        })
    },
    x: {
        pad: 'x',
        color: '#007398 ',
        sound: new Howl({
            src: ['sounds/kit/Snare.mp3'],
            volume: 1.0
        })
    },
    c: {
        pad: 'c',
        color: '#006889',
        sound: new Howl({
            src: ['sounds/kit/Hihat.mp3'],
            volume: 1.0
        })
    },
    v: {
        pad: 'v',
        color: '#005C7A',
        sound: new Howl({
            src: ['sounds/kit/Hihat2.mp3'],
            volume: 1.0
        })
    },
    a: {
        pad: 'a',
        color: '#B80204',
        sound: new Howl({
            src: ['sounds/kit/Kick2.mp3'],
            volume: 1.0
        })
    },
    s: {
        pad: 's',
        color: '#BE191A',
        sound: new Howl({
            src: ['sounds/kit/Clap.mp3'],
            volume: 1.0
        })
    },
    d: {
        pad: 'd',
        color: '#B80204',
        sound: new Howl({
            src: ['sounds/kit/Rim.mp3'],
            volume: 1.0
        })
    },
    f: {
        pad: 'f',
        color: '#A80204',
        sound: new Howl({
            src: ['sounds/kit/Snare2.mp3'],
            volume: 1.0
        })
    },
    q: {
        pad: 'q',
        color: '#6369D1',
        sound: new Howl({
            src: ['sounds/kit/Kick3.mp3'],
            volume: 1.0
        })
    },
    w: {
        pad: 'w',
        color: '#5A60BE',
        sound: new Howl({
            src: ['sounds/kit/Shaker.mp3'],
            volume: 1.0
        })
    },
    e: {
        pad: 'e',
        color: '#5256AC',
        sound: new Howl({
            src: ['sounds/kit/Clave.mp3'],
            volume: 1.0
        })
    },
    r: {
        pad: 'r',
        color: '#494D99',
        sound: new Howl({
            src: ['sounds/kit/Cowbell.mp3'],
            volume: 1.0
        })
    },
    1: {
        pad: '1',
        color: '#4BB3FD',
        sound: new Howl({
            src: ['sounds/kit/Conga1.mp3'],
            volume: 1.0
        })
    },
    2: {
        pad: '2',
        color: '#45A3E6',
        sound: new Howl({
            src: ['sounds/kit/Conga2.mp3'],
            volume: 1.0
        })
    },
    3: {
        pad: '3',
        color: '#3E93D0',
        sound: new Howl({
            src: ['sounds/kit/Conga3.mp3'],
            volume: 1.0
        })
    },
    4: {
        pad: '4',
        color: '#3783B9',
        sound: new Howl({
            src: ['sounds/kit/Cymbal.mp3'],
            volume: 1.0
        })
    }
}

export var song = {
    sound: new Howl({
        src: ['sounds/songs/hype.mp3'],
        volume: 1.0,
        onend: function () {
            setPlayback(false);
        }
    }),
}