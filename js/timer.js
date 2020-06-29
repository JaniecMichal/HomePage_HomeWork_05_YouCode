{
	const TimeAndDate = () => {
		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();

		let hour = today.getHours();
		let minutes = today.getMinutes();
		let seconds = today.getSeconds();
		let TimerHolder = document.querySelector(".mainHeader__timer");

		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

		TimerHolder.innerHTML = day + "/" + month + "/" + year + "|" + hour + ":" + minutes + ":" + seconds;

		setTimeout(TimeAndDate, 1000);
	}
	
	window.addEventListener("onload", TimeAndDate());

}