import { addCadastro } from "../store.js";
import { fireToast } from "../app.js";

export default function Cadastro(){
  return `
    <section id="doar" class="container section">
      <h2 class="h2 mb-16">Cadastro para Apoio</h2>

      <form class="form" id="formCadastro" novalidate>
        <div class="form__row">
          <label for="nome">Nome*</label>
          <input id="nome" name="nome" type="text" required minlength="3" placeholder="Seu nome completo" />
          <small class="form__msg">Mínimo 3 caracteres.</small>
        </div>

        <div class="form__row">
          <label for="email">E-mail*</label>
          <input id="email" name="email" type="email" required placeholder="voce@exemplo.com" />
          <small class="form__msg">Informe um e-mail válido.</small>
        </div>

        <div class="form__row">
          <label for="valor">Valor (R$)*</label>
          <input id="valor" name="valor" type="number" min="10" step="5" required placeholder="Ex.: 50" />
          <small class="form__msg">Mínimo R$10.</small>
        </div>

        <div class="form__actions">
          <button class="btn btn--primary" type="submit">Doar agora</button>
          <button class="btn btn--ghost" type="reset">Limpar</button>
        </div>
      </form>

      <div class="alerts mt-16">
        <div class="alert alert--success" hidden id="alertSucesso">Obrigado! Doação registrada!</div>
        <div class="alert alert--danger" hidden id="alertErro">Ops! Verifique os dados.</div>
      </div>
    </section>
  `;
}

// ESTA FUNÇÃO SERÁ CHAMADA PELO ROUTER
export function CadastroInit(){
  const form = document.getElementById('formCadastro');
  const alertOk = document.getElementById('alertSucesso');
  const alertErr = document.getElementById('alertErro');

  function emailValido(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nome  = form.nome.value.trim();
    const email = form.email.value.trim();
    const valor = Number(form.valor.value);

    let erro = false;
    if (nome.length < 3) erro = true;
    if (!emailValido(email)) erro = true;
    if (!(valor >= 10)) erro = true;

    alertErr.hidden = !erro;
    alertOk.hidden = erro;

    if (erro){
      return;
    }

    addCadastro({ nome, email, valor });
    fireToast("Doação registrada com sucesso!");
    form.reset();
  });
}
