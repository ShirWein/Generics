//todo: Write a generic method to count the number of elements (of any kind) in an Array that have a specific property.
function getNumOfElementsInArray(arr: unknown[]): number {
    return arr.length
}
//todo: 1. Write generic interface (Property)
interface Property {
    label: string;
  }



//todo: 2. Write 3 classes implementation for Property interface (odd property, prime property, palindromes property)





//todo: 3. Write class person with 2 attributes (name, id), then write class that implement property interface that checks which persons have an ID number that is a palindrome, without using strings
class Person {
    // attributes
    name: string;
    id: number;
  
    // constructor
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}


const class ThatImplement implements Property
  
//     // method
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   let person1 = new Person('John', 30000000003);
//   person1.greet(); 