# Elite Sports & Scents — Sitio Web
## Guía para publicar en GitHub Pages (GRATIS)

---

## ESTRUCTURA DE ARCHIVOS

```
elite-sports-scents/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   ├── products.js     ← Lista de productos y precios
│   ├── cart.js         ← Carrito y PayPal
│   └── main.js         ← Navegación y formularios
├── images/
│   └── logo.png        ← ⚠️ AGREGAR TU LOGO AQUÍ
└── README.md           ← Este archivo
```

---

## PASO 1 — AGREGAR EL LOGO

1. Copia tu logo (`Imagen_de_WhatsApp_...png`) a la carpeta `images/`
2. Renómbralo a `logo.png`

---

## PASO 2 — PUBLICAR EN GITHUB PAGES

### Opción A — Desde GitHub.com (más fácil)

1. Ve a **github.com** e inicia sesión (o crea cuenta gratis)
2. Clic en **"New repository"** (botón verde)
3. Nombre del repositorio: `elite-sports-scents`
4. Marca **"Public"**
5. Clic en **"Create repository"**
6. En la página siguiente, clic en **"uploading an existing file"**
7. **Arrastra TODA la carpeta** `elite-sports-scents` al área de carga
8. Clic en **"Commit changes"**
9. Ve a **Settings → Pages**
10. En "Source" selecciona **"Deploy from a branch"**
11. Branch: **main** / Folder: **/ (root)**
12. Clic en **"Save"**

✅ En 2-3 minutos tu sitio estará en:
`https://TU-USUARIO.github.io/elite-sports-scents`

---

### Opción B — Desde VS Code (para futuras actualizaciones)

1. Instala **Git**: https://git-scm.com
2. Instala **VS Code**: https://code.visualstudio.com
3. Abre la carpeta en VS Code
4. Terminal → `git init`
5. `git add .`
6. `git commit -m "Elite Sports & Scents"`
7. Conecta con GitHub y sube

---

## AGREGAR FOTOS A LOS PRODUCTOS

1. Guarda las fotos en la carpeta `images/`
   - Ejemplo: `images/dior-sauvage.jpg`
2. Abre `js/products.js`
3. Busca el producto y cambia `img: ''` por `img: 'images/dior-sauvage.jpg'`

Ejemplo:
```js
{ id: 1, brand: 'Dior', name: 'Sauvage EDP', ..., img: 'images/dior-sauvage.jpg' }
```

---

## AGREGAR O EDITAR PRODUCTOS

Abre `js/products.js` y agrega un objeto al array PRODUCTS:

```js
{ id: 37, brand: 'NUEVA MARCA', name: 'NOMBRE PRODUCTO', vol: '100 ML · EDP', price: 1500, img: '', fb: 'NM' },
```

- `id`: número único (el siguiente en la lista)
- `brand`: nombre de la marca
- `name`: nombre completo del producto
- `vol`: tamaño y tipo
- `price`: precio en Lempiras (sin puntos ni símbolos)
- `img`: ruta a la foto (vacío si no hay foto)
- `fb`: texto que aparece cuando no hay foto

---

## CAMBIAR PRECIOS

1. Abre `js/products.js`
2. Busca el producto
3. Cambia el número en `price:`
4. Guarda y sube a GitHub

---

## DATOS IMPORTANTES EN EL CÓDIGO

| Dato | Archivo | Dónde buscar |
|------|---------|------|
| Número WhatsApp | `js/cart.js` | `const WA_NUMBER = '50489758866'` |
| PayPal Client ID | `js/cart.js` | `const PP_CLIENT_ID = '...'` |
| Correo PayPal | `index.html` | Sección pagos |
| Datos bancarios | `index.html` | Sección pagos |

---

## DOMINIO PERSONALIZADO (opcional)

Si después compras un dominio (ej: en Hostinger por ~$10/año):
1. En GitHub Pages → Custom domain → escribe tu dominio
2. En tu registrador de dominio → apunta los DNS a GitHub

---

*Elite Sports & Scents — Honduras 2026*
*Fundadores: Mesyelin Daniela Padilla Vallecillo & Erick Vallecillo*
