$(document).ready(function(){

var p = 2244.265; //principal
var a = 500000; //goal
var n, //number of days left
	e, //number of days elapsed
	c, //current bpi
	goalRate,
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
	return n;
}

function getDaysElapsed(){
	e = dayDiff(tDate, today);
	$("#daysElapsed").val(e);
	return e;
}

function getCurrBpi(){
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json"; 
	$.getJSON(url)
	.done(function ( json ) {
		setCurrentBpi(json.bpi.USD.rate_float);
		getGoalRate();
		getCurrRate();
		getPercDiff();
		getParPrice();
	}).fail(function (jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
	return c;
}

function setCurrentBpi(v){
	c = Math.round(v *100)/100;
	$("#currBpi").text("$" + c);
}

//goalRate = LOG10(a/c)/(n/365)
function getGoalRate(){
	goalRate = Math.log10(a/c)/(n/365);
	$("#goalRate").val(goalRate);
	return goalRate;
}

//currRate = LOG10(c-p)/(e/365)
function getCurrRate(){
	currRate = Math.log10(c/p)/(e/365);
	$("#currRate").val(currRate);
	return currRate;
}

//percDiff = ((currRate-goalRate)/goalRate)*100
function getPercDiff(){
	percDiff = ((currRate-goalRate)/goalRate)*100;
	var badgeStr;
	var dickMenuStr;
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
	}
	$("#percDiff").addClass(badgeStr);
	$("#isDickOnTheMenu").text(dickMenuStr);
	return percDiff;
}

//parPrice = 10^(goalRate * (e/365)) * p
function getParPrice(){
	parPrice = Math.pow(10, goalRate * (e/365)) * p;
	$("#parPrice").text("$" + Math.round(parPrice*100)/100);
	return parPrice;
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
