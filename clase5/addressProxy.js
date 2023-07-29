import { getCategory} from './api.js';

const cacheObj = {
  art: [{ img: '', title: ''}],
  sport: [{ img: '', title: ''}],
};

// latLngProxy['food']
const latLngProxy = new Proxy(cacheObj, {
  get: (obj, prop) => {
    if(obj[prop]) {
     return  Reflect.get(obj, prop);
    } else {
      // call Geo API and set data
      const data = getCategory(prop);
      
      obj[prop] = data;

      return  Reflect.get(obj, prop);
    }
  },

  // credenciales[prop] = 'cambios';
  set: (obj, prop, value) => {
    log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
    Reflect.set(obj, prop, value);
  }, 

  deleteProperty: (obj, prop) => {
    log(`Changed ${prop} from ${obj[prop]} to ${value}.`);

    if (obj[prop] === 'SECRECT') {

    }

    Reflect.deleteProperty(obj, prop);
  }
});

export {latLngProxy};