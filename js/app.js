// === TOAST ===
export function fireToast(message){
  const toast = document.getElementById('app-toast');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(()=> toast.classList.remove('is-visible'), 2500);
}

// === MODAL ===
export function openModal(selector){
  const modal = document.querySelector(selector);
  if(!modal) return;
  modal.removeAttribute('hidden');
}

export function closeModal(selector){
  const modal = document.querySelector(selector);
  if(!modal) return;
  modal.setAttribute('hidden','');
}

// Fecha modal com ESC
document.addEventListener('keydown', (e)=>{
  if(e.key === "Escape"){
    document.querySelectorAll('.modal:not([hidden])')
      .forEach(m => m.setAttribute('hidden',''));
  }
});

// Botões com atributo data-close-modal
document.addEventListener('click', (e)=>{
  if(e.target.matches('[data-close-modal]')){
    const modal = e.target.closest('.modal');
    modal?.setAttribute('hidden','');
  }
});
