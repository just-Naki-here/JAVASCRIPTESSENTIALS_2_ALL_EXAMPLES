let deepClone = function(obj) {
    let newObj = {...obj};
    for(property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}