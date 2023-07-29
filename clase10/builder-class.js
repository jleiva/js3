// The Builder pattern is used to create objects in "steps".
// Normally we will have functions or methods that add certain 
// properties or methods to our object.

class Car {
  // Si quiero propiedades requeridas
  // las podemos incluir en el constructor
  constructor(brand) {
    this.brand = brand;
  }

  setColor(color) {
    this.color = color;

    // El return nos permite hacer chaining
    // de cada metodo de la Clase
    return this;
  }

  setFuelType(fuelType) {
    this.fuelType = fuelType;
    return this;
  }

  setProductionDate(date) {
    this.productionDate = date;
    return this;
  }

  withSpecialPolish(specialPolish) {
    this.includePolishing = true;
    this.specialPolish = specialPolish;
    return this;
  }

  withExtendedWarranty(extendedWarranty) {
    this.extendedWarranty = true;
    this.extendedWarrantyTime = extendedWarranty;
    return this;
  }

  amountOfDoors(amountOfDoors) {
    this.amountOfDoors = amountOfDoors == 2 || amountOfDoors == 4 ? amountOfDoors : 4;
    return this;
  }
}

const toyotaWithDieselAndFourDoors = new Car('Toyota').setFuelType('Diesel').amountOfDoors(4);

console.log(toyotaWithDieselAndFourDoors)