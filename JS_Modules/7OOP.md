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

17. Object.create(obj) creates a new object, and sets obj as the new object's prototype
    Thi will inherit all the properties from parent Object or supertype
    ```javascript
    function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
    };

    // Only change code below this line

    let duck = Object.create(Animal.prototype);
    let beagle = Object.create(Animal.prototype); 
    ```

18. Setting the Child's Prototype to an Instance of the Parent.
    ```javascript
    function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
    };

    function Dog() { }

    // Only change code below this line

    Dog.prototype = Object.create(Animal.prototype)

    let beagle = new Dog();
    ```

19. When object inherits a prototype from supertype it also inherits its supertypes 
    Construction method.
    Manually setting the constructor property of Object to it supertype
    ```javascript
    function Animal() { }
    function Bird() { }
    function Dog() { }

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    // Only change code below this line

    Bird.prototype.constructor = Bird;
    Dog.prototype.constructor = Dog;

    let duck = new Bird();
    let beagle = new Dog();

    ```

20. Constructor function can still have its own methods in addition to inherited methods 
    from supertype
    ```javascript 
    function Animal() { }
    Animal.prototype.eat = function() { console.log("nom nom nom"); };

    function Dog() { }

    // Only change code below this line

    Dog.prototype = Object.create(Animal.prototype)
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function() {
    console.log("Woof!");
    };
    // Only change code above this line

    let beagle = new Dog();
    ```

21. It's possible to override an inherited method.
    ```javascript
    function Bird() { }

    Bird.prototype.fly = function() { return "I am flying!"; };

    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;

    // Only change code below this line

    Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
    };

    // Only change code above this line

    let penguin = new Penguin();
    console.log(penguin.fly());
    ```

23. Use a Mixin to Add Common Behavior Between Unrelated Objects
    ```javascript
    let bird = {
    name: "Donald",
    numLegs: 2
    };

    let boat = {
    name: "Warrior",
    type: "race-boat"
    };

    // Add your code below this line
    let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");
    };
    };
    glideMixin(bird);
    glideMixin(boat);
    ```

24. Using Closure to Protect Properties Within an Object from Being Modified Externally
    ```javascript
    function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
    }

    ```

25. Immediately invoked function expression or IIFE.
    Executing function as soon as it is declared
    ```javascript
    (function () {
    console.log("A cozy nest is ready");
    })();


    ```

26. An immediately invoked function expression (IIFE) is often used to group related 
    functionality into a single object or module
    ```javascript
    
    let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
        obj.isCute = function() {
            return true;
        };
        },
        singMixin: function(obj) {
        obj.sing = function() {
            console.log("Singing to an awesome tune");
        };
        }
    };
    })();
    ```