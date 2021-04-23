const caja = document.querySelector('.lineados');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(caja)


caja.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
	if(menu.classList.contains('spread') && e.target != menu && e.target != caja){

		menu.classList.toggle("spread")
	}
})