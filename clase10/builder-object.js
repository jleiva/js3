const builder = {
  setBrand(brand) {
    this.brand = brand;
    return this;
  },

  setColor(color) {
    this.color = color;
    // Igual que en el ejemplo de Clase
    // hacer return nos permite hacer uso
    // de chaining
    return this;
  },

  setFuelType(fuelType) {
    this.fuelType = fuelType;
    return this;
  },

  setProductionDate(date) {
    this.productionDate = date;
    return this;
  },

  withSpecialPolish(specialPolish) {
    this.includePolishing = true;
    this.specialPolish = specialPolish;
    return this;
  },

  withExtendedWarranty(extendedWarranty) {
    this.extendedWarranty = true;
    this.extendedWarrantyTime = extendedWarranty;
    return this;
  },

  amountOfDoors(amountOfDoors) {
    this.amountOfDoors = amountOfDoors == 2 || amountOfDoors == 4 ? amountOfDoors : 4;
    return this;
  },
}

const car1 = Object.create(builder);

car1.setColor('white').setProductionDate(Date.now())

console.log(car1)