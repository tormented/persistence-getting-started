document.addEventListener("DOMContentLoaded", function() {
	var dataWrapper = document.querySelector('#authorAdd'),
		dataList = document.querySelector('#authorList tbody'),
		button = dataWrapper.querySelector('button');

	function createAuthor(data){
		return '<tr><td>'+ data.name +'</td><td>'+ data.country +'</td><td>'+ data.birthday +'</td><td><button class="glyphicon glyphicon-trash btn"></button></td></tr>'
	}

});