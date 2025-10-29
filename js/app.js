import { mountRoute, initRouter } from "./router.js";
import { initStore } from "./store.js";

// Menu hambúrguer
const btnHamb = document.querySelector('.btn-hamburger');
const mobileNav = document.getElementById('menuMobile');
if (btnHamb && mobileNav) {
  btnHamb.addEventListener('click', () => {
    const isOpen = !mobileNav.hasAttribute('hidden');
    if (isOpen) {
      mobileNav.setAttribute('hidden', '');
      btnHamb.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      btnHamb.setAttribute('aria-expanded', 'true');
    }
  });
}

// Utilitários globais (usados nos templates)
export function openModal(id) { document.querySelector(id)?.removeAttribute('hidden'); }
export function closeModal(el) { el.closest('.modal')?.setAttribute('hidden',''); }
export function fireToast(msg = "Ação realizada!") {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.removeAttribute('hidden');
  requestAnimationFrame(()=> toast.classList.add('is-visible'));
  setTimeout(()=>{
    toast.classList.remove('is-visible');
    setTimeout(()=> toast.setAttribute('hidden',''), 250);
  }, 2200);
}

// Fechar modal com ESC + botões [data-close-modal]
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal').forEach(m=> m.setAttribute('hidden',''));
  }
});
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-close-modal]');
  if (btn) closeModal(btn);
});

// Inicialização
initStore();
initRouter();
mountRoute('home'); // rota padrão
