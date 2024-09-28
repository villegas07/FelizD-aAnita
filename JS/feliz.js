const confettiContainer = document.querySelector('.confetti');

function createConfetti() {
  const confettiPiece = document.createElement('div');
  
  // Posicionar el confeti aleatoriamente en la parte superior de la pantalla
  confettiPiece.style.left = Math.random() * window.innerWidth + 'px';
  confettiPiece.style.top = '0';

  // Añadir confeti al contenedor
  confettiContainer.appendChild(confettiPiece);

  // Eliminar confeti después de un tiempo
  setTimeout(() => {
    confettiPiece.remove();
  }, 5000); // Ajusta el tiempo según sea necesario
}

// Crear confeti cada 200ms
setInterval(createConfetti, 200);
