1. Sum All Numbers in a Range
    ```javascript
    function sumAll(arr) {
    let sum = 0;
    if(arr[0] < arr[1]){
        for(let i = arr[0];i<=arr[1];i++){

        sum += i;
        } 
    }else{
        for(let i = arr[1];i<=arr[0];i++){
        sum += i;
        } 
    }
    return sum;
    }
    sumAll([1, 4]);
    ```
2.  Diff Two Arrays
    ```javascript
        function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));;
    
    
    
    return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    ```

3.  Seek and Destroy
    ```javascript
    function destroyer(arr, ...toremove) {
    
    return arr.filter(elem => !toremove.includes(elem));
    }

    destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    ```

4.  A function that looks through an array of objects (first argument) and returns an 
    array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
    ```javascript
    function whatIsInAName(collection, source) {
   
    const souceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => {
        for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
            return false;
        }
        }
        return true;
    });
    }

    ```

5.  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
    ```javascript
    function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(/\s+|_+/g,"-").toLowerCase()
    }

    spinalCase('This Is Spinal Tap');
    ```

6.  Pig Latin
    ```javascript
    function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
    }


    translatePigLatin("consonant");
    ```

7.  Search and Replace
    ```javascript
    function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
    }

    ```

8.  DNA Pairing
    ```javascript
    function pairElement(str) {
    // create object for pair lookup
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    return str
        .split("")
        .map(x => [x, pairs[x]]);
    }

    // test here
    pairElement("GCG");
    ```

9.  Missing letters
    ```javascript
    function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str
        .split("")
        .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
        });

    return missing;
    }


    fearNotLetter("abce");
    ```

10.  Sorted Union
    ```javascript
    function uniteUnique() {
    return [...arguments]
        .flat()
        .filter((item, ind, arr) => arr.indexOf(item) === ind);
    }

    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    ```

11.  Convert HTML Entities
    ```javascript
    function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str
        .split("")
        .map(entity => htmlEntities[entity] || entity)
        .join("");
    }

    // test here
    convertHTML("Dolce & Gabbana");
    ```

12.  Sum All Odd Fibonacci Numbers
    ```javascript
        function sumFibs(num) {
    let a = 1, b=1,sum=2,c;

    if(num == 1){
        return 1;
    }
    for(let i=1;i<num-1;i++){
        c=a+b;
        if(c%2 != 0){
        sum += c;
        }
        a=b;
        b=c;

    }
    return sum;
    }

    sumFibs(4);
    ```

13. Sum All Primes 
    ```javascript
    function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
        }
        return true;
    }

    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
        sum += i;
    }
    return sum;
    }
    ```

14.  Smallest Common Multiple
    ```javascript
    function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
        if (divisible) {
        return multiple;
        }
    }
    }

    smallestCommons([1, 5]);
    smallestCommons([1,5]);
    ```

15. Given the array arr, iterate through and remove each element starting from the first 
    element (the 0 index) until the function func returns true when the iterated element is passed through it.
    ```javascript
        function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
    }


    dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
    });

    dropElements([1, 2, 3], function(n) {return n < 3; });
    ```