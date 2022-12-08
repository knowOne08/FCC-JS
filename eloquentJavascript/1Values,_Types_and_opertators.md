## Values, Types, and Operators

* "Below the surface of the machine, the program moves. Without effort, it expands and 
  contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below." 
    * the program is non-physical and is dynamic. 'electrons scatter and regroup'
      dynamicity of a progame at funadmental level maybe ? " The forms on the monitor are but ripples on the water" monitor just shows you the output, 'The essence stays invisibly below' you are not seeing the process that is being carried out BTS.  

* On fundamental level in a machine theres only data which is stored in sequence of 
  bits, which are fundamentally alike (0,1) but the patterns created from them are not; but that which isnt data cant be mentioned.
    * Any form of descrete information can be translated in terms of bits.
    
* Theres just too much data on a machine (30 billion on just non-volatile memory) to work
  efficiently with that huge amount of data we must seperate them in chunks of relavent pieces of information. In JS those chunks are called values. just have to invoke their name to use them, stored in memory and are volatile.
    
    * **Numbers**, JS uses 64 bits to store numbers so you can store 2^64 numbers.
      These also a sign bit (representing the sign of the number), there are also  fractional numbers for which few bites are required to regester the place of the decimal  point. There is also scientific notation (e). 
      Calculations with integer numbers is precise  but not very precise with fractional numbers.

      Three special numbers in javascript Inifinity -Infinity and NaN (not a number).
      You get NaN for indeterminate forms in maths. 
    
    * **Strings** is anything within ('string') or ("string") or (`string`).
      to get new line in string we use (\n) this is an **escape character**
      **Escape Characters** start with (\) and are used to manupulating a string without breaking it format

      Strings are also translated to bits because at the fundamental level everything is zeros and ones. JS does this  with the help of unicoe just like what C does with the help ASCII. Unicode standards have assigned every character to a number so that every character can be described in binary.

      Two or more strings can be concatinated (joined or added) with the help of (+) character.
      ```javascript
      "hello " + "world" = "hello world"
      ```

      Backtick Quoted strings **Template literals**  can also have values encoded in them just like a fromat string in python. 
      ```javascript
      `Two multiplied by three is ${2*3}`
      ```
      


* **Arithmetic Operations** these are all the simple arithimetic operations +,-,*, \ .
  and %. You can change the priorities of operations with help of higher precedence 
  objects like (). The precedence order is as always BODMAS    

* **Unary Operators**. Not all operators are symbols some of them are keywords also.
  the importtant thing about unary operators is that it only has ** *ONE*** operand.
  
  ***typeof*** is a unary operator which returns a string indicataing the datatype of the operand. Similary, (-) is also a unary operator. Though it can also be used as a binary operator.

* **Boolean Values** are just True or false, yes or no, 0 or 1 it is generally used for  
  comparision purposes 

* **Comparision Operators** are used for comparing values just like in maths they are >,<
  = (equal to), and != (not equal to).
  They can also be used to compare strings also.

* **Logical Operators** Same operators as  in physics &&(and), ||(or). ! (not).

* **Ternary Operator** also known as ***Conditional Operator*** Very efficient operator 
  ```javascript
  (condition ? exp1 : exp2);
  ```
  It is quiet simple first comes the condition, if the condition is true exp1 is executed if false then exp2 is executed.

* **Empty Value** ***null*** and ***undefinend*** are two empty values which are 
  assigned to a variable in absence of a specfic value

* **Automatic type conversion** JS is quiet liberal with the syntax.
  ```javascript
  console.log(8 * null)
  // → 0
  console.log("5" - 1)
  // → 4
  console.log("5" + 1)
  // → 51
  console.log("five" * 2)
  // → NaN
  console.log(false == 0)
  // → true
  ```
  JS converts variables by type conversion so that the operation can be performed on them
  but its not good always for a program. So to avoid implicit type conversions **===** or **!==** are used to compare if the values are excatly same or not.

* **Short-circuiting of logical operators**
  The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

  The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.
  ```javascript
  console.log(null || "user")
  // → user
  console.log("Agnes" || "user")
  // → Agnes
  ```
  The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.