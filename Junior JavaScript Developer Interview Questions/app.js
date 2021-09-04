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