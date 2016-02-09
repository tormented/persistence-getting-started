document.addEventListener("DOMContentLoaded", function() {
	var dataWrapper = document.querySelector('#bookAdd'),
		dataList = document.querySelector('#bookList tbody'),
		button = dataWrapper.querySelector('button')


	function createBook(data){
		return '<tr><td>'+ data.name +'</td><td>'+ data.description +'</td><td>'+ data.pages +'</td><td>'+ data.publish_year +'</td><td>'+ data.genre.name +'</td><td><button class=" btn btn-link">Edit</button></td><td><button class="glyphicon glyphicon-trash btn btn-default"></button></td></tr>'
	}

});