import { potSoildChange } from './potChange.js';

const updateSoild = (data) => {
  // Busco en el HTML el elemnto
}


const initPreviewCard = () => {
  potSoildChange.subscribe(updateSoild);
}

export { initPreviewCard };
