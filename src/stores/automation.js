var noAutomation =
{

    oscillator1: {
      frequency: {
        recorded: false,
        steps: {}
      },
      typeOsc: {
        recorded: false,
        steps: {}
      },
      detune: {
        recorded: false,
        steps: {}
      }
    },
    oscillator2: {
      frequency: {
        recorded: false,
        steps: {}
      },
      typeOsc: {
        recorded: false,
        steps: {}
      },
      volume: {
        recorded: false,
        steps: {}
      }
    },
    filter: {
      cutOffFreq: {
        recorded: false,
        steps: {}
      },
      type: {
        recorded: false,
        steps: {}
      }
    },
    envelope: {
      attack: {
        recorded: false,
        steps: {}
      },
      decay: {
        recorded: false,
        steps: {}
      },
      sustain: {
        recorded: false,
        steps: {}
      },
      release: {
        recorded: false,
        steps: {}
      }
    },
    envelope2: {
      attack: {
        recorded: false,
        steps: {}
      },
      release: {
        recorded: false,
        steps: {}
      },
      amount: {
        recorded: false,
        steps: {}
      }
    },
    lfo: {
      frequency: {
        recorded: false,
        steps: {}
      },
      type: {
        recorded: false,
        steps: {}
      },
      amount: {
        recorded: false,
        steps: {}
      }
    },

}

noAutomation.oscillator1.frequency.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.oscillator1.typeOsc.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.oscillator1.detune.steps =
fill(range(0, 16), {
  value: 50
});

noAutomation.oscillator2.frequency.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.oscillator2.typeOsc.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.oscillator2.volume.steps =
fill(range(0, 16), {
  value: 50
});

noAutomation.filter.cutOffFreq.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.filter.type.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.envelope.attack.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.envelope.decay.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.envelope.sustain.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.envelope.release.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.envelope2.attack.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.envelope2.release.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.envelope2.amount.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.lfo.frequency.steps =
fill(range(0, 16), {
  value: 131,
});

noAutomation.lfo.amount.steps =
fill(range(0, 16), {
  value: 'sawtooth',
});

noAutomation.lfo.type.steps =
fill(range(0, 16), {
  value: 131,
});




import range from "lodash/range";
import fill from "lodash/fill";

export default noAutomation;
