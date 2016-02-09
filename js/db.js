(function(){
	"use strict";
	persistence.store.websql.config(persistence,
		'Library',
		'my test library',
		5 * 1024 * 1024);
	var database = {};

	database.Author = persistence.define('Author',{
		name: 'TEXT',
		country: 'TEXT',
		birthday: 'DATE'
	});

	database.Book = persistence.define('Book', {
		name: 'TEXT',
		description: 'TEXT',
		pages: 'INT',
		publish_year: 'DATE'
	});

	database.Author.hasMany('books', database.Book, 'authors');
	database.Book.hasMany('authors', database.Author, 'books');

	persistence.schemaSync();

	window.database = database;
})();