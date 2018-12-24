'use strict'; // Enforce use of strict verion of JavaScript

function onClick() {
	// Construct a duration object and convert all time to milliseconds
	duration = {
		's': parseInt(document.getElementById('s'), 10) * 1000, // Seconds
		'm': parseInt(document.getElementById('m'), 10) * 1000 * 60, // Minutes
		'h': parseInt(document.getElementById('h'), 10) * 1000 * 60 * 60, // Hours
		'd': parseInt(document.getElementById('d'), 10) * 1000 * 60 * 60 * 24, // Days?
	}
	let totalTime = 0;
	duration.forEach(element => totalTime += element); // Get the total time by looping through all the keys in object

	setTimeout(() => {
		alert('Time\'s up');
	}, time);
}

function resetBtn() {
	// Reset the duration inputs
	document.getElementsByClassName('duration').map((val, index, arr) => arr[index].innerHTML = '');
}