document.addEventListener("DOMContentLoaded", function() {
	var dataWrapper = document.querySelector('#authorAdd'),
		dataList = document.querySelector('#authorList tbody'),
		button = dataWrapper.querySelector('button');

	function createAuthor(data){
		return '<tr><td>'+ data.name +'</td><td>'+ data.country +'</td><td>'+ data.birthday +'</td><td><button class="glyphicon glyphicon-trash btn"></button></td></tr>'
	}

	button.addEventListener('click', function(){
		var author = new database.Author({
			name: dataWrapper.authorName.value,
			country: dataWrapper.authorCountry.value,
			birthday: dataWrapper.authorBirthday.value
		});
		persistence.add(author);
		persistence.flush();
	});

	database.Author
		.all()
		.list(function(data, err){
			if(err){
				console.log(err);
			}else{
				data.forEach(function(author){
					dataList.innerHTML += createAuthor(author);
				});
				[].slice.call(dataList.children).forEach(function(tag, index){
					tag.querySelector('button').addEventListener('click',function(){
						persistence.remove(data[index]);
						persistence.flush(function(){
							tag.parentNode.removeChild(tag);
						});
					})
				})
			}
		})

});