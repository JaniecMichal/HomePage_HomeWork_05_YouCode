{
	const getDate = () => {

		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();

		setDate(day, month, year);

	}
const setDate=(day,month,year)=>{
	const dateHolder = document.querySelector(".js-dateHolder");
	dateHolder.innerHTML = `${day}/${month}/${year}`
}

	const setTime = () => {

		const hour = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();
		const TimerHolder = document.querySelector(".mainHeader__timer");

		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

		TimerHolder.innerHTML = day + "/" + month + "/" + year + "|" + hour + ":" + minutes + ":" + seconds;

		setTimeout(TimeAndDate, 1000);
	}

	window.addEventListener("onload", getDate());

}