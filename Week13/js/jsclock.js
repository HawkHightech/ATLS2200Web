var twelveHourTime;
twelveHourTime = true;

function clock()
{
	// document.getElementById("year").innerHTML = "2016";

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();
	//console.log(year);

	var month;
	month = today.getMonth();
	//console.log(month);

	var monthOfTheYear;
	monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();
	//console.log(date);

	var day;
	day = today.getDay();
	//console.log(day);

	var dayOfTheWeek;
	dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


	var hour;
	hour = today.getHours();
	//console.log(hour);

	var minute;
	minute = today.getMinutes();
	//console.log(minute);

	var second;
	second = today.getSeconds();
	//console.log(second);


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthOfTheYear[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayOfTheWeek[day];

	
	var hourColor;
	hourColor = Math.round(hour * 11.086);


	if(twelveHourTime == true)
	{


		if(hour >= 12)
		{
			document.getElementById("meridiem").innerHTML = "pm";
		}

		else
		{
			document.getElementById("meridiem").innerHTML = "am";
		}

		if(hour > 12)
		{
			hour = hour - 12;
		}


	}else{
		document.getElementById("meridiem").innerHTML = "mil";
	}

	

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	var minuteColor;
	minuteColor = Math.round(minute * 4.322);

	var secondColor;
	secondColor = Math.round(second * 4.322);

	var pics = [
	"imgs/thanksgiving1.jpg",
	"imgs/thanksgiving2.jpg",
	"imgs/thanksgiving3.jpg",
	"imgs/thanksgiving4.jpg",
	"imgs/thanksgiving5.jpg",
	"imgs/thanksgiving6.jpg",
	"imgs/thanksgiving7.jpg",
	"imgs/thanksgiving8.jpg",
	"imgs/thanksgiving9.jpg",
	"imgs/thanksgiving10.jpg",
	"imgs/thanksgiving11.jpg",
	"imgs/thanksgiving12.jpg",
	"imgs/thanksgiving13.jpg",
	"imgs/thanksgiving14.jpg",
	"imgs/thanksgiving15.jpg",
	"imgs/thanksgiving16.jpg",
	"imgs/thanksgiving17.jpg",
	"imgs/thanksgiving18.jpg",
	"imgs/thanksgiving19.jpg",
	"imgs/thanksgiving20.jpg",
	"imgs/thanksgiving21.jpg",
	"imgs/thanksgiving22.jpg",
	"imgs/thanksgiving23.jpg",
	"imgs/thanksgiving24.jpg",
	"imgs/thanksgiving25.jpg",
	"imgs/thanksgiving26.jpg",
	"imgs/thanksgiving27.jpg",
	"imgs/thanksgiving28.jpg",
	"imgs/thanksgiving29.jpg",
	"imgs/christmas1.jpg",
	"imgs/christmas2.jpg",
	"imgs/christmas3.jpg",
	"imgs/christmas4.jpg",
	"imgs/christmas5.jpg",
	"imgs/christmas6.jpg",
	"imgs/christmas7.jpg",
	"imgs/christmas8.jpg",
	"imgs/christmas9.jpg",
	"imgs/christmas10.jpg",
	"imgs/christmas11.jpg",
	"imgs/christmas12.jpg",
	"imgs/christmas13.jpg",
	"imgs/christmas14.jpg",
	"imgs/christmas15.jpg",
	"imgs/christmas16.jpg",
	"imgs/christmas17.jpg",
	"imgs/christmas18.jpg",
	"imgs/christmas19.jpg",
	"imgs/christmas20.jpg",
	"imgs/christmas21.jpg",
	"imgs/christmas22.jpg",
	"imgs/christmas23.jpg",
	"imgs/christmas24.jpg",
	"imgs/christmas25.jpg",
	"imgs/christmas26.jpg",
	"imgs/christmas27.jpg",
	"imgs/christmas28.jpg",
	"imgs/christmas29.jpg",
	"imgs/christmas30.jpg",
	"imgs/christmas31.jpg"

	];

	if (second == '00')
	{
		document.body.style.backgroundImage = "url(" + pics[0] + ")";
	}

	else if (second == '01')
	{
		document.body.style.backgroundImage = "url(" + pics[1] + ")";
	}

	else if (second == '02')
	{
		document.body.style.backgroundImage = "url(" + pics[2] + ")";
	}

	else if (second == '03')
	{
		document.body.style.backgroundImage = "url(" + pics[3] + ")";
	}

	else if (second == '04')
	{
		document.body.style.backgroundImage = "url(" + pics[4] + ")";
	}

	else if (second == '05')
	{
		document.body.style.backgroundImage = "url(" + pics[5] + ")";
	}

	else if (second == '06')
	{
		document.body.style.backgroundImage = "url(" + pics[6] + ")";
	}

	else if (second == '07')
	{
		document.body.style.backgroundImage = "url(" + pics[7] + ")";
	}

	else if (second == '08')
	{
		document.body.style.backgroundImage = "url(" + pics[8] + ")";
	}

	else if (second == '09')
	{
		document.body.style.backgroundImage = "url(" + pics[9] + ")";
	}

	else
	{
		document.body.style.backgroundImage = "url(" + pics[second] + ")";
	}
}



function toggleTwelve()
{

	if (twelveHourTime == true)
	{
		twelveHourTime = false;
	}

	else
	{
		twelveHourTime = true;
	}
}

clock();
setInterval(clock, 10);



