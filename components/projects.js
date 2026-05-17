/**
 * Componente Projects (Work)
 * Seção de projetos e invenções.
 */
export function renderProjects(container) {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'work';
  section.innerHTML = `
    <div class="section-label">Work</div>
    <div class="section-title">Projects &amp;<br/>inventions.</div>
    <div class="grid-3">
      <div class="card">
        <h3>Akia.js</h3>
        <p>Singleton renderer transpiling 7+ languages to JavaScript. 95% complete.</p>
      </div>
      <div class="card">
        <h3>.ak Language</h3>
        <p>Proprietary web language with native compiler design. 88% complete.</p>
      </div>
      <div class="card">
        <h3>Readgex</h3>
        <p>Intelligent AI browser with autonomous agent system. 82% complete.</p>
      </div>
      <div class="card">
        <h3>Bilbid</h3>
        <p>Semantic knowledge engine with structured knowledge graphs. 87% complete.</p>
      </div>
      <div class="card">
        <h3>IUKKA Player</h3>
        <p>Quantum streaming platform with immersive sound design. 76% complete.</p>
      </div>
      <div class="card">
        <h3>SHIYO</h3>
        <p>Social media portfolio for showcasing &amp; connecting. 70% complete.</p>
      </div>
    </div>
  `;
  container.appendChild(section);
}
