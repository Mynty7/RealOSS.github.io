function startTimer(xMin, xSec, message){
	let timeOut = setInterval(() => {

		let showMin = xMin;
		if (showMin < 10) { showMin = "0"+showMin }
		let showSec = xSec;
		if (showSec < 10) { showSec = "0"+showSec }
		document.getElementById("rtdisp").innerText = "Time: " + showMin + ":" + showSec;



		if(xSec == 0 && xMin > 0){
			xMin -= 1;
			xSec = 60;
		}else if(xSec == 0 && xMin == 0){
			document.getElementById("rtdisp").innerText = message;
			//alert(message);
			clearInterval(timeOut);
		}
		xSec -= 1;

	}, (1000));
}

function swbut(a, b){
	document.getElementById(a).style.display = "inline-block";
	document.getElementById(b).style.display = "none";
}
//startTimer(0, 5, "Time for a break!")
