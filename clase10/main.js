const isValidWarranty = () => true;
// Ejemplo sin uso del Builder
class Car {
  constructor({ 
    brand, color, amountOfDoors, fuelType, productionDate, battery, 
    motor, seatMaterial, specialPolish, customPlate, extendedWarranty 
  }) {
    this.brand = brand;
    this.color = color;
    this.amountOfDoors = amountOfDoors == 2 || amountOfDoors == 4 ? amountOfDoors : 4;
    this.fuelType = fuelType;
    this.productionDate = productionDate;
    this.battery = battery;
    this.motor = motor;
    this.seatMaterial = seatMaterial;
    this.customPlate = customPlate;

    if (extendedWarranty) {
      this.hasExtendedWarranty = isValidWarranty(extendedWarranty);
    }
    
    if (specialPolish) {
      this.specialPolish = specialPolish;
    }
  
  }

  // Que hago con las propiedades opcionales que quiero inicializar en el constructor?
  // Que hago con las propiedades que requieren logica extra (validaciones, request, etc) antes de ser inicializadas en el constructor?
  // Como me aseguro de no tener propiedades undefined, solo tener las propiedades que necesito?
  // Como evito perder validaciones?
}

const car1 = new Car({
  brand: 'Toyota',
  amountOfDoors: 4,
  extendedWarranty: '5years'
});
console.log(car1);

car1.amountOfDoors = 10;

console.log(car1);

// const car2 = new Car('Honda', 'red', 4, 'gasoline', Date.now(), 'TREX-100');
// console.log(car2);