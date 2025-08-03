const btnToggler = document.getElementById('btn-toggler');
const menu = document.getElementById('menu');

if (btnToggler && menu) {
  const iconHamburger = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`;
  const iconClose = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`;

  // Inicializar ícono según estado inicial
  btnToggler.innerHTML = menu.classList.contains('hidden') ? iconHamburger : iconClose;

  btnToggler.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      btnToggler.innerHTML = iconClose;
    } else {
      menu.classList.add('hidden');
      btnToggler.innerHTML = iconHamburger; 
    }
  });
}
