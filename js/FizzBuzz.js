$(document).ready(function() {

var i = 1;
var fizz3 = 0;
var buzz5 = 0;
var j = 0;
var report = [];
var integer = prompt("Please enter an integer");

	var FizzBuzz = function(integer) {
		event.preventDefault();
		integer = +integer;
		i = integer;
			if (isNaN(integer)) {
				console.log("This is not an integer!");
			} else {
				while (i < 101 + integer) {
					
					j = i;
					if(i % 3 === 0) {fizz3 = "Fizz"; j=""};
					if(i % 5 === 0) {buzz5 = "Buzz"; j=""};
					
					report.push(j + fizz3 + buzz5);
					
					i++;
					
					j=0;
					fizz3="";
					buzz5="";
				}
				console.log(report);
			}
	}

	$("body").mouseenter(FizzBuzz(integer));

});