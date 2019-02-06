
const sequence = {

}

const settings = {

    "oscillator1": {
        "frequency": 440,
        "typeOsc":
            "sine",
        "detune": 0
    },

    "oscillator2": {
        "frequency": 440,
        "typeOsc":
            "sine",
        "detune": 0
    },
    "filter": {
        "cutOffFreq": 70,
        "type":
            "lowpass",
        "setQ": 0
    },
    "envelope": {
        "attack": 0,
        "decay": 0,
        "sustain": 90,
        "release": 0
    },
    "lfo": {
        "frequency": 10,
        "type":
            "sine",
        "amount": 0
    }
}

export default { sequence, settings };
