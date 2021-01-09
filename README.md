# javascript-challenge

Background:
Write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages.

Level1--Automatic table and Data Search:
Create a basic HTML web page or use the index.html file provided.

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

Make sure that a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in the HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input. 
1) From data.js
2) create "buildTable(data)" function
3) create "handleClick()" function to 
	3.1 Grab dateTime, city, state,country, and shape value
	3.2 filter data based on inputDate, inputCity, inputState, inputCountry, inputShape
4) create even listener to listen to click and perform "handleClick" function
5) create default table with all data for initial load


Level2--Multiple search catagories

Complete all of Level 1 criteria.

Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

date/time
city
state
country
shape
