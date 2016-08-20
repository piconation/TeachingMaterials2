(function () {
    angular.module('app')
        .service('myService', function ($localStorage, $mdToast) {
            
            var lists;
            var selectedList;

            if($localStorage.lists){
                lists = $localStorage.lists;
            }
            
            else{
                lists = [
                    {
                        name: 'list 1', 
                        tasks: []
                    },
                    {
                        name: 'list 2',
                        tasks: []
                    },
                    {
                        name: 'list 3',
                        tasks: []
                    },
                    {
                        name: 'list 4',
                        tasks: []
                    }
                ];
                
                $localStorage.lists = lists;
            }
            
            this.add = function (newList, newTask) {
                
                if(!newTask) {
                    lists.push({name: newList, tasks: [], done: false});
                    showToast(newList);
                }
                else{
                    newList.tasks.push({name : newTask});
                    showToast(newTask);
                }
            };
            
            this.delete = function (index, parent) {
              if (!parent) {
                  lists.splice(index, 1);
              }
                else {
                  parent.tasks.splice(index,1);
              }
            };
            
            this.get = function () {
                return lists;
            };

            this.selectList = function (list) {
                if(list) {
                    selectedList = list;
                }
            };
            
            this.getSelectedList = function () {
              return selectedList;  
            };

            function showToast(item) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(item + ' added!')
                        .position('bottom left')
                        .hideDelay(4000)
                );
            }
        })
})();
