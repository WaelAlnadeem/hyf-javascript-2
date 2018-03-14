let addSix = function createBase(num) {
    return num + 6;
};
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27



// Bonus
// without a function
var arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function uniqueArray(array) {
    var result = Array.from(new Set(arr));

    return result;

}
console.log(uniqueArray(arr))
