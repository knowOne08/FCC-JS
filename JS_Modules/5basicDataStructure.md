## BasicDataStructue

1.  ```javascript
    let yourArray = [true,"hello",3,4,5];
    ```
    Basic of storing data in array.
    
    ```javascript
    let myArray = ["a", "b", "c", "d"];
    myArray[1] = 3;
    console.log(myArray);
    ```
    Changing  Values using indices of array.

    ```javascript
    function mixedNumbers(arr) {
    arr.push(7, 'VIII', 9)
    arr.unshift('I', 2, 'three')
    return arr;
    }

    console.log(mixedNumbers(['IV', 5, 'six']));
    ```
    Using **push()** to add elements to end and **unshift()** to elements at front.
    
    ```javascript
    function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
    }

    console.log(popShift(['challenge', 'is', 'not', 'complete']));
    ```
    Using **pop()** to remove elements from end and **shift()** to elements from front. 
    
    ```javascript
    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    arr.splice(4,);
    arr.shift();
    console.log(arr);
    ``` 
    Using **splice(a,b)** to remove selected elements in array. where a is the starting index for removing elements and b is the number of elements to be removed.
    
    ```javascript
    function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
    }

    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
    ``` 
    Using **splice(a,b,c)** also has a third parameter where c is the value to be inserted in place of the value removed. And multiple values can be added

    ```javascript
    function forecast(arr) {
    // Only change code below this line

    return arr.slice(2,4);
    }

    // Only change code above this line
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
    ``` 
    Using **slice(a,b)** to store values extracted in another array. Here **a** is the starting index and **b** is the stoping index for extracting values.

    ```javascript
    function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
    }

    console.log(copyMachine([true, false, true], 2));
    ``` 
    Using **...** *spreead operator* to copy the whole array.
    
    ```javascript
    function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence =['learning', ...fragment , 'is', 'fun']; // Change this line
    return sentence;
    }

    console.log(spreadOut());
    ``` 
    Using **...** *spreead operator* to enter an whole array inside another array.
    
    ```javascript
    function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    if(arr.indexOf(elem) === -1){
        return false;
    }
    {
        return true;
    }
    // Only change code above this line
    return newArr;
    }

    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    ``` 
    Using **.indexOf()** to check if  element exists in array. If element exists it will return the index of the element else it will return -1;
    
    ```javascript
    function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
        }
    }

    return newArr;
    }

    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    ``` 
    Using **for lops** to go through an array and perform operations.  
 
    ```javascript
    let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
    ];

    ``` 
    Arrays with increasing depth levels
   
2.  ```javascript
    let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
    };

    // Only change code below this line
    foods.bananas = 13;
    foods.grapes  = 35;
    foods.strawberries  = 27;
    // Only change code above this line

    console.log(foods);
    ``` 
    **Objects** are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 

    Adding new values to an object

    ```javascript
    let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
    };

    // Only change code below this line
    foods.bananas = 13;
    foods.grapes  = 35;
    foods.strawberries  = 27;
    // Only change code above this line

    console.log(foods);
    ``` 
    Nested values in object and how to get and operate on those values.

    ```javascript
    let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
    };

    function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    
    // Only change code above this line
    }

    console.log(checkInventory("apples"));
    ``` 
    using [] to get the value of a key variable from an object

    ```javascript
    let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
    };

    // Only change code below this line
    delete foods.oranges;
    delete foods.plums;
    delete foods.strawberries ; 
    // Only change code above this line

    console.log(foods);
    ``` 
    using **delete** keyword to delete a key from an object;

    ```javascript
    const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
    }

    function countOnline(usersObj) {
    // Only change code below this line
    let count =0 ;
    for(let user in usersObj){
        if(usersObj[user].online === true){
        count++;
        }
        
    
    }
    
    return count;
    // Only change code above this line
    }

    console.log(countOnline(users));
    ``` 
    Accessing nested key values of object and operating on them using for loops.

    ```javascript
    let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
    };

    function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
    }

    console.log(getArrayOfUsers(users));
    ``` 
    Using **Object.keys(argumentObj)** to get all the key values of an object.

    ```javascript
    let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
        'Sam',
        'Kira',
        'Tomo'
        ],
        location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
        }
    }
    };

    function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
    }

    console.log(addFriend(user, 'Pete'));
    ``` 
    Appending a key to a complex data structure with the help of functions learned previously.