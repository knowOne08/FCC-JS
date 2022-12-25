## Functions

1.  "People think that computer science is the art of geniuses but the actual reality is 
    the opposite, just many people doing things that build on each other, like a wall of mini stones"  

    TeamWork. Very small divided task like ants builing  an anthill.

2.  Functions are useful in many ways. It creates  structure, reduces complexity,
    repetition, because of this structures problems can be found easily.
    **The most obvious application of functions is defining new vocabulary.**

# Defining a Function

1.  A Function is a regular ***Binding*** whose value is the function itself     

    ```javascript
    const square = function(x) {
    return x * x;
    };
    ```
2.  "A function is created with an expression that starts with the keyword function. 
    Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.A function can have multiple parameters or no parameters at all"

3.  A return statement defines what a function returns.
    **A return keyword without an expression after it or without return statement at all will cause the function to return undefined.**

# Bindings and Scope

1.  The part of the program in which a binding retains its values is called the scope of 
    binding.
    **For Bindings defined inside a code block so their value is available only inside that block is called  local binding. Every time the function is called, new instances of these bindings are created**
    **For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.**

2.  Bindings defined with var and let keyword are local Bindings.
    **The exception is when multiple bindings have the same name—in that case, code can see only the innermost one**

# Nested scope

1.  Multiple degrees of local variables. lexical scoping.

# Functions as values

1.  "A function value can do all the things that other values can do—you can use it in 
    arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on"
# Declaration
1.  Function declarations are not part of the regular top-to-bottom flow of control. 
    They are conceptually moved to the top of their scope and can be used by all the code in that scope.

# ArrowOperator

1.  Arrow operator without parameters 
    ```javascript
    const horn = () => {
    console.log("Toot");
    };
    ```
    Arrow operator with parameters 
    ```javascript
    const square1 = (x) => { return x * x; };
    const square2 = x => x * x;
    ```

# The call stack
1.  

# Optional Arguments 
1.  JavaScript is extremely broad-minded about the number of arguments you pass to a 
    function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined