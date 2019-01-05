'use strict'; // Enforce use of strict verion of JavaScript

// Utility functions
const log = (dat) => console.log(dat);

function setTime() {
	// Construct a duration object and convert all time to milliseconds
	// User can set time of up to seconds precision level, and up to 59 mins and 59 seconds
	duration = {
		's': parseInt(document.getElementById('s'), 10) * 1000, // Seconds
		'm': parseInt(document.getElementById('m'), 10) * 1000 * 60, // Minutes
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

async function start_std_pz() {
	new_timer()
	await stdPZ();
	await stdBreak();
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

// The count down does not start immediately due to the wait. So do smth similiar to window load call.
const countdown = (endTIme) => {
	show_diff(endTIme - Date.now());
	setInterval(() => show_diff(endTIme - Date.now()), 1000)
};


function new_timer(pz) {
	let table = document.getElementById('PZ-table');
	let row = table.insertRow();
	row.insertCell().innerHTML = pz.id;
	row.insertCell().innerHTML = pz.mins;
	row.insertCell().innerHTML = pz.seconds;
	row.insertCell().innerHTML = pz.state;
}

function del_timer() {
	document.getElementById('PZ-table').deleteRow(); // Deletes last row
	document.getElementById('PZ-table').deleteRow(0); // Deletes first row
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

function countDown(duration) {
	let interval, diff, minutes, seconds, start = Date.now();
	function timer() {
		// get the number of seconds that have elapsed since countDown() was called
		diff = duration - (((Date.now() - start) / 1000) | 0);

		// does the same job as parseInt truncates the float
		minutes = (diff / 60) | 0;
		seconds = (diff % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		set_time('s', seconds);
		set_time('m', minutes);

		if (diff <= 0) {
			// Why is the below code there?? It does not make any sense...
			// start = Date.now() + 1000; // add one second so that the count down starts at the full duration, e.g. 05:00 not 04:59

			document.getElementById('status').innerHTML = 'Time is up'; // Display alert
			clearInterval(interval); // Stop running the interval code by clearing it.
		}
	};
	timer(); // we don't want to wait a full second before the timer starts, thus the initial call to it.
	interval = setInterval(timer, 1000);
}

window.addEventListener('load', () => {
	setCurTime(); // Set current time the moment the page loads
	setInterval(setCurTime, 1000); // Call function to set Current Time every second
	// countdown(Date.now() + 10000);
	// countdown(Date.now() + 4000);
	countDown(60 * 5);
});