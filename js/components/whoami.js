/**
 * Componente WhoAmI (About)
 * Seção "About" com cards de identidade.
 */
export function renderWhoAmI(container) {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'about';
  section.innerHTML = `
    <div class="section-label">About</div>
    <div class="section-title">Multi-dimensional<br/>creator.</div>
    <div class="grid-3">
      <div class="card">
        <h3>Music</h3>
        <p>Musician, songwriter, audio engineer &amp; producer crafting sonic experiences.</p>
      </div>
      <div class="card">
        <h3>Tech</h3>
        <p>Full-stack developer building languages, compilers, AI integrations &amp; autonomous systems.</p>
      </div>
      <div class="card">
        <h3>Creative</h3>
        <p>Filmmaker, visual designer, writer &amp; game developer exploring new frontiers.</p>
      </div>
    </div>
  `;
  container.appendChild(section);
}
