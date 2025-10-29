import { openModal, fireToast } from "../app.js";

export default function Home(){
  return `
    <section class="hero">
      <div class="container grid grid-12 align-center">
        <div class="col-7 col-md-12">
          <h1 class="h1">ONG SPA — Entrega III</h1>
          <p class="lead">SPA com templates, validação avançada e armazenamento local.</p>
          <div class="flex gap-16 wrap mt-16">
            <a class="btn btn--primary" href="#" data-route="projetos">Ver projetos</a>
            <button class="btn btn--ghost" id="btnOpenModal">Abrir modal</button>
            <button class="btn btn--success" id="btnToast">Mostrar toast</button>
          </div>
          <div class="tags mt-16">
            <span class="badge">Acessível</span>
            <span class="badge badge--info">Responsivo</span>
            <span class="badge badge--success">SPA</span>
            <span class="badge badge--warning">Beta</span>
          </div>
        </div>
        <div class="col-5 col-md-12">
          <img class="hero-img" src="./img/logo.svg" alt="Marca do projeto" />
        </div>
      </div>
    </section>

    <script>
      document.getElementById('btnOpenModal')?.addEventListener('click', ()=> openModal('#modalExemplo'));
      document.getElementById('btnToast')?.addEventListener('click', ()=> fireToast('Bem-vinda à Home!'));
    </script>
  `;
}
