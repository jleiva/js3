import { initColors } from './js/colors.js';
import { initMainImage } from './js/mainImage.js';
import { initDetails } from './js/details.js';
// Ojo que acá solo importamos, no tenemos funciones ni código "suelto"
// cada initFn() lo que hace ejecutar lo estrictamente necesario cuando
// se carga el documento
initMainImage();
initColors();
initDetails();