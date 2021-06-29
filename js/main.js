var audioContext = new AudioContext();  // <-- chrome warning

var oscillator174 = new OscillatorNode(audioContext, { type: 'sine', frequency: 174, detune: 0 });
var oscillator285 = new OscillatorNode(audioContext, { type: 'sine', frequency: 285, detune: 0 });
var oscillator396 = new OscillatorNode(audioContext, { type: 'sine', frequency: 396, detune: 0 });
var oscillator417 = new OscillatorNode(audioContext, { type: 'sine', frequency: 417, detune: 0 });
var oscillator528 = new OscillatorNode(audioContext, { type: 'sine', frequency: 528, detune: 0 });
var oscillator639 = new OscillatorNode(audioContext, { type: 'sine', frequency: 639, detune: 0 });
var oscillator741 = new OscillatorNode(audioContext, { type: 'sine', frequency: 741, detune: 0 });
var oscillator852 = new OscillatorNode(audioContext, { type: 'sine', frequency: 852, detune: 0 });
var oscillator963 = new OscillatorNode(audioContext, { type: 'sine', frequency: 963, detune: 0 });
var oscillator = new OscillatorNode(audioContext, { type: 'sine', frequency: 440, detune: 0 });

var gain174 = new GainNode(audioContext, { gain: 0 });
var gain285 = new GainNode(audioContext, { gain: 0 });
var gain396 = new GainNode(audioContext, { gain: 0 });
var gain417 = new GainNode(audioContext, { gain: 0 });
var gain528 = new GainNode(audioContext, { gain: 0 });
var gain639 = new GainNode(audioContext, { gain: 0 });
var gain741 = new GainNode(audioContext, { gain: 0 });
var gain852 = new GainNode(audioContext, { gain: 0 });
var gain963 = new GainNode(audioContext, { gain: 0 });
var gain = new GainNode(audioContext, { gain: 0 });

var analyser174 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser285 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser396 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser417 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser528 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser639 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser741 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser852 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser963 = new AnalyserNode(audioContext, { fftSize: 2048 });
var analyser = new AnalyserNode(audioContext, { fftSize: 2048 });

oscillator174.connect(gain174); gain174.connect(analyser174); analyser174.connect(audioContext.destination);
oscillator285.connect(gain285); gain285.connect(analyser285); analyser285.connect(audioContext.destination);
oscillator396.connect(gain396); gain396.connect(analyser396); analyser396.connect(audioContext.destination);
oscillator417.connect(gain417); gain417.connect(analyser417); analyser417.connect(audioContext.destination);
oscillator528.connect(gain528); gain528.connect(analyser528); analyser528.connect(audioContext.destination);
oscillator639.connect(gain639); gain639.connect(analyser639); analyser639.connect(audioContext.destination);
oscillator741.connect(gain741); gain741.connect(analyser741); analyser741.connect(audioContext.destination);
oscillator852.connect(gain852); gain852.connect(analyser852); analyser852.connect(audioContext.destination);
oscillator963.connect(gain963); gain963.connect(analyser963); analyser963.connect(audioContext.destination);
oscillator.connect(gain); gain.connect(analyser); analyser.connect(audioContext.destination);

// オシレータを開始する
function startOscillator() {
    oscillator174.start(0);
    oscillator285.start(0);
    oscillator396.start(0);
    oscillator417.start(0);
    oscillator528.start(0);
    oscillator639.start(0);
    oscillator741.start(0);
    oscillator852.start(0);
    oscillator963.start(0);
    oscillator.start(0);
}

// 周波数と [オシレータ、ゲイン、アナライザー] の連想配列
const nodeMap = {
    174: [oscillator174, gain174, analyser174],
    285: [oscillator285, gain285, analyser285],
    396: [oscillator396, gain396, analyser396],
    417: [oscillator417, gain417, analyser417],
    528: [oscillator528, gain528, analyser528],
    639: [oscillator639, gain639, analyser639],
    741: [oscillator741, gain741, analyser741],
    852: [oscillator852, gain852, analyser852],
    963: [oscillator963, gain963, analyser963],
}

// 波形を変更する
function changeWave(id) {
    const split = id.split('-');
    let wave = split[0];
    let osc = getOscillator(split[1]);
    osc.type = wave;
}

// 音量を変更する
function changeVolume(id, value) {
    const split = id.split('-');
    let vol = getGain(split[1]);
    vol.gain.value = value;
}

// 周波数に対応したオシレータを取得する
function getOscillator(freq) {
    return (freq in nodeMap) ? nodeMap[freq][0] : oscillator;
}

// 周波数に対応したゲインを取得する
function getGain(freq) {
    return (freq in nodeMap) ? nodeMap[freq][1] : gain;
}

// 周波数に対応したゲインを取得する
function getAnalyser(freq) {
    return (freq in nodeMap) ? nodeMap[freq][2] : analyser;
}

// 新しくスケールの異なるノードを作成する
function playScale(wave) {
    let time = audioContext.currentTime;

    playSingleSound(wave, 174, 1, time + 0, 1);
    playSingleSound(wave, 285, 1, time + 1, 1);
    playSingleSound(wave, 396, 1, time + 2, 1);
    playSingleSound(wave, 417, 1, time + 3, 1);
    playSingleSound(wave, 528, 1, time + 4, 1);
    playSingleSound(wave, 639, 1, time + 5, 1);
    playSingleSound(wave, 741, 1, time + 6, 1);
    playSingleSound(wave, 852, 1, time + 7, 1);
    playSingleSound(wave, 963, 1, time + 8, 1);

    playSingleSound(wave, 174, 0.2, time + 9.0, 5.9);
    playSingleSound(wave, 285, 0.2, time + 9.1, 5.8);
    playSingleSound(wave, 396, 0.2, time + 9.2, 5.7);
    playSingleSound(wave, 417, 0.2, time + 9.3, 5.6);
    playSingleSound(wave, 528, 0.2, time + 9.4, 5.5);
    playSingleSound(wave, 639, 0.2, time + 9.5, 5.4);
    playSingleSound(wave, 741, 0.2, time + 9.6, 5.3);
    playSingleSound(wave, 852, 0.2, time + 9.7, 5.2);
    playSingleSound(wave, 963, 0.2, time + 9.8, 5.1);
}

function playSingleSound(wave, frequency, volume, time, length) {
    let osc = new OscillatorNode(audioContext, { type: wave, frequency: frequency, detune: 0 });
    let vol = new GainNode(audioContext, { gain: volume });
    osc.connect(vol); vol.connect(audioContext.destination);
    osc.start(time); osc.stop(time + length);
}
