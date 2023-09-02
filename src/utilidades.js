export const catalogo = [{
  id: "1",
  marca: 'Adidas',
  nome: 'Camiseta azul',
  preco: 70.00,
  imagem: 'produto1.jpg',
  feminino: true,
}, {
  id: "2",
  marca: 'Adidas',
  nome: 'Camisa azul',
  preco: 90.00,
  imagem: 'produto2.jpg',
  feminino: false,
}, {
  id: "3",
  marca: 'Adidas',
  nome: 'Conjunto vermelho masculino',
  preco: 110.00,
  imagem: 'produto3.jpg',
  feminino: false,
}, {
  id: "4",
  marca: 'Adidas',
  nome: 'Conjunto vermelho feminino',
  preco: 99.90,
  imagem: 'produto4.jpg',
  feminino: true,
}, {
  id: "5",
  marca: 'Lacoste',
  nome: 'Moletom feminino azul',
  preco: 147.90,
  imagem: 'produto5.jpg',
  feminino: true,
}, {
  id: "6",
  marca: 'Lacoste',
  nome: 'Moletom masculino azul',
  preco: 152.90,
  imagem: 'produto6.jpg',
  feminino: false,
}];

export function apagarDoLocalStorage() {
  localStorage.removeItem(chave);
}

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify (informacao))
}
function lerSalvarLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml)
  
  const elementoArticle = document.createElement("article");
  const articleClasses = [
  'flex',
  'bg-stone-200',
  'rounded-lg',
  'p-1',
  'relative',
  'mb-2',
  'w-96'
  ];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  elementoArticle.classList.add("flex");
  elementoArticle.classList.add("bg-slate-100")
  
  const cartaoProdutoCarrinho = `
        <img src="/img/${produto.imagem}" class="h-24 rounded-lg" alt="${produto.nome}"/>
        <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: P</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <p id="quantidade-${quantidade.id}" class="ml-2">${quantidadeProduto}</p>
        </div>
  `;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(cartaoProdutoCarrinho);
}