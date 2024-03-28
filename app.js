// Exercise 1 Section
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
    removeHobby(rmHobby) {
        this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby)
    }
    greeting() {
        console.log("Hello fellow person!");
    }
}
// Exercise 2
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
        this.occupation = occupation;
    }
    greeting() {
        console.log("Hello fellow coder!");
    }
}
// exercise 3
let me = new Person("Jacob", 1, "Denver", ["gaming", "coding", "watching videos", "walking"]);
me.addHobby("temp");
console.log(me);
me.removeHobby("temp");
console.log(me);
let coder = new Coder("Jacob", 1, "Denver", ["gaming", "coding", "watching videos", "walking"], "Full Stack Web Developer");
console.log(coder);
me.greeting();
coder.greeting();

// exercise 4
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        let res;
        if (b === undefined) {
            res = a + this.result;
        } else {
            res = a + b;
        }
        console.log(res);
        this.result = res;
    }

    subtract(a, b) {
        let res;
        if (b === undefined) {
            res = a - this.result;
        } else {
            res = a - b;
        }
        console.log(res);
        this.result = res;
    }

    multiply(a, b) {
        let res;
        if (b === undefined) {
            res = a * this.result;
        } else {
            res = a * b;
        }
        console.log(res);
        this.result = res;
    }

    divide(a, b) {
        let res;
        if (b === undefined) {
            res = a / this.result;
        } else {
            res = a / b;
        }
        console.log(res);
        this.result = res;
    }
}

let calc = new Calculator();
calc.add(1, 5); //6
calc.subtract(5);
calc.subtract(6);
calc.multiply(5, 5); //25
calc.divide(8, 2); //4
