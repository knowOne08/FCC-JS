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
