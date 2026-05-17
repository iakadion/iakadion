/**
 * Arquivo principal (main.js)
 * Ponto de entrada: inicializa todos os componentes e aplica estilos/CSS.
 */
import { renderSidebar } from './components/sidebar.js';
import { renderHero } from './components/hero.js';
import { renderWhoAmI } from './components/whoami.js';
import { renderProjects } from './components/projects.js';
import { renderConnect } from './components/connect.js';
import { renderFooter } from './components/footer.js';

function injectGlobalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --bg: #FAFAF5;
      --fg: #1a1a1a;
      --gold: #B8860B;
      --amber: #FBBF24;
      --deep-gold: #D4A017;
      --muted: #78716c;
      --light: #a8a29e;
      --font-body: 'JetBrains Mono', 'Outfit', sans-serif;
      --font-mono: 'Space Grotesk', 'JetBrains Mono', monospace;
      --font-display: 'JetBrains Mono', 'Outfit', monospace;
    }

    * { margin:0; padding:0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: var(--font-body);
      background: var(--bg);
      color: var(--fg);
      overflow-x: hidden;
      min-height: 100vh;
    }
    .font-mono { font-family: var(--font-mono); }

    /* Orbs */
    .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
    .orb-1 { width:600px; height:600px; background: rgba(250,204,21,0.15); top:-200px; right:-150px; }
    .orb-2 { width:500px; height:500px; background: rgba(251,191,36,0.1); bottom:-100px; left:-200px; }
    .orb-3 { width:350px; height:350px; background: rgba(245,158,11,0.08); top:50%; left:50%; transform: translate(-50%,-50%); }

    /* Layout */
    .container { position: relative; z-index: 1; max-width: 960px; margin: 0 auto; padding: 0 24px; }

    /* Section */
    .section { padding: 80px 0; }
    .section-label { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; color: var(--deep-gold); margin-bottom: 12px; }
    .section-title { font-family: var(--font-display); font-size: clamp(32px, 5vw, 48px); font-weight: 700; line-height: 1.1; color: var(--fg); margin-bottom: 32px; }

    /* Grid */
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    @media (max-width: 768px) { .grid-3 { grid-template-columns: 1fr; } }

    /* Card */
    .card { background: #fff; border: 1px solid rgba(0,0,0,0.04); border-radius: 16px; padding: 28px 24px; transition: all .4s; }
    .card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(212,160,23,0.08); }
    .card h3 { font-family: var(--font-body); font-size: 18px; font-weight: 700; margin-bottom: 8px; }
    .card p { font-size: 14px; line-height: 1.6; color: var(--muted); }

    /* Links Grid */
    .links-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    @media (max-width: 768px) { .links-grid { grid-template-columns: repeat(2, 1fr); } }
    .link-card {
      display: flex; align-items: center; gap: 12px;
      padding: 16px 20px; background: #fff;
      border: 1px solid rgba(0,0,0,0.04); border-radius: 14px;
      text-decoration: none; color: var(--fg);
      transition: all .3s; font-family: var(--font-mono);
      font-size: 13px; font-weight: 600;
    }
    .link-card:hover { border-color: var(--deep-gold); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,160,23,0.08); }
    .link-card .lc-icon { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; }
    .link-card .lc-text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* Hero */
    .hero { text-align: center; padding: 120px 0 80px; }
    .hero h1 { font-family: var(--font-display); font-size: clamp(48px, 8vw, 88px); font-weight: 700; line-height: 1; letter-spacing: -2px; color: var(--fg); }
    .hero h1 span { color: var(--deep-gold); }
    .hero p { font-family: var(--font-mono); font-size: clamp(14px, 2vw, 18px); font-weight: 400; letter-spacing: 4px; text-transform: uppercase; color: var(--light); margin-top: 24px; }
    .hero .cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 40px; padding: 14px 32px; background: var(--fg); color: var(--bg); font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 100px; transition: all .4s; }
    .hero .cta:hover { background: var(--deep-gold); color: var(--fg); transform: translateY(-2px); }

    /* Sidebar Styles */
    nav { position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between; padding: 24px 0; border-bottom: 1px solid rgba(0,0,0,0.06); }
    .sidebar-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
    .nav-logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-weight: 700; font-size: 14px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); text-decoration: none; transition: color .3s; }
    .nav-logo:hover { color: var(--deep-gold); }
    .nav-logo svg { stroke: var(--gold); transition: stroke .3s, transform .4s; }
    .nav-logo:hover svg { stroke: var(--deep-gold); transform: rotate(90deg); }
    .nav-links { display: flex; gap: 8px; }
    .nav-link { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 100px; text-decoration: none; color: var(--muted); font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; transition: all .3s; }
    .nav-link:hover { color: var(--deep-gold); background: rgba(212,160,23,0.06); }
    .nav-link svg { stroke: var(--muted); transition: stroke .3s; }
    .nav-link:hover svg { stroke: var(--deep-gold); }
    .nav-social { display: flex; align-items: center; gap: 10px; }
    .nav-social-link { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; color: var(--muted); border: 1px solid rgba(0,0,0,0.06); transition: all .3s; }
    .nav-social-link:hover { color: var(--deep-gold); border-color: var(--deep-gold); transform: translateY(-2px); }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-social { display: none; }
    }

    /* Footer */
    footer { padding: 48px 0 40px; border-top: 1px solid rgba(0,0,0,0.06); }
    .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 24px; }
    .footer-brand { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .footer-logo { font-family: var(--font-mono); font-weight: 700; font-size: 14px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); }
    .footer-tag { font-family: var(--font-body); font-size: 14px; color: var(--muted); }
    .footer-links { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
    .footer-links a { color: var(--muted); transition: color .3s, transform .3s; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.06); }
    .footer-links a:hover { color: var(--deep-gold); border-color: var(--deep-gold); transform: translateY(-2px); }
    .footer-copy { font-size: 12px; color: var(--light); letter-spacing: 2px; text-transform: uppercase; }
    .footer-copy p { margin: 0; }
  `;
  document.head.appendChild(style);
}

function renderOrbs() {
  const app = document.getElementById('app');
  if (!app) return;
  app.insertAdjacentHTML('beforebegin', `
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  `);
}

document.addEventListener('DOMContentLoaded', () => {
  injectGlobalStyles();
  renderOrbs();

  const app = document.getElementById('app');
  if (!app) { console.error('Elemento #app não encontrado'); return; }

  const container = document.createElement('div');
  container.className = 'container';

  renderSidebar(container);
  renderHero(container);
  renderWhoAmI(container);
  renderProjects(container);
  renderConnect(container);
  renderFooter(container);

  app.appendChild(container);
});
