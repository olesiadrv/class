function creatNewClass (model ,color, memory, year, brand) {
    class Phone {
       constructor (model, color, memory, yearOfCreation, brand) {
           this.model = model
           this.color = color
           this.memory = memory
           this.yearOfCreation = yearOfCreation
           this.brand = brand
       }}
    return new Phone(model, color, memory, year, brand)
   }
   console.log (creatNewClass ('XS', 'white', 128, 2018,'Apple'))