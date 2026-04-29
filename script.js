fetch('produtos.json')
  .then(res => res.json())
  .then(produtos => {

    const container = document.getElementById('produtos');
    const paginaProduto = document.getElementById('produto');

    // HOME
    if(container){
      produtos.forEach(p => {
        container.innerHTML += `
          <div class="card">
            <img src="${p.imagem}">
            <h2>${p.nome}</h2>
            <p>${p.preco}</p>
            <a href="produto.html?id=${p.id}">Ver Produto</a>
          </div>
        `;
      });
    }

    // PRODUTO
    if(paginaProduto){
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');

      const produto = produtos.find(p => p.id == id);

      paginaProduto.innerHTML = `
        <div class="container">
          <h1>${produto.nome}</h1>

          <img src="${produto.imagem}" class="img">

          <video controls class="video">
            <source src="${produto.video}" type="video/mp4">
          </video>

          <p>${produto.descricao}</p>

          <div class="prova">⭐⭐⭐⭐⭐ +3.200 clientes satisfeitos</div>

          <a href="${produto.link}" target="_blank" class="btn">
            🔥 Comprar Agora
          </a>
        </div>
      `;
    }

  });