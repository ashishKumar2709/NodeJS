class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    intro(){
        console.log(`His name is ${this.name} and age is ${this.age} `)
    }
}

module.exports = Person;