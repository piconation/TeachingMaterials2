/**
 * Created by mattpowell on 8/19/16.
 */

(function () {
    angular.module('app')
        .component('about', {
            templateUrl: 'js/components/about/about.html',
            controller: myController,
            controllerAs: 'vm'       
        });
    
    function myController() {
        
    }
    
})();