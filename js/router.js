import Home, { HomeInit } from "./templates/home.js";
import Projetos from "./templates/projetos.js";
import Cadastro, { CadastroInit } from "./templates/cadastro.js";

const routes = {
  home:     { view: Home,     init: HomeInit },
  projetos: { view: Projetos },
  cadastro: { view: Cadastro, init: CadastroInit }
};

export function mountRoute(route) {
  const page = routes[route] ?? routes.home;
  const app = document.getElementById('app');
  app.innerHTML = page.view();

  if (page.init) page.init();   // <- chama init da rota
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
