"use strict";

// const cats = require("./catz.js");

const createDomString = (allTheCats) => {
		console.log("i recieved the catz in dom", allTheCats);

	let catString = "";
	for(var i=0; i<allTheCats.length; i++){
    var newCat = "";

		newCat+=    `<div class="cat-card col-sm-4">`;
		newCat+=  		`<div class="image-container">`;
		newCat+=   			`<img src="${allTheCats[i].imageUrl}">`;
		newCat+=  		`</div>`;
		newCat+=  		`<div class="description-container">`;
		newCat+=    		`<h3> ${allTheCats[i].name} </h3>`;
		newCat+=    		`<p> Color: ${allTheCats[i].color} </p>`;
		newCat+=    		`<p> Skills: ${allTheCats[i].specialSkill} </p>`;
		if (allTheCats[i].numberOfToes < 10) {
			newCat+=    	`<p class="disabled-cat"> Toes: ${allTheCats[i].numberOfToes} </p>`;
		} else {
			newCat+=			`<p> Toes: ${allTheCats[i].numberOfToes} </p>`;
		}
		newCat+=  		`</div>`;
		newCat+=		`</div>`;
    catString += newCat;
	}
	printToDom(catString);
};

const printToDom = (string) => {
	$("#catHolder").html(string);
};

module.exports = {createDomString};