function GoalCalc() {
function round2d(n){return(.01* Math.round(100*n));}
	// set variables
	var currGPAnum = 0;
	var currCredTotal = 0;
	var goalGPAnum = 0;
	var newCreditnum = 0;

	// retrieve user input
	currGPAnum = parseFloat(document.GoalGPACalc.currGPA.value);
	cumCredTotal = parseFloat(document.GoalGPACalc.currCredits.value);
	goalGPAnum = parseFloat(document.GoalGPACalc.goalGPA.value);
	newCreditnum = parseFloat(document.GoalGPACalc.newCredits.value);

	// find goal points
	var points1 = 0;
	points1 = goalGPAnum * (cumCredTotal + newCreditnum);

	// Find points needed now
	points1 = points1 - (currGPAnum * cumCredTotal);

	// Calculate needed GPA
	var GPA1 = 0;
	GPA1 = round2d(points1 / newCreditnum);
	
	document.querySelector('.value').innerHTML = ("To reach your goal, your GPA for your next " + eval(newCreditnum) + " credits must be " + eval(GPA1));
	
	document.getElementById("target").innerHTML= ("To reach your goal, your GPA for your next " + eval(newCreditnum) + " credits must be " + eval(GPA1));

	window.alert("To reach your goal, your GPA for your next " + eval(newCreditnum) + " credits must be " + eval(GPA1));

	return 0;
}
