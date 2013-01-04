define(
		[
		 'underscore',
		 'backbone'
		 ],
		 function(_, Backbone){

				var TodoModel = Backbone.Model.extend({
					// Default attributes for the todo.
					defaults: {
					// Ensure that each todo created has `content`.
					content: "empty todo...",
					done: false
					},
					initialize: function() {
					},
					// Toggle the `done` state of this todo item.
					toggle: function() {
					this.save({done: !this.get("done")});
					},
					// Remove this Todo from *localStorage* and delete its view.
					clear: function() {
					this.destroy();
					this.view.remove();
					}
				});
				
				return TodoModel;
		}
);