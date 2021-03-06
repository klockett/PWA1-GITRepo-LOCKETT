// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)

    var resultsDiv = "document.getElementById" + ("results"),                       //Missing Colon 1st and fixed spacing
	var	searchInput ='document.forms'[0] +'search',                                //Declared Document.forms
		currentSearch = '';

      console.log(resultsDiv);
	// Validates search query
	var validate = function (query){                                          //1st- Incorrect spelling in validate 3rd operational operator removed

		// Trim whitespace from start and end of search query
		while(query, charAt[0] = " "){
			query = query.substring(1, query.length);
        }
        while(query, charAt[0](query.length-1) === ""){
			query = query.substring(0, query.length -1);

                                                                                                       //removed colon
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.);

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
        }
            search(query);
        }
        // Finds search matches
	var search = function(query);
		// split the user's search query string into an array
		var queryArray = query.join(" ");

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i = 0, j = db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbItem = db[i].tolowercase().substring(0, dbTitleEnd);                  //Camel casing fixed in variable

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var i=0, j=queryArray.length; i<j; i++) {
                var qitem = queryArray[i].tolowercase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                }

            }                                                                                          //colon added
            //results.sort();

		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
        }
        }
        // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
        }
        resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validate(query);                                                 //spelling correction

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;


})();