// ============================================
// ELITE SPORTS & SCENTS — Main JS
// ============================================

const WA = '50489758866';

// ── NAV SCROLL ────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ───────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// Close menu clicking outside
document.addEventListener('click', e => {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('menuBtn');
  if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ── FAQ ───────────────────────────────────
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  if (!isOpen) item.classList.add('active');
}

// ── CONTACT FORM → WHATSAPP ───────────────
function sendContactWA(e) {
  e.preventDefault();
  const f = e.target;
  const name = f.querySelector('input[type=text]').value;
  const phone = f.querySelector('input[type=tel]').value;
  const interest = f.querySelector('select').value;
  const msg = f.querySelector('textarea').value;
  const text = `Hola, soy ${name}. Me interesa: ${interest || 'información general'}. ${msg} Mi WhatsApp: ${phone}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
}

// ── SMOOTH ANCHOR ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
