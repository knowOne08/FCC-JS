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
 

```javascript
function confirmEnding(str, target) {
  
  return str.slice(-target.length) === target
  }


confirmEnding("Bastian", "n");
```
If the given strings end with given argument

```javascript
function repeatStringNumTimes(str, num) {
  let str1 = str;
  if(num > 0){
  for(let i=1 ;i <num;i++ ){
    str += str1;
  }
   console.log(str);
 }
 else{
   console.log('');
 }

}

repeatStringNumTimes("*", 3);
```
To repeat a string given numbers of time.

 

```javascript
function truncateString(str, num) {
  if(str.length > num){
    console.log(str.slice(0,num) + "...");
  }
  else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
To reaturn a sting upto the given length if original string is larger than length specified.
 

```javascript
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
To check a number in an array  passes a func(x) test defined by us.

```javascript
function booWho(bool) {
  return (bool === true || bool === false) ? true : false;
}

booWho(null);
```
To check is passed value is purely boolean or not 

```javascript
function frankenSplice(arr1, arr2, n) {
 
  let arr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    arr.splice(n, 0, arr1[i]);
    n++;
  }
  return arr;
}
```
Copy all elements  of an array to another array at an given index n.
 

```javascript
function bouncer(arr) {
  let arr1 = [];
  for(let i=0; i < arr.lenght ;i++){
    if(arr[i]){
      arr1.push(arr[i]);
    }

  }
  return arr1;
}

bouncer([7, "ate", "", false, 9]);
```
to filter the array of false values.
 

```javascript
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
```
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 

```javascript
function chunkArrayInGroups(arr, size) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr1.push(arr.slice(i, i + size));
  }
  return arr1;
}

```
To split an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
