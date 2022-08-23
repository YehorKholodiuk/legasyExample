class Animal {
    move(){
        return 'Go!'
    }
}
class Dog extends Animal {
    constructor(name,age){
        super()
        this.name = name
        this.age = age

    }
    run(s){
        return `Speed ${this.age * s}`
    }
}

const dog2 = new Dog('Boo',4)
const dog3 = new Dog('Tom',7)

console.log(dog2.move())
console.log(dog3)
