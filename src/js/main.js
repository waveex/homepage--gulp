

 
const Welcome = (name, age) => {
  console.log(` Witaj ${name}, masz ${age} lat`);
}

const name = `Michał`;
const age = `22`;
console.log(` Witaj ${name}, masz ${age} lat`)
 

const navigationButton = document.querySelector(`.navigation__button--js`);
navigationButton.addEventListener(`click`, (e) => {
  const navigationList = document.querySelector(`.navigation__list--js`);
navigationList.classList.toggle(`navigation__list--visible`) ;
console.log ('click') 
 
});


 
