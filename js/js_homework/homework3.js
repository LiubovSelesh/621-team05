
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
     return Math.min(...args);
   }
 }



 // https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript

 function circleCircumference(circle) {
   return 2 * Math.PI * circle.radius;   
 }



 // https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

 class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
 introduce() {
   return super.introduce() + "  Meow meow!";
 }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status, master);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
    }
}


