const KEY = 'ong_js3_cadastros';

export function initStore(){
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, JSON.stringify([]));
  }
}

export function getCadastros(){
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function addCadastro(data){
  const list = getCadastros();
  list.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem(KEY, JSON.stringify(list));
}
