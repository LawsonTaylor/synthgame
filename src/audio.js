import Tone from 'tone'
import { DEBUG_ENABLED } from '@/constants'

// define logging mechanism
const log = (log) => false ? console.info(log) : log

export default {
  state: {
    Tone: Tone,
    loop: undefined,
    toneLength: '16n'
  },
  init () {
    log('initializing all submodules before using')
    this.player.init()
    this.sweepPlayer.init()
    this.oscillator1.init()
    this.oscillator2.init()
    this.envelope.init()
    this.lfo.init()
    this.filter.init()
    this.compressor.init()
    this.volume.init()

    const player = this.player.state.device
    const sweepPlayer = this.sweepPlayer.state.device
    const oscillator1 = this.oscillator1.state.device
    const oscillator2 = this.oscillator2.state.device
    const pitchShift = this.oscillator1.state.pitchShift
    const envelope = this.envelope.state.device
    const lfo = this.lfo.state.device
    const filter = this.filter.state.device
    const volume = this.volume.state.device
    const compressor = this.compressor.state.device


    log(`Created new general output for audio device`)
    const output = new Tone.Volume(-12)
    log(`Connecting LFO to filter frequency`)
    lfo.connect(oscillator1.detune).start()
    log(`Chaining oscillator1 => pitch shift => filter => envelope => compressor => volume`)
    oscillator1.chain(pitchShift, filter, envelope, compressor, volume, output)
    oscillator2.connect(pitchShift)

    log(`Starting oscillator1`)
    oscillator1.start()

    return output
  },
  setBpm (bpm) {
    log(`setting BPM length to: ${bpm}`)
    this.state.Tone.Transport.bpm.value = bpm
    return this.state.Tone.Transport.bpm.value
  },
  setMainLoop ({noteArray, subdivision}, callback) {
    log(`Setting new main loop`)
    if(this.state.loop) this.state.loop.dispose()
    this.state.loop = new Tone.Sequence(callback, noteArray, subdivision)
    return this.state.loop
  },
  start () {
    log(`starting Tone.js Transport`)
    return this.state.Tone.Transport.start()
  },
  connectChanelToMaster (channel) {
    log(`Connecting channel: ${channel} to master`)
    // disconnect outputs?
    return channel.toMaster()
  },
  playNote (shift, {noteLength, volume}) {
    log(`Playing shifted note: ${shift}`)
    this.oscillator1.state.pitchShift.pitch = shift
    this.oscillator2.state.pitchShift.pitch = shift
    if(volume) this.volume.state.device.volume.value = volume // TODO: should only set volume for this note
    return this.envelope.state.device.triggerAttackRelease(noteLength || this.state.toneLength)
  },
  playKick () {
    log(`Playing kick`)
    return this.player.state.device.start();
  },
  playSweep () {
    log(`Playing sweep`)
    return this.sweepPlayer.state.device.start();
  },
  stopSweep () {
    log(`Stopping sweep`)
    return this.sweepPlayer.state.device.stop();
  },
  setSecondOscillatorPlayingTo (state) {
    if (state) this.oscillator2.state.device.start()
    else this.oscillator2.state.device.stop()
  },
  setToneLength (length) {
    log(`setting envelope tone length to: ${length}`)
    this.state.toneLength = length
    return this.state.toneLength
  },
  player: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing player with options: ${options}`)
      this.state.device = new Tone.Player({
        url : require('./assets/beat.mp3'),
      }).toMaster()
    }
  },
  sweepPlayer: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing player with options: ${options}`)
      this.state.device = new Tone.Player({
        url : require('./assets/sweeptats.wav'),
      }).toMaster()
    }
  },
  oscillator1: {
    state: {
      device: undefined,
      pitchShift: undefined
    },
    init (options) {
      log(`Initializing oscillator1 with options: ${options}`)
      this.state.device = new Tone.Oscillator({
        type: 'sine',
        frequency: 131,
        detune: 0,
        phase: 0,
        ...options
      })
      log(`Initializing pitch shift effect on oscillator1`)
      this.state.pitchShift = new Tone.PitchShift()
    }
  },
  oscillator2: {
    state: {
      device: undefined,
      pitchShift: undefined
    },
    init (options) {
      log(`Initializing oscillator2 with options: ${options}`)
      this.state.device = new Tone.Oscillator({
        type: 'sine',
        frequency: 131,
        detune: 0,
        phase: 0,
        ...options
      })
      log(`Initializing pitch shift effect on oscillator2`)
      this.state.pitchShift = new Tone.PitchShift()
    }
  },
  envelope: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing envelope with options: ${options}`)
      this.state.device = new Tone.AmplitudeEnvelope({
        attack: 0.11,
        decay: 0.21,
        sustain: 0.09,
        release: 1.2,
        attackCurve: 'linear',
        releaseCurve: 'exponential',
        ...options
      })
    }
  },
  lfo: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing LFO with options: ${options}`)
      this.state.device = new Tone.LFO(
      //   {
      //   type: 'sine',
      //   min: 0.1,
      //   max: 10,
      //   phase: 0,
      //   frequency: 1,
      //   amplitude: 1,
      //   ...options
      // }
        '4n', 0, 8000
      )
    }
  },
  compressor: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing Compressor with options: ${options}`)
      this.state.device = new Tone.Compressor({
      ratio  : 52 ,
      threshold  : -24 ,
      release  : 5.25 ,
      attack  : 0.003 ,
      knee  : 50
      });
    }
  },
  filter: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing filter with options: ${options}`)
      this.state.device = new Tone.Filter(
        {
          type: 'lowpass',
          frequency: 8000,
          rolloff: -12,
          Q: 1,
          gain: 1,
          ...options
        }
      )
    }
  },
  volume: {
    state: {
      device: undefined
    },
    init (options) {
      log(`Initializing volume with options: ${options}`)
      this.state.device = new Tone.Volume()
    }
  }
}
