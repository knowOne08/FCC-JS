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

