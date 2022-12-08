class iPhone {
    constructor (model, color, memory, yearOfCreation){
        this.model = model;
        this.color = color;
        this.memory = memory;
        this.yearOfCreation = yearOfCreation;
        this.brand = 'iPhone';
    }
}
class Samsung {
    constructor (model, color, memory, yearOfCreation){
        this.model = model;
        this.color = color;
        this.memory = memory;
        this.yearOfCreation = yearOfCreation;
        this.brand = 'Samsung';
    }
}
class Xiaomi {
    constructor (model, color, memory, yearOfCreation){
        this.model = model;
        this.color = color;
        this.memory = memory;
        this.yearOfCreation = yearOfCreation;
        this.brand = ' Xiaomi';  
    }
}
const iphone = new iPhone ('XS', 'white', 128, 2018) 
console.log (iphone)
const samsung = new Samsung ('Flip 4', 'graphite', 264, 2021)
console.log (samsung)
const xiaomi = new Xiaomi ('Note 10', 'blue', 64, 2020)
console.log (xiaomi)