## Object Oriented Programing JS

1.  objects: tangible things people can observe and interact with.
    a object is like the name object like book, bike, car, bus etc. which has specific key-value pairs.
    ```javascript
    //simple object in js
    let dog = {
        name : "Dan",
        numLegs : 4
    }
    ```
    
2.  Acessing object properties using . methood
    ```javascript
    let dog = {
    name: "Spot",
    numLegs: 4
    };
    // Only change code below this line
    console.log(dog.name)
    ```

3.  Methods are properties that are functions. This adds different behavior to an object.
    ```javascript
    let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => "This dog has 4 legs."

    };

    dog.sayLegs();
    ```

4.  You can also use objects properties inside an object method using **this.method()** 
    property.
    ```javascript
    let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
    };

    dog.sayLegs();
    ```

5.  Constructors as the name are functions that are used  to creat new     
    objects.
    ->  Constructors are defined with a capitalized name to distinguish them from other 
        functions that are not constructors.
    ->  Constructors use the keyword this to set properties of the object they will 
        create. Inside the constructor, this refers to the new object it will create.
    ->  Constructors define properties and behaviors instead of returning a value as   
        other 
        functions might.
    ```javascript
    function Dog(){
    this.name ='dog',
    this.color='blue',
    this.numLegs= 5
    }
    ```

6.  ***.this*** inside the constructor always refers to the object being created.
    Creating instances of object created.
    ```javascript
    function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
    }
    // Only change code below this line
    let hound = new Dog();
    ```

7.  Making constructor to accept parameters
    ```javascript
    function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
    }
    // Only change code below this line
    let hound = new Dog();
    ```

8.  New object created by constuctor is called the instance of the constructor.
    ***instanceof*** allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
    ```javascript
    function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
    }

    // Only change code below this line
    let myHouse = new House(2);

    myHouse instanceof House;
    ```

9.  The property directly defined on instance object are called **Own Properties**
    ```javascript
    function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    }

    let canary = new Bird("Tweety");
    let ownProps = [];
    // Only change code below this line
    for(let property in canary){
    if(canary.hasOwnProperty(property)){
        ownProps.push(property);
    }
    }
    console.log(ownProps);
    ```

10. Use Prototype Properties to Reduce Duplicate Code.
    Properties in the prototype are shared among ALL instances of Constructor.
    ```javascript
    function Dog(name) {
    this.name = name;
    }


    Dog.prototype.numLegs = 2;
    // Only change code above this line
    let beagle = new Dog("Snoopy");
    ```

11. Adding all properties to array (both own property and prototype property)
    ```Javascript
    function Dog(name) {
    this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    // Only change code below this line
    for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
        ownProps.push(property);
    }else{
        prototypeProps.push(property);
    }
    }
    console.log(ownProps);
    console.log(prototypeProps);

    ```

12. Constructor property of an instance.
    **Note:** Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
    ```Javascript
    function Dog(name) {
    this.name = name;
    }

    // Only change code below this line
    function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
        return true;
    }else{
        return false;
    }
    }
    ```

13. You can add prototype  properties all at once rather than adding single property 
    each time. 
    ```Javascript
    function Dog(name) {
    this.name = name;
    }

    Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: () => {console.log("eat")},
    describe: () => {console.log("name is " + this.name)}
    };
    ```

14. Manually setting the prototype to a new object erases the constructor property.This 
    property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results.
    ```Javascript
    function Dog(name) {
    this.name = name;
    }

    // Only change code below this line
    Dog.prototype = {

    constructor: Dog, //Constructor property on Dog prototype
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
    };

    let dog = new Dog();

    ```

15. An object inherits its prototype directly from the constructor function that created 
    it. 
    We can check this by ***.isPrototypeOf*** method
    ```Javascript
    function Dog(name) {
    this.name = name;
    }

    let beagle = new Dog("Snoopy");

    // Only change code below this line

    Dog.prototype.isPrototypeOf(beagle)
    ```

16. Don't Repeat Yourself (DRY) principle. 
    If you have a block of code which is common in all the objects you can define it in parent object(supertype).
    ```javascript
    function Animal(){ };
    Animal.prototype = {
    constructor: Animal,
    eat: () => {return "nom nom nom"}
    }
    function Cat(name) {
    this.name = name;
    }

    Cat.prototype = {
    constructor: Cat
    };

    function Bear(name) {
    this.name = name;
    }

    Bear.prototype = {
    constructor: Bear,
    };

    ```

16. 
    ```javascript

    ```

16. 
    ```javascript

    ```

16. 
    ```javascript

    ```

16. 
    ```javascript

    ```