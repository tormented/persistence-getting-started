document.addEventListener("DOMContentLoaded", function() {
	var dataWrapper = document.querySelector('#bookAdd'),
		dataList = document.querySelector('#bookList tbody'),
		button = dataWrapper.querySelector('button'),
		author = {};

	button.addEventListener('click', function(){
		var book = new database.Book({
			name: dataWrapper.bookName.value,
			description: dataWrapper.bookDescription.value,
			pages: dataWrapper.bookPages.value,
			publish_year: dataWrapper.bookPublishYear.value
		});
		book.authors.add(author);
		author.books.add(book);
		console.log(book);
		persistence.add(book);
		persistence.flush();
	});

	function createBook(data){
		return '<tr><td>'+ data.name +'</td><td>'+ data.description +'</td><td>'+ data.pages +'</td><td>'+ data.publish_year +'</td><td>'+ data.author.name +'</td><td><button class=" btn btn-link">Edit</button></td><td><button class="glyphicon glyphicon-trash btn btn-default"></button></td></tr>'
	}
	database.Book
		.all()
		.prefetch('author')
		.list(function(data, err){
			if(err){
				console.log(err);
			}else{
				data.forEach(function(author){
					dataList.innerHTML += createBook(author);
				});
				[].slice.call(dataList.children).forEach(function(tag, index){
					tag.querySelectorAll('button')[1].addEventListener('click',function(){
						persistence.remove(data[index]);
						persistence.flush(function(){
							tag.parentNode.removeChild(tag);
						});
					})
				})
			}
		});

	database.Author
		.all()
		.list(function(data, err){
			var authors = document.getElementById('bookAuthors');
			data.forEach(function(author){
				authors.innerHTML += '<div class="radio"><label><input type="radio" name="optionsRadios" id="'+ author.id +'" value="option1" checked>'+ author.name +'</label></div>'
			});
			[].slice.call(authors.children).forEach(function(item, index){
				item.addEventListener('click',function(){
					author = data[index];
				});
			})
		});

});