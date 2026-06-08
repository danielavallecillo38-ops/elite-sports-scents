// ============================================
// ELITE SPORTS & SCENTS — Products Data
// Para agregar productos: copia un objeto y
// cambia los datos. El precio va en Lempiras.
// ============================================

const PRODUCTS = [
  { id: 1, brand: 'Dior', name: 'Sauvage 3.4 Onz. EDP', vol: '100 ML · Eau de Parfum', price: 5850, img: '', fb: 'Dior' },
  { id: 2, brand: 'Carolina Herrera', name: 'CH Bad Boy Le Parfum 3.4 OZ', vol: '100 ML · Extrait de Parfum', price: 3690, img: '', fb: 'CH' },
  { id: 3, brand: 'Jean Paul Gaultier', name: 'Le Male EDT Set 3 Piezas', vol: '125 ML · Eau de Toilette', price: 3695, img: '', fb: 'JPG' },
  { id: 4, brand: 'Paco Rabanne', name: '1 Million Gold Elixir EDP', vol: '100 ML · Eau de Parfum', price: 3595, img: '', fb: 'PR' },
  { id: 5, brand: 'Giorgio Armani', name: 'Acqua di Giò Parfum 3.3 OZ', vol: '100 ML · Parfum', price: 4500, img: '', fb: 'GA' },
  { id: 6, brand: 'Versace', name: 'Eros Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 2416, img: '', fb: 'VS' },
  { id: 7, brand: 'Hugo Boss', name: 'Boss Bottled #6 EDT 100ml', vol: '100 ML · Eau de Toilette', price: 1880, img: '', fb: 'HB' },
  { id: 8, brand: 'Ralph Lauren', name: 'Polo Red 4.2 Onz. EDT', vol: '125 ML · Eau de Toilette', price: 1650, img: '', fb: 'RL' },
  { id: 9, brand: 'Paco Rabanne', name: 'One Million Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 3070, img: '', fb: 'PR' },
  { id: 10, brand: 'Paco Rabanne', name: 'Invictus Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 1995, img: '', fb: 'PR' },
  { id: 11, brand: 'Paco Rabanne', name: 'Phantom 100ML EDT', vol: '100 ML · Eau de Toilette', price: 3200, img: '', fb: 'PR' },
  { id: 12, brand: 'Yves Saint Laurent', name: 'Y 3.4 OZ EDP', vol: '100 ML · Eau de Parfum', price: 4550, img: '', fb: 'YSL' },
  { id: 13, brand: 'Viktor & Rolf', name: 'Spicebomb Men 3.0 OZ EDT', vol: '90 ML · Eau de Toilette', price: 2900, img: '', fb: 'VR' },
  { id: 14, brand: 'Valentino', name: 'Born in Roma 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 4380, img: '', fb: 'Val' },
  { id: 15, brand: 'Mont Blanc', name: 'Legend Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 1600, img: '', fb: 'MB' },
  { id: 16, brand: 'Bvlgari', name: 'Man in Black Men 3.4 OZ EDP', vol: '100 ML · Eau de Parfum', price: 3100, img: '', fb: 'Bvlg' },
  { id: 17, brand: 'Givenchy', name: 'Gentlemen 100ML EDP', vol: '100 ML · Eau de Parfum', price: 1750, img: '', fb: 'GV' },
  { id: 18, brand: 'Davidoff', name: 'Cool Water Men 4.2 OZ EDT', vol: '125 ML · Eau de Toilette', price: 935, img: '', fb: 'Dav' },
  { id: 19, brand: 'Tommy Hilfiger', name: 'Tommy 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 1350, img: '', fb: 'TH' },
  { id: 20, brand: 'Nautica', name: 'Voyage Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 600, img: '', fb: 'Nau' },
  { id: 21, brand: 'Lattafa', name: 'Asad Men 3.4 OZ EDP', vol: '100 ML · Eau de Parfum', price: 950, img: '', fb: 'Lat' },
  { id: 22, brand: 'Lattafa', name: 'Khamrah Unisex EDP 100ML', vol: '100 ML · Eau de Parfum', price: 1050, img: '', fb: 'Lat' },
  { id: 23, brand: 'Lattafa', name: 'Fakhar Man EDP 100ML', vol: '100 ML · Eau de Parfum', price: 850, img: '', fb: 'Lat' },
  { id: 24, brand: 'Armaf', name: 'Club De Nuit Iconic Men 100ML EDP', vol: '100 ML · Eau de Parfum', price: 1438, img: '', fb: 'Arm' },
  { id: 25, brand: 'Lacoste', name: 'Red Men 4.2 OZ EDT', vol: '125 ML · Eau de Toilette', price: 1790, img: '', fb: 'Lac' },
  { id: 26, brand: 'Lacoste', name: "L'Homme Men 3.4 OZ EDT", vol: '100 ML · Eau de Toilette', price: 1250, img: '', fb: 'Lac' },
  { id: 27, brand: 'Issey Miyake', name: 'Men 4.2 OZ EDT', vol: '125 ML · Eau de Toilette', price: 1550, img: '', fb: 'IM' },
  { id: 28, brand: 'Azzaro', name: 'Wanted Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 2150, img: '', fb: 'Az' },
  { id: 29, brand: 'Azzaro', name: 'Chrome Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 1435, img: '', fb: 'Az' },
  { id: 30, brand: 'Calvin Klein', name: 'Eternity Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 1350, img: '', fb: 'CK' },
  { id: 31, brand: 'Calvin Klein', name: 'One 3.4 OZ EDT Unisex', vol: '100 ML · Eau de Toilette', price: 960, img: '', fb: 'CK' },
  { id: 32, brand: 'Perry Ellis', name: '360 Black Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 900, img: '', fb: 'PE' },
  { id: 33, brand: 'Al Haramain', name: "L'Aventure Men 3.4 OZ EDP", vol: '100 ML · Eau de Parfum', price: 1150, img: '', fb: 'ALH' },
  { id: 34, brand: 'AFNAN', name: '9PM Men 3.4 OZ EDP', vol: '100 ML · Eau de Parfum', price: 1050, img: '', fb: 'AFN' },
  { id: 35, brand: 'Antonio Banderas', name: 'Icon Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 695, img: '', fb: 'AB' },
  { id: 36, brand: 'Adidas', name: 'Victory League Men 3.4 OZ EDT', vol: '100 ML · Eau de Toilette', price: 350, img: '', fb: 'Add' }
];

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <div class="product-img">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<span class=product-img-fb>${p.fb}</span>'">`
          : `<span class="product-img-fb">${p.fb}</span>`
        }
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-vol">${p.vol}</div>
        <div class="product-price">L. ${p.price.toLocaleString('es-HN')}</div>
        <button class="add-to-cart" id="btn${p.id}" onclick="addToCart(${p.id})">
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProducts);
