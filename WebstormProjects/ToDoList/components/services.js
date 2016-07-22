/**
 * Created by mattpowell on 7/22/16.
 */

self.clear = function (todo) {
    var compItems = [];
    for (var i = 0; i < list.detail.length; i ++) {
        if (list.detail[i].done === true){
            compItems.push(list.detail[i]);
            list.detail.splice(i,1);
        }
    }
    for(var i = 0; i < compItems.length; i++){
        index = list.detail.indexOf(compItems[i]);
            list.detail.splice(index, 1);
    }
};
