
export default {
  title: "Bart's song",
  active: {
    title: "frequency",
    knobName: "octave",
    author: "Lawson",
    score: 0
  },
  groups: [
    {
      title: "Osc 1",
      moduleName: "oscillator1",
      icon: "osc",
      items: [
        {
          title: "frequency",
          knobName: "octave",
          author: "Lawson",
          score: 0
        },
        {
          title: "detune",
          knobName: "detune",
          author: "Lawson",
          score: 1
        },
        {
          title: "typeOsc",
          knobName: "shape",
          author: "Bart",
          score: 2
        }
      ]
    },
    {
      moduleName: "filter",
      title: "Filter",
      icon: "filter",
      items: [
        {
          title: "cutOffFreq",
          knobName: "Frequency",
          author: "Momcilo",
          score: 3
        },
        {
          title: "type",
          knobName: "shape",
          author: "Basti",
          score: 4
        }
      ]
    },
    {
      moduleName: "envelope",
      title: "AMP Env",
      icon: "envelope",
      items: [
        {
          title: "attack",
          knobName: "attack",
          author: "",
          score: 5
        },
        {
          title: "decay",
          knobName: "decay",
          author: "",
          score: 6
        },
        {
          title: "sustain",
          knobName: "sustain",
          author: "",
          score: 7
        },
        {
          title: "release",
          knobName: "release",
          author: "",
          score: 8
        }
      ]
    },
    {
      moduleName: "envelope2",
      title: "MOD ENV",
      icon: "envelope2",
      items: [
        {
          title: "attack",
          knobName: "attack",
          author: "",
          score: 9
        },
        {
          title: "decay",
          knobName: "decay",
          author: "",
          score: 10
        },
        {
          title: "amount",
          knobName: "amount",
          author: "",
          score: 11
        }
      ]
    },
    {
      moduleName: "lfo",
      title: "LFO",
      icon: "lfo",
      items: [
        {
          title: "Speed",
          knobName: "Speed",
          author: "",
          score: 12
        },
        {
          title: "frequency",
          knobName: "frequency",
          author: "",
          score: 13
        },
        {
          title: "type",
          knobName: "type",
          author: "",
          score: 14
        }
      ]
    },
    {
      moduleName: "router",
      title: "Router",
      icon: "router",
      items: [
        {
          title: "lfo",
          knobName: "lfo",
          author: "",
          score: 15
        },
        {
          title: "envelope2",
          knobName: "envelope2",
          author: "",
          score: 16
        }
      ]
    },
    {
      moduleName: "sequencer",
      title: "Sequencer",
      icon: "sequencer",
      items: [
        {
          title: "steps",
          knobName: "steps",
          author: "",
          score: 17
        },
        {
          title: "pitch",
          knobName: "pitch",
          author: "",
          score: 18
        },
        {
          title: "glide",
          knobName: "glide",
          author: "",
          score: 19
        },
        {
          title: "accent",
          knobName: "accent",
          author: "",
          score: 20
        },
        {
          title: "kick",
          knobName: "kick",
          author: "",
          score: 21
        },
        {
          title: "hat",
          knobName: "hat",
          author: "",
          score: 22
        },
        {
          title: "snare",
          knobName: "snare",
          author: "",
          score: 23
        },
        {
          title: "clap1",
          knobName: "clap1",
          author: "",
          score: 24
        },
        {
          title: "clap2",
          knobName: "clap2",
          author: "",
          score: 25
        },
        {
          title: "cymbal",
          knobName: "cymbal",
          author: "",
          score: 26
        },
        {
          title: "labmyc",
          knobName: "labmyc",
          author: "",
          score: 27
        },
        {
          title: "noise",
          knobName: "noise",
          author: "",
          score: 28
        }
      ]
    }
  ],
};