(function () {
    angular.module('app')
        .service('myService', function ($localStorage) {
            
            var lists;
            
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
                    console.log(newList);
                    lists.push({name: newList, tasks: []});
                    console.log(lists);
                }
                    
                else{
                    
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
        })
})();
