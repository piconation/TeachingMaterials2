/**
 * Created by mattpowell on 7/18/16.
 */

(function () {
    angular.module('app')
        .component('myList', {
            'templateUrl': 'js/components/myList/myList.html',
            controller: myController,
            controllerAs: 'vm'
        });

    function myController(myService) {
        var vm = this;
        vm.removeItem = removeItem;
        vm.addList = addList;
        vm.selectList = selectList;
        vm.$onInit = onInit;

        function addList(newList) {
            myService.add(newList);
            vm.newList = "";
        }

        function removeItem(index) {
            myService.delete(index);
        }

        function onInit() {
            vm.lists = myService.get(); // This sets the lists as the service's lists.
        }
        
        function selectList(list) {
            myService.selectList(list);
        }

    }

})();

