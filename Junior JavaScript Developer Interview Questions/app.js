// Palindrome problem: Create a program that tells user if a word is a palindrome or not.

function isPalindrome(given) {
    let given_lower = given.toLowerCase();
    let array = given_lower.split('');
    let array_reverse = array.reverse();
    reverse = array_reverse.join('');
    console.log(reverse);
    console.log(given_lower === given_lower.split('').reverse().join(''))
    return given_lower === reverse;
    // for (var i = 0; i < array.length; i++) {
    //     if(array[i] !== array_reverse[i]) {
    //         return false;
    //     ;} else {
    //         return true;
    // }
    // }
    // if (given_lower_array === given_lower_array_reverse) {
    //     return palindrome = true;
    // } else {
    //     return palindrome = false;
    // }
};

console.log(isPalindrome("mAlayalam"));


// Fibonacci problem: A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. For example, the first ten numbers of the Fibonacci sequence are: 0,1,1,2,3,5,8,13,21,34.
// The Fibonacci challenege usually goes like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

// function fibEntry(n) {
//     let sequence = [0,1];
//     // console.log(sequence);
//     // let lastNum = sequence.slice(-1);
//     // let secondLastNum = sequence.slice(-2);
//     // console.log(lastNum + secondLastNum);
//     for(let i = 2; i <= n; i++) {
//         const prevNum1 = sequence[i - 1];
//         const prevNum2 = sequence[i - 2];
//         sequence.push(prevNum1 + prevNum2);
//     }
//     console.log(sequence[n]);
// };

// fibEntry(6);

function fibEntry(n) {
    let prev = 0;
    let curr = 1;
    let index = 2;

    while (index !== n) {
        [prev, curr] = [curr, prev + curr];
        index++;
    }
    return curr;
};

console.log(fibEntry(6));
