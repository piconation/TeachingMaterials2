/**
 * Created by mattpowell on 7/18/16.
 */

(function () {
    angular.module("app")
        .component("myList2", {
            'templateUrl': 'components/myList.html',
            controller: myController,
            controllerAs: 'vm'
        });

    function myController(){
        var vm = this;
        console.log(vm.newList);
        vm.addList = function () {
            console.log(vm.newList)
        }
    }





})();

