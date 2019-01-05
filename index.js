'use strict'; // Enforce use of strict verion of JavaScript

function setTime() {
	// Construct a duration object and convert all time to milliseconds
	// User can set time of up to seconds precision level, and up to hours
	duration = {
		's': parseInt(document.getElementById('s'), 10) * 1000, // Seconds
		'm': parseInt(document.getElementById('m'), 10) * 1000 * 60, // Minutes
		'h': parseInt(document.getElementById('h'), 10) * 1000 * 60 * 60, // Hours
	}
	let totalTime = 0;
	duration.forEach(time => totalTime += duration[time]); // Get the total time by looping through all the keys in object

	setTimeout(() => {
		// Alert the user, perhaps play a sound? To load a sound into the html page first, then play it this JS function
		alert('Time\'s up');
	}, Math.round(totalTime)); // Time for the nearest ms
}

function reset() {
	// Reset the duration inputs
	document.getElementsByClassName('duration').map((val, index, arr) => arr[index].innerHTML = '');
}

const setCurTime = () => (document.getElementById('cur-time').innerHTML = `The current time now is: ${Date.now()}`);

function start() {
	stdPZ().then(stdBreak);
}

const stdPZ = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			alert(`Time's up!`);
			// Display time's up inside the PZ display div
			resolve();
		}, 45 * 60 * 1000); // 45 min timer
	});

const stdBreak = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			alert(`Time's up!`);
			resolve();
		}, 15 * 60 * 1000); // 15 min timer
	});

window.addEventListener('load', () => {
	setCurTime(); // Set current time the moment the page loads
	setInterval(setCurTime, 1000); // Call function to set Current Time every second
	countdown(Date.now() + 10000);
});

function countdown(endTIme) {
	// Every second, minus date.now from it and display the difference in the display
	setInterval(() => show_diff(endTIme - Date.now()), 1000);
};

const log = (dat) => console.log(dat);

function show_diff(diff) {
	if (diff > 0) {
		let s, m, h;
		h = Math.floor(diff / 1000 / 60 / 60); // Round down to nearest integer
		h = (h > 1) ? h : 0;
		
		m = Math.floor(diff / 1000 / 60);
		m = (m > 1) ? m : 0;

		s = Math.floor(diff / 1000);
		s = (s > 1) ? s : 0;

		applyState(s, m, h);
	}
	else {
		document.getElementById('alert').innerHTML = 'Time is up'; // Display alert

		// Stop interval in countdown
	}
}

function applyState(s, m, h) {
	// Function for applying the time values into the elements
	// All the arguements are optional in a sense. The arguements must be passed in the correct order of: seconds, mins, hours.
	let l = arguments.length;
	for (let i = 0; i < l; i++)
		set_time(i, arguments[i])
}

function set_time(type, time) {
	switch (type) {
		case 0: case 's': document.getElementById('sec').innerHTML = time; break;
		case 1: case 'm': document.getElementById('min').innerHTML = time; break;
		case 2: case 'h': document.getElementById('hrs').innerHTML = time; break;
		default: console.log('Error! Invalid arguement passed into set_time function');
	}
}