## Algorithms

```javascript
function convertCtoF(celsius) {
  let fahrenheit = celsius*(9/5) +32;
  return fahrenheit;
}

convertCtoF(30);
```
Conversion of celcius  to fahrenheit.

```javascript
// function reverseString(str) {
//   let arr = [];
//   for(let  i = str.lenght - 1; i >= 0 ;i--){
//     arr.push(str[i]);
//   }
//   return arr.join("");
// }

// reverseString("hello");
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```
Learned new logic for reversing a string

```javascript
function factorialize(num) {
  let fact = 1;
  for(let i = 1;i<=num;i++){
    fact *= i
  } 
  return fact;
}

factorialize(5);
```
Logic for factorial.

```javascript
  function findLongestWordLength(str) {
  let words =  str.split(" ");
  let max = 0;
  for(let i=0; i < words.length ;i++){
    if(words[i].length > max){
      max = words[i].length;
    }

  }
  return max;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
 To find the longest word in an string.

```javascript
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
```
To finding an array consisting of max numbers from each subarray passed.
 


