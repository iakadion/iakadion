/**
 * Componente Sidebar
 * Navegação lateral com ícones e links.
 */
export function renderSidebar(container) {
  const nav = document.createElement('nav');
  nav.id = 'sidebar';
  nav.innerHTML = `
    <div class="sidebar-inner">
      <a href="#" class="nav-logo" title="Início">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span>G.A.</span>
      </a>
      <div class="nav-links" role="navigation" aria-label="Navegação principal">
        <a href="#about" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>About</span>
        </a>
        <a href="#work" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span>Work</span>
        </a>
        <a href="#connect" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1-2.5 2.5-2.5 2.5s4.5 4.5 10 4.5 10-4.5 10-4.5-1-1.5-2.5-2.5"/><path d="M12 11.5c-1.5 0-3-.5-3-2s1.5-2 3-2 3 .5 3 2-1.5 2-3 2z"/><circle cx="12" cy="15" r="6"/></svg>
          <span>Connect</span>
        </a>
      </div>
      <div class="nav-social">
        <a href="https://github.com/iakadion" target="_blank" title="GitHub" class="nav-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>
        </a>
        <a href="https://x.com/iakadion" target="_blank" title="Twitter / X" class="nav-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L3.99 21.75H.69l7.73-8.835L1.072 2.25H5.37l4.617 6.085 5.35-6.085z m-1.23 17.415 1.583-2.226-9.796-12.89h-2.27v.001l6.048 7.96-6.048 7.66h6.047l3.048-4.09 2.44 3.315z" fill="currentColor"/></svg>
        </a>
        <a href="mailto:ogenhoanimation01@gmail.com" title="Email" class="nav-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 5l10 7 10-7"/></svg>
        </a>
      </div>
    </div>
  `;
  container.appendChild(nav);

  // Adicionar atalho de teclado para foco
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const logo = nav.querySelector('.nav-logo');
      if (logo) logo.focus();
    }
  });
}
