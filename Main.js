//catalogo nao interativo com o banco de dados ainda
import { inicializarFiltros } from "./src/filtrosCatalogo"
import { renderizarCatalogo } from "./cartaoProduto"
import { inicializarCarrinho, atualizarPrecoCarrinho, renderizarProdutosCarrinho} from "./src/menuCarrinho"
renderizarCatalago();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
//toda a logica por trás da interatividade



//Interatividade do carrinho

