"use strict";

const cats = require("./catz.js");

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
  cats.numberOfCatz($("#input").val());
};

const hideInput = () => {
	$("#input, #inputBtn").addClass("hidden");
	$("#disabled").removeClass("hidden");
};

const hideSadCatz = () => {
	$(".disabled-cat").parent().parent().addClass("hidden");
};

module.exports = {};