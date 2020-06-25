function countDown() {
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();


	let hour = today.getHours();
	if (hour < 10) hour = "0" + hour;
	let minutes = today.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;
	let seconds = today.getSeconds();
	if (seconds < 10) seconds = "0" + seconds;

	document.getElementById("timer").innerHTML = day + "/" + month + "/" + year + "|" + hour + ":" + minutes + ":" + seconds;

	setTimeout("countDown()", 1000);
}
window.addEventListener("click", countDown());