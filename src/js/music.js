import {
    setPlayback
} from './index';

// Object which contains pad value, animation color, and sound
export var drumKit = {
    z: {
        pad: 'z',
        color: '#1a1c2c',
        sound: new Howl({
            src: ['sounds/kit/Kick.mp3'],
            volume: 1.0
        })
    },
    x: {
        pad: 'x',
        color: '#572956',
        sound: new Howl({
            src: ['sounds/kit/Snare.mp3'],
            volume: 1.0
        })
    },
    c: {
        pad: 'c',
        color: '#b14156',
        sound: new Howl({
            src: ['sounds/kit/Hihat.mp3'],
            volume: 1.0
        })
    },
    v: {
        pad: 'v',
        color: '#ee7b58',
        sound: new Howl({
            src: ['sounds/kit/Hihat2.mp3'],
            volume: 1.0
        })
    },
    a: {
        pad: 'a',
        color: '#ffd079',
        sound: new Howl({
            src: ['sounds/kit/Kick2.mp3'],
            volume: 1.0
        })
    },
    s: {
        pad: 's',
        color: '#a0f072',
        sound: new Howl({
            src: ['sounds/kit/Clap.mp3'],
            volume: 1.0
        })
    },
    d: {
        pad: 'd',
        color: '#38b86e',
        sound: new Howl({
            src: ['sounds/kit/Rim.mp3'],
            volume: 1.0
        })
    },
    f: {
        pad: 'f',
        color: '#276e7b',
        sound: new Howl({
            src: ['sounds/kit/Snare2.mp3'],
            volume: 1.0
        })
    },
    q: {
        pad: 'q',
        color: '#726da8',
        sound: new Howl({
            src: ['sounds/kit/Kick3.mp3'],
            volume: 1.0
        })
    },
    w: {
        pad: 'w',
        color: '#7d8cc4',
        sound: new Howl({
            src: ['sounds/kit/Shaker.mp3'],
            volume: 1.0
        })
    },
    e: {
        pad: 'e',
        color: '#a0d2db',
        sound: new Howl({
            src: ['sounds/kit/Clave.mp3'],
            volume: 1.0
        })
    },
    r: {
        pad: 'r',
        color: '#bee7e8',
        sound: new Howl({
            src: ['sounds/kit/Cowbell.mp3'],
            volume: 1.0
        })
    },
    1: {
        pad: '1',
        color: '#f08700',
        sound: new Howl({
            src: ['sounds/kit/Conga1.mp3'],
            volume: 1.0
        })
    },
    2: {
        pad: '2',
        color: '#f49f0a',
        sound: new Howl({
            src: ['sounds/kit/Conga2.mp3'],
            volume: 1.0
        })
    },
    3: {
        pad: '3',
        color: '#efca08',
        sound: new Howl({
            src: ['sounds/kit/Conga3.mp3'],
            volume: 1.0
        })
    },
    4: {
        pad: '4',
        color: '#00a6a6',
        sound: new Howl({
            src: ['sounds/kit/Cymbal.mp3'],
            volume: 1.0
        })
    }
}

export var song = {
    sound: new Howl({
        src: ['sounds/songs/future-rnb.mp3'],
        volume: 1.0,
        onend: function () {
            setPlayback(false);
        }
    }),
}