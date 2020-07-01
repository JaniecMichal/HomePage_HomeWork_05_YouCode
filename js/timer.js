{
	const getDate = () => {

		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();

		setDate(day, month, year);
		getTime(today);
		setTimeout(getDate, 1000);

	};
	const setDate = (day, month, year) => {
		const dateHolder = document.querySelector(".js-dateHolder");
		dateHolder.innerHTML = `${day}/${month}/${year}`
	};

	const getTime = (today) => {

		const hour = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();

		setTime(hour, minutes, seconds);

	};

	const setTime = (hour, minutes, seconds) => {

		const TimerHolder = document.querySelector(".js-timeHolder");

		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

		TimerHolder.innerHTML = `${hour}:${minutes}:${seconds}`;
	}

	window.addEventListener("onload", getDate());

}