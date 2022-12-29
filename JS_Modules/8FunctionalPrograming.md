## Functional Pograming

1.  Functional programming is a style of programming where solutions are simple, 
    isolated functions, without any side effects outside of the function scope

    Functional Programing is:
        1.  Isolated functions - there is no dependence on the state of the program, 
            which includes global variables that are subject to change
        2.  Pure functions - the same input always gives the same output.
        3.  Functions with limited side effects - any changes, or mutations, to the 
            state of the program outside the function are carefully controlled

    ```javasscript
    // Function that returns a string representing a cup of green tea
    const prepareTea = () => 'greenTea';

    /*
    Given a function (representing the tea type) and number of cups needed, the
    following function returns an array of strings (each representing a cup of
    a specific type of tea).
    */
    const getTea = (numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
    };

    // Only change code below this line
    const tea4TeamFCC = getTea(40);
    // Only change code above this line
    ```
2.  Callbacks are the functions that are slipped or passed into another function to 
    decide the invocation of that function.
    
    **Functions that can be assigned to a variable**, passed into another function, or returned from another function just like any other normal value, are called **first class functions**. In JavaScript, all functions are first class functions.

    The functions that **take a function as an argument, or return a function** as a return value, are called **higher order functions.**

    ```javascript
    // Function that returns a string representing a cup of green tea
    const prepareGreenTea = () => 'greenTea';

    // Function that returns a string representing a cup of black tea
    const prepareBlackTea = () => 'blackTea';

    /*
    Given a function (representing the tea type) and number of cups needed, the
    following function returns an array of strings (each representing a cup of
    a specific type of tea).
    */
    const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
    };

    // Only change code below this line
    const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
    const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
    // Only change code above this line

    console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
    );`
    ```
3.  Functional programming is a form of declarative programming. You tell the computer 
    what you want done by calling a method or function.

    ```javascript
    // tabs is an array of titles of each site open within the window
    const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
    };

    // When you join two windows into one window
    Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
    };

    // When you open a new tab at the end
    Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
    };

    // When you close a tab
    Window.prototype.tabClose = function(index) {

    // Only change code below this line

    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index+1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
    };

    // Let's create three browser windows
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

    // Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);
    ``` 

4.  you call a function on a variable, array, or an object, and the function changes the 
    variable or something in the object.
    The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

    Recall that in functional programming, changing or altering things is called ***mutation***, and the outcome is called a ***side effect***. A function, ideally, should be a ***pure function***, meaning that it does not cause any ***side effects***.
    ```javascript
    // The global variable
    let fixedValue = 4;

    function incrementer() {
    // Only change code below this line
    let cpy = fixedValue
    return cpy+=1;

    // Only change code above this line
    }
    ```

5.  Mention variable dependencies Explicitly. If a function requires a variable pass it 
    as  an argument.
    The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
    ```javascript
    // The global variable
    let fixedValue = 4;

    // Only change code below this line
    function incrementer(cpy) {

    return cpy+=1
    // Only change code above this line
    }

    incrementer(fixedValue) 
    ```

6.  Two Fundamentals
        Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

        Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
    ```javascript
    // The global variable
    const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    // Change code below this line
    function add(arr,bookName) {
    let arr1 = [...arr]
    arr1.push(bookName);
    return arr1;
    
    // Change code above this line
    }

    // Change code below this line
    function remove(arr,bookName) {
    let arr1 = [...arr];
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

        arr1.splice(book_index, 1);
        return arr1;

        // Change code above this line
        }
    }

    let rem = remove(bookList,"Disquisitiones Arithmeticae")
    let ad = add(bookList,"Book")
    ```

7.  Functions are considered first class objects in JavaScript, which means they can be 
    used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.   

    The ***map*** method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.
    The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

    ```javascript
    // The global variable
    const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
    ];

    // Only change code below this line

    const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
    // for (let i = 0; i < watchList.length; i++) {
    //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
    // }


    // Only change code above this line

    console.log(ratings);
    ```

8.  Making a function which acts like map() method
    ```javascript
    Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this));
    }
    // Only change code above this line
    return newArray;
    };
    ```

9.  ***filter*** calls a function on each element of an array and returns a new array 
    containing only the elements for which that function returns a truthy value - that is, a value which returns true if passed to the Boolean() constructor. It does this without needing to modify the original array.

    The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.
    ```javascript
    // Only change code below this line

    const filteredList = watchList.filter(({ imdbRating }) => imdbRating >= 8.0)  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

    // Only change code above this line

    console.log(filteredList);
    ```

10. Making a function which acts like filter method
    ```javascript
    Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
        newArray.push(this[i])
        }
    }
    // Only change code above this line
    return newArray;
    };
    ```

11. The slice method returns a copy of certain elements of an array. It can take two 
    arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice **(and end is non-inclusive)**.
    ```javascript
    function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice,endSlice)

    // Only change code above this line
    }

    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);
    ```

12. Splice takes arguments for the index of where to start removing items, then the 
    number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on.
    ```javascript
    function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);

    // Only change code above this line
    }

    const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(inputCities);
    ```

13. For arrays, ***concat*** is called on one, then another array is provided as the 
    argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays.
    ```javascript
    function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach)

    // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingConcat(first, second);
    ```

14. Functional programming is all about creating and using ***non-mutating*** functions.
    Using concat as a non-mutating push
    ```javascript
    function nonMutatingPush(original, newItem) {
    // Only change code below this line
    let arr = [...original]
    return arr.concat(newItem);

    // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);
    ```

15. reduce(), is the most general of all array operations in JavaScript. You can solve.
    almost any array processing problem using the reduce method. filter and map can be derived as special applications of reduce
    ```javascript
    function getRating(watchList) {
    // Only change code below this line
    const averageRating = watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;


    // Only change code above this line
    return averageRating;
    }

    console.log(getRating(watchList));
    ```

16. Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
    ```javascript
    const squareList = arr => {
    // Only change code below this line
    return arr.filter(num => num > 0   && num % parseInt(num)=== 0).map(num => Math.pow(num,2));
    // Only change code above this line
    };

    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);
    ```

17. The sort method sorts the elements of an array according to the callback function.
    
    JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items.

    When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction.

    If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. And vice versa.
    If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
    ```javascript
    function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort((a,b)=>{
        return a===b ? 0 : a<b ? -1 : 1;
    })
    // Only change code above this line
    }

    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
    ```

18. sort() is a mutating method. Creating a non-mutating sort() method
    ```javascript
    const globalArray = [5, 6, 3, 2, 9];

    function nonMutatingSort(arr) {
    // Only change code below this line
    return [].concat(arr).sort((a,b)=>{
        return a-b;
    })

    // Only change code above this line
    }

    nonMutatingSort(globalArray);
    ```

19. The split method splits a string into an array of strings. It takes an argument for 
    the delimiter, which can be a character to use to break up the string or a regular expression 
    ```javascript
    function splitify(str) {
    // Only change code below this line

    return str.split(/\W/)  // Only change code above this line
    }

    splitify("Hello World,I-am code");
    ```

20. The join method is used to join the elements of an array together to create a 
    string. It takes an argument for the delimiter that is used to separate the array elements in the string. 

    It's like inverse of .split()
    ```javascript
    function sentensify(str) {
    // Only change code below this line

    return str.split(/\W/).join(" ") 
    // Only change code above this line
    }

    sentensify("May-the-force-be-with-you");
    ```