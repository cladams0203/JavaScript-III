/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global is the whole language if this is called on the global scope
* 2. implicit is calling the object property it belongs too.
* 3. new binding is greating a new object with a constructor function
* 4. explicit is overwriting the existing object properties.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const hey = {
    greet: 'hey',
    sayIt: function() {
        console.log(`${this.greet}`);
    }
};

// Principle 3

// code example for New Binding
// Obj is a constructor function
const newObj = new Obj('i am new');

// Principle 4

// code example for Explicit Binding
hey.sayIt.call(obj);