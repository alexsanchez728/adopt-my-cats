"use strict";

const dom = require("./dom.js");

let catz = [];


// when events.js says to, get number of cats
const numberOfCatz = (value) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${value}`).done((cats) => {
		catz = cats.cats;
		
		console.log("cats in catz", catz);

		dom.createDomString(catz);

	}).fail((error) => {
		console.log(error);
	});
};

const getCatz = () => {
	return catz;
};

module.exports = {numberOfCatz, getCatz};
// send cat info out to dom.js