// An example Backbone application contibuted by
//  http://jgn.me


//Load the application once the DOM is ready, using 'JQuery.ready'
$(function(){
	
	//Todo model
	window.Todo = Backbone.Model.extend({
		idAttribute: "_id",
		
		//Default attributes for a todo item.
		defaults: function({
			return{
				done: false,
				order: Todos.nextOrder()
			};
		}),
		
		//Toggle the 'done' state of this todo item
		toggle: function(){
			this.save({done = !this.get('done') });
		}
	});
	
	// Todo Collection
	// The collection of todos used to be backed by *localStorage* instead of a remote
	// server, but now uses our /api/todos backend for persistance.
	window.TodoList = Backbone.Model.extend({		
		model: Todo,
		url:   '/api/todos',
		
		// Filter down the list of all todo items that are finished.
		done:  function(){
			return this.filter({
				function(todo){
					return todo.get('done');
				};
			});
		},
		
		// Filter down the list to only todo items that are still NOT FINISHED.
		remaining: function(){
			return this.without.apply(this, this.done());	
		},
		
		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database.   This generates the next order number for new items.
		nextOrder: function(){
			if (!this.length)
				return 1;
			
			return this.last().get('order')+1;
		},
		
		comparator: function(todo){
			return todo.get('order');
		}
		
	});
	
	// Create our global collection of **Todos**.
	window.Todos = new TodoList;
	
	
	// Todo item view
	window.TodoView = Backbone.View.extend({
		// ... is a list tag.
		tagName: "li",
		// Cache the template function for a single item
		template: _.template( $('#item-template').html() ),
		
		// The DOM events specific to an item.
		events:{
			"click .check"					: "toggleDone",
			"dblclick div.todo-text"		: "edit",
			"click span.todo-destroy"		: "clear",
			"keypress .todo-input"			: "updateOnEnter"
		}
	});
});
