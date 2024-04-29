//Print the odd numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers);

//convert all the strings title caps in a string array
var strings = ["apple", "banana", "orange", "grape"];

const titleCaseStrings = strings.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

console.log(titleCaseStrings);

//sum of all numbers in an array
var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var sumArray = array.map(subArray => subArray.reduce((a, b) => a + b));

console.log(sumArray);

//return all primenumbers in an array
var numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

var isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);

//return all palindrome in array
var strings = ["radar", "level", "hello", "deified", "world"];

var isPalindrome = string => {
    var reversedString = string.split("").reverse().join("");
    return string === reversedString;
};

var palindromes = strings.filter(isPalindrome);

console.log(palindromes);