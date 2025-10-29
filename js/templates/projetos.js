export default function Projetos(){
  const projetos = [
    { titulo: 'Alfabetização Digital', desc: 'Capacitação básica em informática.', tags:['Educação','Nível 1'] },
    { titulo: 'Saúde da Mulher', desc: 'Ações preventivas e oficinas.', tags:['Saúde','Oficinas'] },
    { titulo: 'Eco Jovem', desc: 'Mutirões e educação ambiental.', tags:['Meio Ambiente','Mutirão'] },
  ];

  const cards = projetos.map(p => `
    <article class="col-4 col-lg-6 col-sm-12 card">
      <div class="card__body">
        <h3 class="h4">${p.titulo}</h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t=>`<span class="badge">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card__footer">
        <button class="btn btn--secondary btn--sm">Detalhes</button>
        <a class="btn btn--primary btn--sm" href="#" data-route="cadastro">Participar</a>
      </div>
    </article>
  `).join('');

  return `
    <section class="container section">
      <h2 class="h2 mb-24">Projetos em destaque</h2>
      <div class="grid grid-12 gap-24">
        ${cards}
      </div>
    </section>
  `;
}
