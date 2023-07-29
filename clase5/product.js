import { latLngProxy} from './addressProxy.js';

function getUserlatLng(city) {
  const userLatLng = latLngProxy[city];

  return userLatLng;
}

export {getUserlatLng };