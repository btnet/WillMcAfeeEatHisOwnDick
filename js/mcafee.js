$(document).ready(function(){

var p = 2244.265; //principal
//var a = 500000; //goal
var a = 1000000; // new goal
//var g = 0.7826319559;//goal rate : LOG10(500000/2244.265)/(3)
var g = 0.88297529; //new goal rate : LOG10(100000/2224.256)/(3)
var n, //number of days left
	e, //number of days elapsed
	c, //current bpi
	adjGoalRate,
	currRate,
	percDiff,
	parPrice;

var today = new Date(); //today
var eDate = new Date("7/17/20"); //end date of bet
var tDate = new Date("7/17/17"); //date of bet tweet

function init(){
	getDaysLeft();
	getDaysElapsed();
	getCurrBpi();
}
init();

function getDaysLeft(){
	n = dayDiff(today, eDate);
	var dayStr = " days";
	if (n < 1){
		n = 0;
		dayStr = " day";
	}
	$("#daysLeft").text(n + dayStr);
	console.log("Number of Days Left: " + n);
}

function getDaysElapsed(){
	e = dayDiff(tDate, today);
	$("#daysElapsed").val(e);
	console.log("Number of Days Elapsed: " + e);
}

function getCurrBpi(){
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json"; 
	$.getJSON(url)
	.done(function ( json ) {
		setCurrentBpi(json.bpi.USD.rate_float);
		getCurrRate();
		dspGoalRate();
		getParPrice();
		getPercDiff();
	}).fail(function (jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
}

function setCurrentBpi(v){
	c = Math.round(v *100)/100;
	$("#currBpi").text("$" + c);
	console.log("Current Bpi: " + c);
}

//adjGoalRate = LOG10(a/c)/(n/365)
//maybe used in the future
function getAdjGoalRate(){
	adjGoalRate = Math.log10(a/c)/(n/365);
	console.log("Adjusted Goal Rate: " + adjGoalRate);
}

//g = LOG10(a/p)/(3)
function dspGoalRate(){
	//$("#goalRate").val(g);
	console.log("Goal Rate: " + g);
}

//currRate = LOG10(c-p)/(e/365)
function getCurrRate(){
	currRate = Math.log10(c/p)/(e/365);
	$("#currRate").val(currRate);
	console.log("Current Rate: " + currRate);
}

//percDiff = ((currBpi-parPrice)/parPrice)*100
function getPercDiff(){
	percDiff = ((c-parPrice)/parPrice)*100;
	var badgeStr;
	var dickMenuStr;
	var aheadOrBelowStr = "ahead of";
	parPriceHtml = '$' + Math.round(parPrice*100)/100 + '</span>';
	var droppedOrIncreasedStr = 'If the price dropped to <span class="badge badge-danger">' + parPriceHtml + ' it would still be'; 
	$("#percDiff").text(Math.round(percDiff*100)/100 + "%");
	if (percDiff > 0 && percDiff < 10){
		badgeStr = "badge-warning";
		dickMenuStr = "Maybe?";
	}
	else if (percDiff > 10){
		badgeStr = "badge-success";
		dickMenuStr = "No!";
	} else {
		badgeStr = "badge-danger";
		dickMenuStr = "Yes!";
		aheadOrBelowStr = "below";
		droppedOrIncreasedStr = 'The price needs to increase to <span class="badge badge-success">' + parPriceHtml + ' to be';
	}
	$("#percDiff").addClass(badgeStr);currBpi
	$("#currBpi").addClass(badgeStr);
	$("#isDickOnTheMenu").text(dickMenuStr);
	$("#aheadOrBelow").text(aheadOrBelowStr);
	$("#droppedOrIncreased").html(droppedOrIncreasedStr);
	return percDiff;
}

//parPrice = 10^(g * (e/365)) * p
function getParPrice(){
	parPrice = Math.pow(10, g * (e/365)) * p;
	$("#parPrice").text("$" + Math.round(parPrice*100)/100);
	console.log("Par price: " + parPrice);
}

//Returns the base log
function getBaseLog(x ,y){
	return Math.log(y) / Math.log(x);
}

//Returns difference between two dates
function dayDiff(first, second) {
	return Math.round((second-first)/(1000*60*60*24));
}

});
