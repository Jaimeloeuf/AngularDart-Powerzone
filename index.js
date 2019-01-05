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
	setCurTime(); // Set current time the moment the page loads
	setInterval(setCurTime, 1000); // Call function to set Current Time every second
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

window.addEventListener('load', start);