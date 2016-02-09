document.addEventListener("DOMContentLoaded", function() {
	var dataWrapper = document.querySelector('#genreAdd'),
		dataList = document.querySelector('#genreList tbody'),
		button = dataWrapper.querySelector('button');

	function createGenre(data){
		return '<tr><td>'+ data.name +'</td><td>'+ data.description +'</td><td><button class="glyphicon glyphicon-trash btn"></button></td></tr>'
	}

});