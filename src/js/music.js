// Object which contains pad value, animation color, and sound
export var drumKit = {
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
 
export var song = {
    sound: new Howl({
        src: ['sounds/songs/future-rnb.wav'],
        volume: 1.0,
        onend: function () {
            playback = false;
        }
    }),
}
