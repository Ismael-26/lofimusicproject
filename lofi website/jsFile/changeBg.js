window.addEventListener("load", function () {
	var load_screen = document.getElementById("load_screen");
	document.body.removeChild(load_screen);
	this.document.getElementById("song-title").innerText = songs[x];
});
document.addEventListener("DOMContentLoaded", () =>
	requestAnimationFrame(updateTime)
);
function updateTime() {
	document.documentElement.style.setProperty(
		"--timer-day",
		"'" + moment().format("dd") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-hours",
		"'" + moment().format("k") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-minutes",
		"'" + moment().format("mm") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-seconds",
		"'" + moment().format("ss") + "'"
	);
	requestAnimationFrame(updateTime);
}
//var images=['https://wallpaperaccess.com/full/723262.gif','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a97fd053-8da8-4d01-8ce8-24bc69afce91/dchpshu-570275a8-19eb-459d-98ac-fd0904963f6c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTk3ZmQwNTMtOGRhOC00ZDAxLThjZTgtMjRiYzY5YWZjZTkxXC9kY2hwc2h1LTU3MDI3NWE4LTE5ZWItNDU5ZC05OGFjLWZkMDkwNDk2M2Y2Yy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bWBcJ0wWuXP9viSBMwnf9TdHD8qFLGNPKLaDOtJh-3Y','https://wallpaperaccess.com/full/2641107.gif','https://wallpaperaccess.com/full/849790.gif','https://i.pinimg.com/originals/f1/63/11/f16311fd0c32786525f471c685bc516e.gif','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dduhv5w-039efbec-4bc3-403f-903f-d57667868329.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzgzYzAwNGUtMTM3MC00NzU2LTg4ZTUtNDA3MWRlNzk3MDg4XC9kZHVodjV3LTAzOWVmYmVjLTRiYzMtNDAzZi05MDNmLWQ1NzY2Nzg2ODMyOS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.BOwEv1E6MNLqnobRRHrLnHUSQFAOXcqN7CjOQNpUoCA','https://wallpaperaccess.com/full/2641092.gif','https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711','https://cdnb.artstation.com/p/assets/images/images/015/733/397/original/james-pajunar-sakura-animate.gif?1549425601','https://i.pinimg.com/originals/db/6b/e4/db6be4ae26ddedaa23bb5790507eca15.gif'];
var images = [
	"./picture/lofi_image_1.gif",
	"./picture/lofi_image_2.gif",
	"./picture/lofi_image_3.gif",
	"./picture/lofi_image_4.gif",
	"./picture/lofi_image_5.gif",
	"./picture/lofi_image_6.gif",
	"./picture/lofi_image_7.gif",
	"./picture/lofi_image_8.gif",
	"./picture/lofi_image_9.gif",
	"./picture/lofi_image_10.gif",
];
var songs = [
	"music/a peaceful place. [lofi jazzhop chillhop mix].mp3",
	"music/aesthetic music chill playlist lofi mix.mp3",
	"music/Guitar Vibelofi hiphop mix.mp3",
	"music/japanese night cafe vibes a lofi hip hop mix chill with taiki.mp3",
	"music/Cute Lofi Music [PLAYLIST] For Study, Relax, and Chill.mp3",
	"music/midnight studying. [lofijazzhopchill mix].mp3",
	"music/Just wanna stay here forever lofi hip hop mix.mp3",
	"music/night at the bookstore. [lofi chillhop anime mix].mp3",
	"music/early morning vibeshappy lofi mix ).mp3",
	"music/spring vibes lofi mix aesthetic music chill beats to relaxstudy.mp3",
];
var x = 0;
function shuffle_pic() {
	(min = 0), (max = 9);
	let x = Math.floor(Math.random() * (max - min) + min);
	setTimeout(function () {
		document.body.style.backgroundImage = "url(" + images[x] + ")";
		document.getElementById("audio-player").setAttribute("src", songs[x]);
		//autoplay
		document.getElementById("audio-player").play();
		document.getElementById("btn_play").style.visibility = "hidden";
		document.getElementById("btn_pause").style.visibility = "visible";
		this.document.getElementById("song-title").innerText = songs[x];
	}, 500);
}
function fullscreenModeON() {
	if (
		(document.fullScreenElement && document.fullScreenElement !== null) ||
		(!document.mozFullScreen && !document.webkitIsFullScreen)
	) {
		if (document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(
				Element.ALLOW_KEYBOARD_INPUT
			);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

function song_choice() {
	document.body.style.backgroundImage = "url(" + images[x] + ")";
	document.getElementById("audio-player").setAttribute("src", songs[x]);
	//autoplay
	document.getElementById("audio-player").play();
	document.getElementById("btn_play").style.visibility = "hidden";
	document.getElementById("btn_pause").style.visibility = "visible";
	this.document.getElementById("song-title").innerText = songs[x];
}
function displayNextImage() {
	change_volume();
	change_volume2();
	change_volume3();
	x = x === images.length - 1 ? 0 : x + 1;
	song_choice();
}
function displayPreviousImage() {
	change_volume();
	change_volume2();
	change_volume3();
	x = x <= 0 ? images.length - 1 : x - 1;
	song_choice();
}

function play_music() {
	document.getElementById("btn_play").style.visibility = "hidden";
	document.getElementById("btn_pause").style.visibility = "visible";
	document.getElementById("audio-player").play();
}
function play_pause() {
	document.getElementById("btn_play").style.visibility = "visible";
	document.getElementById("btn_pause").style.visibility = "hidden";
	document.getElementById("audio-player").pause();
}

function play_music_sunny() {
	document.getElementById("btn_play_sunny").style.visibility = "hidden";
	document.getElementById("btn_pause_sunny").style.visibility = "visible";
	document.getElementById("audio-player-elements1").play();
}
function play_pause_sunny() {
	document.getElementById("btn_play_sunny").style.visibility = "visible";
	document.getElementById("btn_pause_sunny").style.visibility = "hidden";
	document.getElementById("audio-player-elements1").pause();
}

function play_music_rainy() {
	document.getElementById("btn_play_rainy").style.visibility = "hidden";
	document.getElementById("btn_pause_rainy").style.visibility = "visible";
	document.getElementById("audio-player-elements2").play();
}
function play_pause_rainy() {
	document.getElementById("btn_play_rainy").style.visibility = "visible";
	document.getElementById("btn_pause_rainy").style.visibility = "hidden";
	document.getElementById("audio-player-elements2").pause();
}
function change_volume() {
	var val = document.getElementById("vol").value; //gets the oninput value
	if (val == "0") {
		val = 0.0;
	} else if (val == "1") {
		val = 0.1;
	} else if (val == "2") {
		val = 0.2;
	} else if (val == "3") {
		val = 0.3;
	} else if (val == "4") {
		val = 0.4;
	} else if (val == "5") {
		val = 0.5;
	} else if (val == "6") {
		val = 0.6;
	} else if (val == "7") {
		val = 0.7;
	} else if (val == "8") {
		val = 0.8;
	} else if (val == "9") {
		val = 0.9;
	} else if (val == "10") {
		val = 1.0;
	}
	document.getElementById("audio-player").volume = val;
}

function change_volume2() {
	var val = document.getElementById("vol2").value; //gets the oninput value
	if (val == "0") {
		val = 0.0;
	} else if (val == "1") {
		val = 0.1;
	} else if (val == "2") {
		val = 0.2;
	} else if (val == "3") {
		val = 0.3;
	} else if (val == "4") {
		val = 0.4;
	} else if (val == "5") {
		val = 0.5;
	} else if (val == "6") {
		val = 0.6;
	} else if (val == "7") {
		val = 0.7;
	} else if (val == "8") {
		val = 0.8;
	} else if (val == "9") {
		val = 0.9;
	} else if (val == "10") {
		val = 1.0;
	}
	document.getElementById("audio-player-elements1").volume = val;
}

function change_volume3() {
	var val = document.getElementById("vol3").value; //gets the oninput value
	if (val == "0") {
		val = 0.0;
	} else if (val == "1") {
		val = 0.1;
	} else if (val == "2") {
		val = 0.2;
	} else if (val == "3") {
		val = 0.3;
	} else if (val == "4") {
		val = 0.4;
	} else if (val == "5") {
		val = 0.5;
	} else if (val == "6") {
		val = 0.6;
	} else if (val == "7") {
		val = 0.7;
	} else if (val == "8") {
		val = 0.8;
	} else if (val == "9") {
		val = 0.9;
	} else if (val == "10") {
		val = 1.0;
	}
	document.getElementById("audio-player-elements2").volume = val;
}
