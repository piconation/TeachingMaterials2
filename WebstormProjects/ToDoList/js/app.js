/**
 * Created by mattpowell on 7/18/16.
 */

(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('app', ['ngStorage', 'ui.router', 'ngAnimate', 'ngMaterial'/* list imported modules here */])
    
        .config(function($stateProvider, $urlRouterProvider) {
            
            $urlRouterProvider.otherwise('/myList');
            
            $stateProvider
                .state('myList', {
                    url: '/myList',
                    template: '<my-list></my-list>'
                })
                .state('about', {
                    url: '/about',
                    template: '<about></about>'
                })
                .state('listTasks', {
                    url: '/listTasks',
                    template: '<list-tasks></list-tasks>'
                })
        })

})();


