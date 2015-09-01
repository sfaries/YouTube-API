$(function(){

	$('#search-term').on('click', function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		//console.log('buttong works');
		
	})

//Added Object Notation to the getRequest with params for youTube

	function getRequest(searchTerm){
		var params = {
			part: 'snippet',
			key: 'AIzaSyDRYvKy_kxpo0t9qOEnT6J1_ii4t9XbtwQ',
			q: 'searchTerm'
		};
		url = 'https://www.googleapis.com/youtube/v3/search'

		$.getJSON(url, params, function(data){
			showResults(data);
		});
	}


	function showResults(results){

		/*
		var html = "";
		$.each(results, function(index, value){
			html += '<p>' + value.Title + '</p>';
			console.log(value.Title);
		});
		$('#search-results').html(html);
	*/
	console.log(results);
	}
})
