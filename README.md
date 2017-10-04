# NSS Exercise: adopt-my-cats

## Project Description
> "I need a website that allows me to load in the number of cats I currently have available, display them on the screen, then be able to filter them based on whether or not they are considered disabled (have 10 toes or less)."

## Project Requirements Included:
* On page load, I should see an input box and a button.
* The input box should prompt me to enter a number of cats
* The enter key or the button on the page should submit my number of cats
* Use that number to make a call to: `https://random-dogs-api.herokuapp.com/cats/number` (replacing 'number' with the actual number the user entered)
* The cats should be displayed on the page in card-like style
* If the cat has 10 toes or less, their `p` tag that contains their number of toes should have a class of disabled-kitty.
* The input and button originally shown on the page should be hidden and a new button should now appear at the top of the page: 'Get Rid Of The Disabled Ones'
* When the user clicks on the 'Get Rid Of The Disabled Ones' button, any card on the page with the class disabled-kitty should now be hidden

## Technologies Used
* Browserify
* Grunt
* jQuery
* Bootstrap

## Final Product
The purpose of this project was to begin including jQuery into our workflow.
In this project jQuery was mainly used for dom manipulation and also using AJAX for fetching the random-dogs API to get the cat info and cat gifs

## How to Run it
Must have Node installed first
```
$ git clone https://github.com/alexsanchez728/adopt-my-cats.git
$ cd adopt-my-cats/lib/
$ npm install
$ grunt
```
Then, open a seperate tab and do the following:
```
$ cd ../
$ npm install http-server -g
$ http-server -p 8080
```

This will show up in your browser at:
`http://localhost:8080`