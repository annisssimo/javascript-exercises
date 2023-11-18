const removeFromArray = function(array, ...elementsToDelete) {
    const newArray = [];
    array.forEach ((element) => {
        if(!elementsToDelete.includes(element)) {
            newArray.push(element);
        }
    });
        
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
