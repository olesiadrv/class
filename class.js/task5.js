class iPhone {
    constructor (model, color, memory, yearOfCreation){
        this.model = model;
        this.color = color;
        this.memory = memory;
        this. yearOfCreation = yearOfCreation
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = 'XS'
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = 'white'
    }
    get memory() {
        return this._memory;
    }
    set memory(memory) {
        this._memory = 128
    }
    get yearOfCreation() {
        return this._yearOfCreation;
    }
    set yearOfCreation(yearOfCreation) {
        this._yearOfCreation = 2018
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = 'Apple'
    }
}
const iphone = new iPhone
console.log (iphone)
