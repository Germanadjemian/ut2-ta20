const image = document.getElementById('hoverImage');

const originalSrc = 'image1.png';
const hoverSrc = 'image2.png';

// Cambiar la imagen al pasar el mouse por encima
image.addEventListener('mouseover', function() {
    image.src = hoverSrc;
});

// Volver a la imagen original al quitar el mouse
image.addEventListener('mouseout', function() {
    image.src = originalSrc;
});
