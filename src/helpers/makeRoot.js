import {omit} from 'lodash';

function makeRoot(arr) {
    const root = {
        id: 'root-id',
        rules: []
      },
    mappedArr = {}

    for(let i = 0 ; i < arr.length; i++) {   
        const arrElem = arr[i]; 
        mappedArr[arrElem.id] = arrElem;
    }

    for (var id in mappedArr) { 
        const mappedElem = mappedArr[id];    
        if ( mappedElem.parentId === root.id) {
            root.rules.push(omit(mappedElem, ['parentId', '__v', '_id']));    
        } else {      
            if (mappedArr[mappedElem.parentId]){
                mappedArr[mappedElem.parentId].rules.push(omit(mappedElem, ['parentId', '__v', '_id']));
            }
        } 
    }
    return root;
}

export default makeRoot