/**
 * Created by mattpowell on 7/20/16.
 */

(function () {
    angular.module('app')
        .component('listTasks', {
            'templateUrl': 'js/components/listTasks/listTasks.html',
            controller: myController,
            controllerAs: 'vm'
        });

    function myController(myService) {
        vm = this;
        vm.myList = {};
        vm.$onInit = onInit;
        vm.addTask = addTask;
        vm.deleteTask = deleteTask;

        function onInit() {
            vm.myList = myService.getSelectedList();

        }

        function addTask(newTask) {
            myService.add(vm.myList, newTask);
            vm.newTask = "";
        }

        function deleteTask (index) {
            myService.delete(index, vm.myList);
        }

    }
})();
