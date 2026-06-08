// ============================================
// ELITE SPORTS & SCENTS — Cart & PayPal
// ============================================

const PP_CLIENT_ID = 'AcCIiWlwbl6OAE_7g67ILM2U6GrI8ChUWe_W_2suU8F08NrDeYyjbAvCBruKj7KcmiOqBUZiLn-Qb48n';
const HNL_TO_USD = 0.040;
const WA_NUMBER = '50489758866';

let cart = [];
let ppLoaded = false;

// ── ADD TO CART ──────────────────────────
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  openCart();
  const btn = document.getElementById('btn' + id);
  if (btn) {
    btn.textContent = '✓ Agregado';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = '🛒 Agregar al carrito';
      btn.classList.remove('added');
    }, 1600);
  }
}

// ── UPDATE CART UI ────────────────────────
function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  // count badge
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }

  // total
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) {
    totalEl.textContent = 'L. ' + total.toLocaleString('es-HN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  const footer = document.getElementById('cartFooter');
  const itemsEl = document.getElementById('cartItems');

  if (!cart.length) {
    if (itemsEl) itemsEl.innerHTML = `<div class="cart-empty"><span>✦</span><p>Tu carrito está vacío</p></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (itemsEl) {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-img">
          ${i.img
            ? `<img src="${i.img}" alt="${i.name}" onerror="this.parentElement.innerHTML='<span>${i.fb}</span>'">`
            : `<span>${i.fb}</span>`
          }
        </div>
        <div class="cart-item-info">
          <div class="cart-item-brand">${i.brand}</div>
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">L. ${i.price.toLocaleString('es-HN')}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeItem(${i.id})">✕</button>
      </div>
    `).join('');
  }

  if (footer) footer.style.display = 'block';
  loadPayPal(total);
}

// ── CHANGE QTY / REMOVE ───────────────────
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

// ── CART OPEN / CLOSE ─────────────────────
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
}

// ── PAYPAL ────────────────────────────────
function loadPayPal(totalHNL) {
  const container = document.getElementById('paypal-button-container');
  if (!container) return;
  container.innerHTML = '';

  const amountUSD = Math.max(totalHNL * HNL_TO_USD, 1.00).toFixed(2);

  if (window.paypal) {
    renderPayPalBtn(amountUSD, totalHNL);
    return;
  }

if (ppLoaded) return;
ppLoaded = true;

const script = document.createElement('script');
script.setAttribute('data-sdk-integration-source', 'button-factory');
script.src = `https://www.paypal.com/sdk/js?client-id=${PP_CLIENT_ID}&currency=USD&components=buttons`;
  script.onload = () => renderPayPalBtn(amountUSD, totalHNL);
  script.onerror = () => {
    ppLoaded = false;
    if (container) container.innerHTML = '<p style="font-size:0.7rem;color:#888;text-align:center;">PayPal no disponible. Usa WhatsApp para pedir.</p>';
  };
  document.head.appendChild(script);
}

function renderPayPalBtn(amountUSD, totalHNL) {
  if (!window.paypal) return;
  const desc = cart.map(i => `${i.qty}x ${i.name}`).join(', ');

  paypal.Buttons({
    style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', height: 44 },
    createOrder: (data, actions) => actions.order.create({
      purchase_units: [{ amount: { value: amountUSD, currency_code: 'USD' }, description: `Elite Sports & Scents — ${desc}` }]
    }),
    onApprove: (data, actions) => actions.order.capture().then(details => {
      cart = [];
      updateCartUI();
      closeCart();
      document.getElementById('successModal').classList.add('open');
      const name = details.payer?.name?.given_name || 'Cliente';
      const msg = `Hola! Acabo de pagar por PayPal. Nombre: ${name} | ID: ${details.id}`;
      setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank'), 1500);
    }),
    onError: () => alert('Error con el pago. Por favor intenta de nuevo o contáctanos por WhatsApp al 8975-8866.')
  }).render('#paypal-button-container');
}

// ── ORDER BY WHATSAPP ─────────────────────
function sendCartWA() {
  if (!cart.length) return;
  const items = cart.map(i => `${i.qty}x ${i.brand} ${i.name} - L.${i.price.toLocaleString('es-HN')}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `Hola, quiero hacer este pedido:\n${items}\n\nTotal: L.${total.toLocaleString('es-HN')}\nPago: Transferencia o contra entrega`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}
