"use strict";

const dom = require("./dom.js");

let catz = [];

const numberOfCatz = (value) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${value}`).done((cats) => {
		catz = cats.cats;
		
		dom.createDomString(catz);

	}).fail((error) => {
		console.log(error);
	});
};

const getCatz = () => {
	return catz;
};

module.exports = {numberOfCatz, getCatz};