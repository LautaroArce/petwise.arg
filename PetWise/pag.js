<script>
function simularDescarga(plataforma) {
  const mensaje = document.getElementById("mensaje-descarga");
  mensaje.textContent = `Iniciando descarga para ${plataforma}...`;
  
  setTimeout(() => {
    mensaje.textContent = `¡Descarga simulada completa para ${plataforma}!`;
  }, 2000); // Simula una descarga de 2 segundos
}
</script>
