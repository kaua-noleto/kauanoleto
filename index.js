  // Página de destino ao terminar a animação — ajuste o nome do arquivo aqui:
  const nextUrl = 'main.html';

  const video = document.getElementById('bookAnim');
  if (video) {
    video.addEventListener('ended', () => {
      window.location.href = nextUrl;
    });
    // tenta garantir reprodução automática (caso seja bloqueada)
    video.play().catch(() => {});
  }