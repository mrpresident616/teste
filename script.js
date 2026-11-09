const WHATSAPP_NUMBER = '5511994877594';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const products = [
  {
    id: 1, name: 'Frutas Congeladas', brand: 'Rei das Polpas & Frutas', category: 'congelados', categoryLabel: 'Congelados',
    info: 'Pacotes de aproximadamente 1 kg · Morango, Manga e Acerola',
    variants: [
      { label:'Morango', image:'assets/frutas-morango.jpg', price:'Consulte Valor', box:'Pedido pelo WhatsApp' },
      { label:'Manga', image:'assets/frutas-manga.jpg', price:'Consulte Valor', box:'Pedido pelo WhatsApp' },
      { label:'Acerola', image:'assets/frutas-acerola-nova.jpg', price:'Consulte Valor', box:'Pedido pelo WhatsApp' }
    ]
  },
  {
    id: 2, name: 'Açaí 1 Litro', brand: 'Other Açaí', category: 'acai', categoryLabel: 'Açaí & Sorvetes',
    info: 'Pote 1 L · 800 g · caixa com 12 unidades · sabores Banana, Morango e Guaraná', showBadge: false,
    variants: [
      { label:'Banana, Morango e Guaraná', image:'assets/acai-linha-completa.jpg', price:'Consulte Valor', box:'Pedido pelo WhatsApp' }
    ]
  },
  {
    id: 3, name: 'Queijo Fresco de Soro e Leite', brand: 'Paranaíba', category: 'laticinios', categoryLabel: 'Laticínios', info:'Consulte peso e condição atual da caixa',
    variants:[{label:'Tradicional',image:'assets/queijo-paranaiba.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 4, name: 'Batata Palito Congelada', brand: 'Uai', category: 'congelados', categoryLabel: 'Congelados', info:'Pacote 2 kg · caixa 14 kg',
    variants:[{label:'2 kg',image:'assets/batata-uai-nova.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 5, name: 'Hambúrguer Tradicional', brand: 'Brasil Burger', category: 'congelados', categoryLabel: 'Congelados', info:'56 g cada · caixa com 36 unidades · 2,016 kg', visualClass:'landscape', showBadge:false,
    variants:[{label:'Tradicional',image:'assets/hamburguer-brasil-burger-original.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 6, name: 'Mortadela', brand: 'Maná', category: 'embutidos', categoryLabel: 'Frios & Embutidos', info:'Produto para lanches e porções',
    variants:[{label:'Tradicional',image:'assets/mortadela-mana.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 7, name: 'Embutido Cozido Leader', brand: 'Frigorífico Maringá', category: 'embutidos', categoryLabel: 'Frios & Embutidos', info:'Peso líquido 2 kg',
    variants:[
      {label:'2 gomos · cód. 1111',image:'assets/leader-2-gomos.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'},
      {label:'Tradicional · cód. 1112',image:'assets/leader-2kg.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}
    ]
  },
  {
    id: 8, name: 'Sorvetinho', brand: 'Delicinho', category: 'acai', categoryLabel: 'Açaí & Sorvetes', info:'Sorvete super cremoso · sabores variados',
    variants:[{label:'Sabores variados',image:'assets/delicinho.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 9, name: 'Bandeja 540g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Morango, Morango e Coco e Kids · caixa com 12 unidades',
    variants:[{label:'Sabores disponíveis',image:'assets/fruttbom-bandeja-540.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 10, name: 'Petit 270g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Bandeja Petit · caixa com 24 unidades',
    variants:[{label:'Petit',image:'assets/fruttbom-petit.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 11, name: 'Leite Fermentado 850g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Tamanho família · caixa com 9 unidades',
    variants:[{label:'850g',image:'assets/fruttbom-leite-850.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 12, name: 'Leite Fermentado 140g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Caixa com 24 unidades',
    variants:[{label:'140g',image:'assets/fruttbom-leite-140.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 13, name: 'Dupla Camada', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios',
    info:'Peso 110g · caixa com 24 unidades', showBadge:false,
    variants:[{label:'Morango',image:'assets/fruttbom-dupla-camada.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 14, name: 'Linha Sabores 140g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios',
    info:'140g · Coco, Morango, Ameixa, Salada de Frutas e Kids · caixa com 24 unidades', showBadge:false,
    variants:[{label:'Linha completa',image:'assets/fruttbom-linha-sabores-140-completa.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 15, name: 'Linha Sabores 900g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios',
    info:'900g · Morango, Salada de Frutas, Coco e Ameixa · caixa com 9 unidades', showBadge:false,
    variants:[{label:'Linha completa',image:'assets/fruttbom-linha-sabores-900-completa.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 16, name: 'Tamanho Família 1250g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios',
    info:'1250g · sabores Morango e Salada de Frutas · caixa com 9 unidades', showBadge:false,
    variants:[{label:'Morango e Salada de Frutas',image:'assets/fruttbom-tamanho-familia-1250-completa.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 17, name: 'Fruttbom Kids 110g', brand: 'Fruttbom Kids', category: 'laticinios', categoryLabel: 'Laticínios',
    info:'110g · Salada de Frutas, Morango e Coco · caixa com 60 unidades', showBadge:false,
    variants:[{label:'Linha completa',image:'assets/fruttbom-kids-110-completa.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 18, name: 'Frutito Ball 125g', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Com confeitos · caixa com 24 unidades',
    variants:[{label:'Linha Ball',image:'assets/fruttbom-ball.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  },
  {
    id: 19, name: 'Laranja, Cenoura e Mel', brand: 'Fruttbom', category: 'laticinios', categoryLabel: 'Laticínios', info:'Copo 160g · caixa com 24 unidades',
    variants:[{label:'Laranja, Cenoura e Mel',image:'assets/fruttbom-laranja-170.jpg',price:'Consulte Valor',box:'Pedido pelo WhatsApp'}]
  }
];

const carouselState = new Map();
const timers = new Map();

function stateFor(id) {
  if (!carouselState.has(id)) carouselState.set(id, 0);
  return carouselState.get(id);
}

function whatsappLink(product, variant) {
  const sabor = variant?.label ? ` (${variant.label})` : '';
  const text = encodeURIComponent(`Olá Ale! Tenho interesse em ${product.name}${sabor} - ${product.brand}.`);
  return `${WHATSAPP_BASE}?text=${text}`;
}

function productCard(product) {
  const index = Math.min(stateFor(product.id), product.variants.length - 1);
  const variant = product.variants[index];
  const multiple = product.variants.length > 1;
  const dots = multiple ? `<div class="carousel-dots" aria-label="Sabores">${product.variants.map((v,i)=>`<button type="button" class="carousel-dot ${i===index?'active':''}" data-dot="${i}" aria-label="Ver ${v.label}"></button>`).join('')}</div>` : '';
  const arrows = multiple ? `<button type="button" class="carousel-btn carousel-prev" data-carousel="prev" aria-label="Sabor anterior">‹</button><button type="button" class="carousel-btn carousel-next" data-carousel="next" aria-label="Próximo sabor">›</button>` : '';
  const badge = product.showBadge === false ? '' : `<div class="flavor-badge">${variant.label}</div>`;
  const visualClass = product.visualClass ? ` ${product.visualClass}` : '';
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-visual${visualClass}">
        <div class="product-slide"><img src="${variant.image}" alt="${product.name} - ${variant.label}" loading="lazy" draggable="false"></div>
        ${arrows}
        ${badge}
        ${dots}
      </div>
      <div class="product-meta">
        <div class="product-category">${product.categoryLabel}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-brand">${product.brand}</div>
        <div class="product-prices">
          <div class="price-block"><span>Preço unidade</span><strong>${variant.price}</strong></div>
          <div class="price-block box"><span>Caixa</span><strong>${variant.box}</strong></div>
        </div>
        <div class="product-info">${product.info}</div>
        <a class="btn btn-whatsapp product-order" href="${whatsappLink(product,variant)}" target="_blank" rel="noopener">Pedir pelo WhatsApp</a>
      </div>
    </article>`;
}

function renderProducts(filter='all') {
  timers.forEach(clearInterval); timers.clear();
  const grid = document.getElementById('product-grid');
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = list.map(productCard).join('');
  bindCarousels();
}

function updateCard(card, directionOrIndex) {
  const product = products.find(p => p.id === Number(card.dataset.productId));
  if (!product || product.variants.length < 2) return;
  let index = stateFor(product.id);
  if (typeof directionOrIndex === 'number') index = directionOrIndex;
  else index = directionOrIndex === 'next' ? index + 1 : index - 1;
  index = (index + product.variants.length) % product.variants.length;
  carouselState.set(product.id,index);
  const v = product.variants[index];
  const img = card.querySelector('.product-slide img');
  img.style.opacity = '0';
  setTimeout(()=>{ img.src=v.image; img.alt=`${product.name} - ${v.label}`; img.style.opacity='1'; },120);
  const badge = card.querySelector('.flavor-badge');
  if (badge) badge.textContent=v.label;
  const priceBlocks=card.querySelectorAll('.price-block strong');
  priceBlocks[0].textContent=v.price; priceBlocks[1].textContent=v.box;
  card.querySelector('.product-order').href=whatsappLink(product,v);
  card.querySelectorAll('.carousel-dot').forEach((dot,i)=>dot.classList.toggle('active',i===index));
}

function bindCarousels() {
  document.querySelectorAll('.product-card').forEach(card => {
    const product = products.find(p => p.id === Number(card.dataset.productId));
    if (!product || product.variants.length < 2) return;
    card.querySelectorAll('[data-carousel]').forEach(btn=>btn.addEventListener('click',()=>updateCard(card,btn.dataset.carousel)));
    card.querySelectorAll('[data-dot]').forEach(btn=>btn.addEventListener('click',()=>updateCard(card,Number(btn.dataset.dot))));

    let startX = null;
    const visual = card.querySelector('.product-visual');
    visual.addEventListener('pointerdown',e=>{startX=e.clientX});
    visual.addEventListener('pointerup',e=>{
      if(startX===null) return;
      const dx=e.clientX-startX; startX=null;
      if(Math.abs(dx)>45) updateCard(card,dx<0?'next':'prev');
    });
    visual.addEventListener('pointercancel',()=>{startX=null});

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer=setInterval(()=>updateCard(card,'next'),5000);
      timers.set(product.id,timer);
      card.addEventListener('mouseenter',()=>{const t=timers.get(product.id);if(t){clearInterval(t);timers.delete(product.id)}});
    }
  });
}

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

document.getElementById('year').textContent=new Date().getFullYear();
renderProducts();