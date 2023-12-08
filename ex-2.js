//Exercise 2: Valid Palindrome

/*
const isPalindrome = function (s) {
  //Start Coding here
  let sLowerCase = s.toLowerCase().replace(/[\W_]/g,'');
  let sReverse = sLowerCase.split('').reverse().join('');
    return sLowerCase === sReverse
};
*/

const isPalindrome = function(s) {

  s = s.toLowerCase().replace(/[\W_]/g,'');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      if (s[left] !== s[right])  {
          return false
      }
      left++;
      right--;
  }
  return true;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true