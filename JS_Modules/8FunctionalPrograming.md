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