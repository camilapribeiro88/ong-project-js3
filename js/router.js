import Home from "./templates/home.js";
import Projetos from "./templates/projetos.js";
import Cadastro, { CadastroInit } from "./templates/cadastro.js";

const routes = {
  home: { view: Home },
  projetos: { view: Projetos },
  cadastro: { view: Cadastro, init: CadastroInit }
};

export function mountRoute(route) {
  const page = routes[route] ?? routes.home;

  const app = document.getElementById('app');
  app.innerHTML = page.view(); // insere HTML

  // se a página tiver função init, executa aqui:
  if (page.init) page.init();

  bindRouteLinks();
}

export function bindRouteLinks() {
  document.querySelectorAll('[data-route]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const route = a.dataset.route;
      location.hash = route;
      mountRoute(route);
    }, { once: true });
  });
}

export function initRouter() {
  window.addEventListener('hashchange', () => {
    const route = location.hash.replace('#','') || 'home';
    mountRoute(route);
  });
}
