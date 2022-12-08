class IPhone {
    constructor(){
        this.model = 'Xs';
        this.brand = 'Apple';
        this.color = 'white';
        this.memory = 128;
        this.yearOfCreation = 2018;


    }
    calculatePrice() {
        return (((this.yearOfCreation * 2) + this.memory) / 10);
    }
    calculateAge() {
      let nowYear = 2022
        return (nowYear - this.yearOfCreation);
    }
}
class Samsung {
    constructor(){
        this.model = 'Flip 4';
        this.brand = 'Samsung';
        this.color = 'graphite';
        this.memory = 256;
        this.yearOfCreation = 2021;


    }
    calculatePrice() {
        return (((this.yearOfCreation * 2) + this.memory) / 10);
    }
    calculateAge() {
      let nowYear = 2022
        return (nowYear - this.yearOfCreation);
    }
}
class Xiaomi {
    constructor(){
        this.model = 'Note 10';
        this.brand = Xiaomi;
        this.color = 'blue';
        this.memory = 64;
        this.yearOfCreation = 2020;
    }
    calculatePrice() {
        return (((this.yearOfCreation * 2) + this.memory) / 10);
    }
    calculateAge() {
      let nowYear = 2022
        return (nowYear - this.yearOfCreation);
    }
}
const iPhone = new IPhone()
console.log ('Вартість телефона ' + iPhone.calculatePrice() + '$')
console.log ('Телефону ' + iPhone.calculateAge() + ' p')
const samsung = new Samsung()
console.log ('Вартість телефона ' + samsung.calculatePrice() + '$')
console.log ('Телефону ' + samsung.calculateAge() + ' p')
const xiaomi = new Xiaomi()
console.log ('Вартість телефона ' + xiaomi.calculatePrice() + '$')
console.log ('Телефону ' + xiaomi.calculateAge() + ' p')