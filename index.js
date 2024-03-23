document.addEventListener("DOMContentLoaded", function() {
  // Tu código aquí
  // Función para alternar la visibilidad de la imagen
function alternarVisibilidad() {
  var imagen = document.getElementById('imagen');
  var imagen1 = document.getElementById('imagen1');
  var imagen2 = document.getElementById('imagen2');
  var imagen3 = document.getElementById('imagen3');
  var imagen4 = document.getElementById('imagen4');
  var imagen5 = document.getElementById('imagen5');
  var imagen6 = document.getElementById('imagen6');
  var imagen7 = document.getElementById('imagen7');
  var imagen8 = document.getElementById('imagen8');
  var imagen9 = document.getElementById('imagen9');
  var imagen10 = document.getElementById('imagen10');
  imagen.style.opacity = (imagen.style.opacity === '0') ? '1' : '0'; // Alternar la opacidad
  imagen1.style.opacity = (imagen1.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
  imagen2.style.opacity = (imagen2.style.opacity === '0') ? '1' : '0'; // Alternar la opacidad
  imagen3.style.opacity = (imagen3.style.opacity === '0') ? '1' : '0'; // Alternar la opacidad
  imagen4.style.opacity = (imagen4.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
  imagen5.style.opacity = (imagen5.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
  imagen6.style.opacity = (imagen6.style.opacity === '0') ? '1' : '0'; // Alternar la opacidad
  imagen7.style.opacity = (imagen7.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
  imagen8.style.opacity = (imagen8.style.opacity === '0') ? '1' : '0'; // Alternar la opacidad
  imagen9.style.opacity = (imagen9.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
  imagen10.style.opacity = (imagen10.style.opacity === '1') ? '0' : '1'; // Alternar la opacidad
 
}

// Llamamos a la función cada cierto tiempo (por ejemplo, cada 3 segundos)
// setInterval(alternarVisibilidad, 1500); // 3000 milisegundos = 3 segundos
setInterval(alternarVisibilidad, 3000);

// efecto escritura
var typed = new Typed('#element', {
  strings: ['<i>Ingeniero</i> informatico.', '&amp; Desarrollador Web.'],
  typeSpeed: 50,
  startDelay:300,
  backSpeed:75,
  shuffle: true,
  backDelay:1500,
  loop:true,
  loopCount: false,
  showCursor: true,
  cursorChar:'|',
  contentType:'html',
});

window.addEventListener('scroll', function() {
  var botonVolverArriba = document.querySelector('.boton-volver-arriba');
  var scrollPos = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
  var windowInnerHeight = window.innerHeight;

  if (scrollPos > windowInnerHeight / 2) {
      botonVolverArriba.style.display = 'block';
  } else {
      botonVolverArriba.style.display = 'none';
  }
});




});

