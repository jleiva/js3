import { addMiddleware, execute } from "./pipeline.js";

const orderBase = {
  id: 'ORD123',
  total: 55,
  subtotal: 55
};

// los middleware deben tener la misma firma
// en este caso solo order porque es el ultimo de la cadena
function alertUser(order) {
  alert(`Your order ${order.id} was processed. Your total is ${order.total}`);
} 

// los middleware deben tener la misma firma
// en este caso, recibir order y next
const getTaxes = (order, next) => {
  try {
    const calculatedTaxes = 10; // asuma que llama un API

    order.taxes = calculatedTaxes;
    order.total += calculatedTaxes;
    console.log(order);

    next();
  } catch (error) {
    console.error(error);
  }
}

const applyPromotion = (order, next) => {
  const promotion = 50;

  order.promotion = promotion;
  order.total = order.total - (order.total * (promotion / 100));
  // runMiddleware(1, order)
  next();
}

const applyGiftWrapping = (order, next) => {
  order.hasGiftWrapping = true;

  next();
}

// Se pueden agregar tantos middleware como se requiera
// pueden estar dentro de alguna condicion
addMiddleware(applyPromotion, getTaxes, applyGiftWrapping); // indice 0
addMiddleware(alertUser);

execute(orderBase);