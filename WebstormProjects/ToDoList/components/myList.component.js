/**
 * Created by mattpowell on 7/18/16.
 */

(function () {
    angular.module('myApp');

        function todo(myServ) {
            var self = this;
            self.selectedObject = undefined;
            self.listInput = undefined;

            self.getTotalTodos = function () {
                return myServ.todos.length;
            };

            self.addTodo = function () {
                myServ.todos.push({text: myServ.formTodoText, done: false});
                myServ.formTodoText = '';
            };

            //every function added here needs to be added as a self.xxx on the services page (which just pushes a new list) and then displayed with ng-repeat on the myList Html.

            myServ.clearCompleted = function () {
                myServ.todos = _.filter(myServ.todos, function (todo) {
                    return todo.done;
                });
            };

            myServ.todos = [
                {text: 'Learn AngularJS', done: false},
                {text: 'Build an app', done: false}
            ];



        self.clear = function (todo) {
            
        }
})();