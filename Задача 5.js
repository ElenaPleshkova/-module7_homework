class Device {
    constructor (name, power) {
           this.name = name;
           this.power = power;
       }
      
       on () {
       console.log (`${this.name} включен/на`)
           }
     
      off () {
      console.log (`${this.name} выключен/на`)
      }
     
      powerDevice () {
      console.log (`Мощность прибора ${this.power} Вт`)
      }
   }     
    
    class Appliance extends Device {
       
      powerDevice () {
      super.powerDevice ();
      console.log (`Соблюдайте технику безопасности!`);
       }
   }
       
     let lamp = new Appliance (`Лампа`, 1000);
     let computer = new Appliance (`Компьютер`, 1500);
         
    lamp.colorBody = `green`;
    lamp.weight = 1000;
       
    computer.colorBody = `white`;
    computer.diagonalScreen = 17;
   