/**
 * Created by mattpowell on 7/18/16.
 */

function Todo($scope) {

    $scope.todos = [
        {text: 'Wake Up', done:false},
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
    }
}
