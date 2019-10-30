/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menu = document.querySelector('.header');

const createMenu = (menu) => {

  //create elements
  const menuCard = document.createElement('div');
  const menuList = document.createElement('ul');
  // const menuItem1 = document.createElement('li');
  // const menuItem2 = document.createElement('li');
  // const menuItem3 = document.createElement('li');
  // const menuItem4 = document.createElement('li');
  // const menuItem5 = document.createElement('li');
  // const menuItem6 = document.createElement('li');

  //append elements
  menuCard.appendChild(menuList);
  
  //iterate, create, append, add content to li
  menu.forEach((item, idx) => {
    let menuItem = document.createElement('li'); 
    menuList.appendChild(menuItem);
    menuItem.textContent = item;
  });

  //add class 
  menuCard.classList.add('menu');

  //menu-button
  const menuBtn = document.querySelector('.menu-button');

  menuBtn.addEventListener('click', (e)=>{
    console.log('toggled', e.target);
    menuCard.classList.toggle('menu--open');
  });


  return menuCard;
}

menu.appendChild(createMenu(menuItems));