import { lerLocalStorage
  desenharProdutoNoCarrinhoSimples
} from "./src/utilidades"

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `
  <p class="text-xl text-bold my-4 ">${new Date(pedidoComData.dataPedido).toLocaleDateSting('pt-BT', {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
  <section id='container-pedidos-${pedido.dataPedido}' class="bg-slate-300 p-3 rounded-md"></section>
  `
  const main = document.getElementByTagName('main')[0];
  main.innerHTML += elementoPedido;
  for(const idProduto in pedidoComData.pedido){
    desenharProdutoNoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto])
  }
  
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for(const pedidoComData of hitorico){
    criarPedidoHistorico(pedidoComData);
  }
}

renderizarHistoricoPedidos();