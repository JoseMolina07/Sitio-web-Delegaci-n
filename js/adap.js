let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');
  }

}


 // Obtener todas las imágenes de las cajas
const images = document.querySelectorAll('.box-container .box img');

// Agregar evento de clic a cada imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    // Crear un elemento de imagen grande
    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.classList.add('enlarged-image');

    // Agregar la imagen al contenedor de la página
    const container = document.querySelector('.reviews');
    container.appendChild(enlargedImage);

     // Agregar sombra a la imagen abierta
     enlargedImage.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.5)';


    // Agregar evento de clic al documento para cerrar la imagen al hacer clic fuera de ella
    document.addEventListener('mousedown', event => {
      if (!enlargedImage.contains(event.target)) {
        container.removeChild(enlargedImage);
      }
    });
  });
});
