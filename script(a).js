//print odd numbers in an array using anonymous function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    var oddNumbers = arr.filter(function(number) {
        return number % 2 !== 0;
    });
    console.log(oddNumbers);
})(numbers);
//iife method
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    var oddNumbers = arr.filter(number => number % 2 !== 0);
    console.log(oddNumbers);
})(numbers);

//convert all the strings to title caps in a string array anonymous method
var strings = ["apple", "banana", "orange", "grape"];

(function(arr) {
    var titleCaseStrings = arr.map(function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
    console.log(titleCaseStrings);
})(strings);
//iife method
var strings = ["apple", "banana", "orange", "grape"];

(function(arr) {
    var titleCaseStrings = arr.map(string => string.charAt(0).toUpperCase() + string.slice(1));
    console.log(titleCaseStrings);
})(strings);

//sum of array in an array using anonymous method
var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

(function(arr) {
    var sumArray = arr.map(function(subArray) {
        return subArray.reduce(function(a, b) {
            return a + b;
        }, 0);
    });
    console.log(sumArray);
})(array);
//iife method
var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

(function(arr) {
    var sumArray = arr.map(subArray => subArray.reduce((a, b) => a + b));
    console.log(sumArray);
})(array);

//print prime numbers using anonymous method
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    var primeNumbers = arr.filter(function(number) {
        return isPrime(number);
    });
    console.log(primeNumbers);
})(numbers);
//iife method
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    var isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const primeNumbers = arr.filter(number => isPrime(number));
    console.log(primeNumbers);
})(numbers);

//palindrome using anonymous method 
var strings = ["radar", "level", "hello", "deified", "world"];

(function(arr) {
    var isPalindrome = function(string) {
        var reversedString = string.split("").reverse().join("");
        return string === reversedString;
    };
    var palindromes = arr.filter(function(string) {
        return isPalindrome(string);
    });
    console.log(palindromes);
})(strings);
//iife method
var strings = ["radar", "level", "hello", "deified", "world"];

(function(arr) {
    var isPalindrome = string => {
        var reversedString = string.split("").reverse().join("");
        return string === reversedString;
    };
    var palindromes = arr.filter(string => isPalindrome(string));
    console.log(palindromes);
})(strings);

//median using anonymous method
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = function(arr1, arr2) {
    var n = arr1.length;
    var middleIdx = Math.floor(n / 2);
    return (arr1[middleIdx] + arr2[middleIdx]) / 2;
};

console.log(median(arr1, arr2));
//iife method
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

(function(arr1, arr2) {
    var n = arr1.length;
    var middleIdx = Math.floor(n / 2);
    console.log((arr1[middleIdx] + arr2[middleIdx]) / 2);
})(arr1, arr2);

//Remove duplicates from an array using anonymous method
var array = [1, 2, 2, 3, 4, 4, 5, 5, 6];

var uniqueArray = function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

console.log(uniqueArray(array));
//iife method
var array = [1, 2, 2, 3, 4, 4, 5, 5, 6];

(function(arr) {
    var uniqueArray = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
})(array);

//Rotate an array by k times using anonymous method
var array = [1, 2, 3, 4, 5];
var k = 3;

var rotateArray = function(arr, k) {
    var n = arr.length;
    var rotations = k % n;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray(array, k));
//iife method
var array = [1, 2, 3, 4, 5];
var k = 3;

(function(arr, k) {
    var n = arr.length;
    var rotations = k % n;
    var rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
})(array, k);