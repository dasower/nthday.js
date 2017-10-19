# nthday.js
Javascript function to figure out the nth day of the month i.e. (last Sunday)  (third Wednesday)

Parameters:<br/>
<b>index</b>: n’th occurrence of the specified day<br/>
  1 - first <br/>
  2 - second <br/>
  3 - third <br/>
  4 - fourth <br/>
  5 - fifth <br/>
  6 - last <br/>
	
<b>day</b>: daynumber – javascript way where sunday is 0 and is saturday is 6 <br/>
 <br/>
<b>month</b>: which is 1-12 [optional – defaults to current month] <br/>

<b>year</b>: Full year – four digits [optional – defaults to current] <br/>
 <br/> <br/>
Example executions :
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

