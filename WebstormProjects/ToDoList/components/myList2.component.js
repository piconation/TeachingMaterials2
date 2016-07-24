/**
 * Created by mattpowell on 7/18/16.
 */

function Todo(myServ) {
    var self = this;

    self.todos = [
        {text: "Add To Do's To My List", done: false}
    ];

    self.getTotalTodos = function () {
        return myServ.todos.length;
    };

    self.addTodo = function () {
        myServ.todos.push({text: myServ.formTodoText, done:false});
        myServ.formTodoText = '';
    };

    //every function added here needs to be added as a self.xxx on the services page (which just pushes a new list) and then displayed with ng-repeat on the myList Html.

    self.clearCompleted = function () {
        myServ.todos = _.filter(myServ.todos, function (todo) {
            return !todo.done;
        });
    };
}