function getDifferenceInYears(a, b) {
	let days = parseInt((a - b) / (1000 * 60 * 60 * 24), 10);
	return Math.floor(days / 365);
}

function computeAge() {
	let a = new Date();
	let b = new Date("3/28/1997");

	let difference = getDifferenceInYears(a, b);
	document.getElementById("age").innerHTML = difference;
}

function computeYear() {
	let year = new Date().getFullYear();
	document.getElementById("year").innerHTML = `Copyright © ${year}`;
}

computeAge();
computeYear();
