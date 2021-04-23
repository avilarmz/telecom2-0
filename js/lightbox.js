const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const caja1 = document.querySelector('.lineados')


imagenes.forEach(imagen =>{
	imagen.addEventListener('click', ()=>{
		aparecerImagen(imagen.getAttribute('src'))
	})
})

contenedorLight.addEventListener('click', (e)=>{
	if(e.target !== imagenesLight){
		contenedorLight.classList.toggle('show')
		imagenesLight.classList.toggle('showImage')
		caja1.style.opacity='1'

	}
})

const aparecerImagen = (imagen)=>{
	imagenesLight.src= imagen
	contenedorLight.classList.toggle('show')
	imagenesLight.classList.toggle('showImage')
	caja1.style.opacity='0'

}