// step 1//

function fauncOne(argu1, argu2) {
    return argu1 + argu2
}
function funcTwo(argu1, argu2) {
    return argu1 * argu2
}
function funcThree(argu1, argu2, callback) {
    return callback(argu1, argu2)
}
console.log(funcThree(4, 8, fauncOne));
console.log(funcThree(2, 3, funcTwo));


// step 2//

var orginalArr = []
var divisibleByThreeOrFive = [];
var notDivisibleByThreeOrFive = [];

function threeCallback(index) {
    console.log(index + " is divisible by Three");
}


function fiveCallback(index) {
    console.log(index + " is divisible by Five")
}


function result(startIndex, stopIndex, threeCallback, fiveCallback) {

    for (i = startIndex; i <= stopIndex; i++) {

        if (i % 3 === 0) {
            threeCallback(i);
            orginalArr.push(i);
            divisibleByThreeOrFive.push(i);
        }
        else if (i % 5 === 0) {
            fiveCallback(i);
            orginalArr.push(i);
            divisibleByThreeOrFive.push(i);


        }
        else if (i % 3 === 0 && i % 5 === 0) {
            fiveCallback(i);
            threeCallback(i);
            orginalArr.push(i);
            divisibleByThreeOrFive.push(i);

        }
        else if (i % 3 !== 0 && i % 5 !== 0) {
            notDivisibleByThreeOrFive.push(i);
            orginalArr.push(i);
            console.log(i + " is not divisible by Three or Five")

        }
    }

}
result(14, 22, threeCallback, fiveCallback);
console.log(orginalArr);
console.log(divisibleByThreeOrFive);
console.log(notDivisibleByThreeOrFive);

// step 3//
// 3.1 A for loop.

function repeatStringNumTimes(str, num) {
    // repeat after me
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(str);
    }
    str = arr.join("");
    return str;
}
repeatStringNumTimes("abc", 3);

// 3.2 A while loop.
function repeatStringNumTimes(str, num) {
    var repeatedString = "";
    while (num > 0) {
        repeatedString += str;
        num--;
    }
    return repeatedString;
}
repeatStringNumTimes("abc", 3);

// 3.3 A do loop.

function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num < 0) {
        return "";
    }

    var newStr = "";
    var i = 0;
    do {
        newStr += str;
        i++;
    }
    while (i < num);
    return newStr;

}
repeatStringNumTimes("abc", 3);


// step 4//


var MotorBike = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;


};


// step 5//

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code

multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);

// step 6//

var arr2d = [[1, 2], [3, 4], [5, 6]];

for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
        console.log(arr2d[[i][j]]);
    }

}


// step 7//


// we declare a variable x
let x = 9;
// declare a function f1 with val as a parameter
function f1(val) {
    //   we wrote the code here and made and adding 1 to val and return it 
    val = val + 1;
    return val;
}
// call the function and print x 
f1(x);
console.log(x); //9

// we declare a variable y which is an object
let y = { x: 9 };
// declare a function f2 with val as a parameter
function f2(val) {
    //   we wrote the code here and made adding 1 to the value of x and return it  
    val.x = val.x + 1;
    return val;
}
// call the function and print y
f2(y);
console.log(y); // x: 10
