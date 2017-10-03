"use strict";

const cats = require("./catz.js");

// on the click of the search button or
// ... on enter while focused on the input box
$("#input").focus();

$("#input").keyup((event) => {
	if (event.key === "Enter") {
		sendNumberOfCatz();
		hideInput();
  }
});

$("#inputBtn").click(() => {
	sendNumberOfCatz();
	hideInput();
});

$("#disabled").click(() => {
	hideSadCatz();
});


const sendNumberOfCatz = () => {
	// get the input number request and save that array of cat data	
	//send it to the ajax call
  cats.numberOfCatz($("#input").val());
};
	// hide the input and search buttons
const hideInput = () => {
	$("#input").addClass("hidden");
	$("#inputBtn").addClass("hidden");
	$("#disabled").removeClass("hidden");
	// replace them with one "Get Rid Of The Disabeld Ones"
		// any card that has a p tag with the class disabled-kitty should be hidden
};

const hideSadCatz = () => {
	$(".disabled-cat").parent().parent().addClass("hidden");
};

module.exports = {};