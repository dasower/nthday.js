
/*
Parameters:
index: n’th occurrence of the specified day
	1 - first
	2 - second
	3 - third
	4 - fourth
	5 - fifth
	6 - last
day: daynumber – javascript way where sunday is 0 and is saturday is 6
month: which is 1-12 [optional – defaults to current]
year: Full year – four digits [optional – defaults to current]

var myDay = getNthDayOfMonth(1, 0, 9, '');
console.log("first sunday in September "+myDay);

var myDay = getNthDayOfMonth(2, 0, 9, '');
console.log("second sunday in September "+myDay);

var myDay = getNthDayOfMonth(3, 0, 10, '');
console.log("third sunday in October "+myDay);

var myDay = getNthDayOfMonth(6, 0, 11, '');
console.log("last sunday in November "+myDay);

var myDay = getNthDayOfMonth(6, 0, 12, '');
console.log("last sunday in December "+myDay);

var myDay = getNthDayOfMonth(4, 0, 1, '');
console.log("4th sunday in January?? "+myDay);

var myDay = getNthDayOfMonth(6, 0, 1, '');
console.log("last sunday in January 17 "+myDay);

var myDay = getNthDayOfMonth(6, 0, 1, '2018');
console.log("last sunday in January "+myDay);

*/
function getNthDayOfMonth(index, day, month, year) {
	// Create date object
	var date = new Date();
	// Set to first day of month
	date.setDate(1);
	// If supplied – set the month
	if (month !== '' && month !== undefined) {
		// Set month
		month -=1;
		date.setMonth(month);
	} else {
		month = date.getMonth();
	}
	// If supplied – set the year
	if (year !== '' && year !== undefined) {
		// Set year
		date.setFullYear(year);
	} else {
		year = date.getFullYear();
	}
	// Find daynumber
	firstDay = date.getDay();
	// Find first friday.
	while (date.getDay() != day) {
		date.setDate(date.getDate() + 1);
	}
	switch (index) {
		case 2:
			date.setDate(date.getDate() + 7);
			break;
		case 3:
			date.setDate(date.getDate() + 14);
			break;
		case 4:
			date.setDate(date.getDate() + 21);
			break;
		case 5:
			date.setDate(date.getDate() + 28);
			if (date.getMonth() !== month) {
				date = null;
			}
			break;
		case 6:
			// 6 denotes the last {day} of the month (last sunday)
			month += 1;
			var firstDayOfNextMonth = new Date((month == 12 ? 1 : month + 1) + '/01/' + '/' + (month == 12 ? year + 1 : year));

			//Getting the Last Day of the  given month and year
			var lastDayofThemonth = new Date(firstDayOfNextMonth-1);

			var lastSundayOfTheMonth= new Date();

			for(i=0; i<=7; i++)
			{
				var tempDate = new Date(month + '/' + (lastDayofThemonth.getDate() - i) + '/' + year);

				if(tempDate.getDay() ==0)
				{
				  date = tempDate;
				  break;
				}
			}
			break;
	}
	return date;

} 
