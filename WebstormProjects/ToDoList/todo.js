/**
 * Created by mattpowell on 7/18/16.
 */

function Todo($scope) {

    $scope.

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };

        $scope.clearCompleted = function () {
            $scope.todos = _.filter($scope.todos, function (todo) {
                return !todo.done;
            });
        };
}
