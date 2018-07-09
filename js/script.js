var soundIcon = document.getElementById('audio-toggle');
var audioPlayer = document.getElementById('audioPlayer');
var audioWave = document.getElementById('sound-wave');
var audioMute = document.getElementById('mute');

var soundPlay = true;

function audioToggle() {	
	if (soundPlay) {
		audioPlayer.play();
		audioPlayer.muted = true;
		soundPlay = false;
	} else {
		audioPlayer.muted = false;
		soundPlay = true;
	}
}

function muteSwitch() {
    if (soundPlay) {
		audioWave.style.display = 'none';
		audioMute.style.display = 'block';
	} else {
		audioWave.style.display = 'block';
		audioMute.style.display = 'none';
	}
}
