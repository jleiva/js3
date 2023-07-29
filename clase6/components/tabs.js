import { categories } from '../config.js';

const container = document.querySelector('#tabs');

const handleTabClick = (category) => {}

const renderTab = ({ name, category}) => {
 const tab = document.createElement('button');

 tab.innerText = name;
 tab.addEventListener('click', () => handleTabClick(category));
 container.appendChild(tab);
}

const initTabs = () => {
  categories.forEach(category => {
    renderTab(category)
  });
}

export { initTabs };