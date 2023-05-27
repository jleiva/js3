// En este module podemos tener la instancia del Observer para la lista
// de productos, y los metodos que creen la lista

import Publisher from './publisher.js';

const productChange = new Publisher('product.change');

function handleProductChange(event) {
  productChange.publish(event.currentTarget.dataset.productid);
}

// Este metodo puede crear el HTML de la lista de productos
// y atachar el evento handleProductChange() que dispare el cambio de producto
const initProducts = () => {
  console.log('initProducts');
}

export { initProducts }