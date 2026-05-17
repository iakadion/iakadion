/**
 * Componente Hero
 * Seção principal com nome, tagline e CTA.
 */
export function renderHero(container) {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'hero';
  hero.innerHTML = `
    <h1>Genho<br/><span>Akadion</span></h1>
    <p>Creator &bull; Developer &bull; Artist</p>
    <a href="#connect" class="cta">Get in touch &rarr;</a>
  `;
  container.appendChild(hero);
}
