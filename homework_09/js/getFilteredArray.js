function getFilteredArray(MyArr, func) {
    let myArray = [];
    forEach(MyArr, elem=>{
        if(func(elem)){
            myArray.push(elem);
        }
    });
    return myArray;
}