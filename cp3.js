// Array
const produtos = [
    { id: 1, nome: 'Camiseta Azul', preco: 89.99, categoria: 'Vestuário', disponibilidade: true },
    { id: 2, nome: 'Iphone 13', preco: 2999.99, categoria: 'Eletrônicos', disponibilidade: true },
    { id: 3, nome: 'Tenis ', preco: 249.90, categoria: 'Calçados', disponibilidade: false },
    { id: 4, nome: 'PC Gamer', preco: 5999.99, categoria: 'Eletrônicos', disponibilidade: true },
    { id: 5, nome: 'Bolsa Feminina', preco: 199.90, categoria: 'Acessórios', disponibilidade: true },
    { id: 6, nome: 'Smartwatch', preco: 499.99, categoria: 'Eletrônicos', disponibilidade: true },
    { id: 7, nome: 'Jaqueta Jeans', preco: 149.90, categoria: 'Vestuário', disponibilidade: true },
    { id: 8, nome: 'Sapato Social', preco: 299.90, categoria: 'Calçados', disponibilidade: false },
    { id: 9, nome: 'Tablet', preco: 1299.99, categoria: 'Eletrônicos', disponibilidade: true },
    { id: 10, nome: 'Relógio', preco: 399.90, categoria: 'Acessórios', disponibilidade: true }
];

function popularCategorias() {
    const select = document.getElementById('categoriaSelect');
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    categoriasUnicas.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        select.appendChild(option);
    });
}

// Função ordenar produtos
function ordenarProdutos(produtosParaOrdenar, ordem) {
    switch(ordem) {
        case 'precoAsc':
            return [...produtosParaOrdenar].sort((a, b) => a.preco - b.preco);
        case 'precoDesc':
            return [...produtosParaOrdenar].sort((a, b) => b.preco - a.preco);
        default:
            return produtosParaOrdenar;
    }
}

// Filtrar produtos
function filtrarProdutos() {
    const categoriaSelecionada = document.getElementById('categoriaSelect').value;
    const somenteDisponiveis = document.getElementById('somenteDisponiveis').checked;
    const ordemSelecionada = document.getElementById('ordemSelect').value;
    
    let produtosFiltrados = produtos.filter(produto => {
        const categoriaMatch = !categoriaSelecionada || produto.categoria === categoriaSelecionada;
        const disponibilidadeMatch = !somenteDisponiveis || produto.disponibilidade;
        return categoriaMatch && disponibilidadeMatch;
    });
    
    produtosFiltrados = ordenarProdutos(produtosFiltrados, ordemSelecionada);
    exibirProdutosAgrupados(produtosFiltrados);
}

// Mostrar todos os produtos
function mostrarTodos() {
    document.getElementById('categoriaSelect').value = '';
    document.getElementById('somenteDisponiveis').checked = false;
    document.getElementById('ordemSelect').value = 'padrao';
    exibirProdutosAgrupados(produtos);
}

// Exibir produtos por categoria
function exibirProdutosAgrupados(produtosParaExibir) {
    const container = document.getElementById('produtosContainer');
    container.innerHTML = '';
    
    const categoriasUnicas = [...new Set(produtosParaExibir.map(p => p.categoria))];
    categoriasUnicas.forEach(categoria => {
        const produtosDaCategoria = produtosParaExibir.filter(p => p.categoria === categoria);
        if (produtosDaCategoria.length > 0) {
            const secao = document.createElement('div');
            secao.className = 'secao-categoria';
            
            const tituloSecao = document.createElement('h2');
            tituloSecao.textContent = categoria;
            secao.appendChild(tituloSecao);
            
            produtosDaCategoria.forEach(produto => {
                const divProduto = document.createElement('div');
                divProduto.className = `produto ${produto.disponibilidade ? 'disponivel' : 'indisponivel'}`;
                
                divProduto.innerHTML = `
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Status: ${produto.disponibilidade ? 'Disponível' : 'Indisponível'}</p>
                `;
                
                secao.appendChild(divProduto);
            });
            
            container.appendChild(secao);
        }
    });
}

// Inicialização
popularCategorias();
mostrarTodos();