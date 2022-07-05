/**
 *
 * Aplicação mercado online. A ideia é desenvolverem um site de venda de produtos online.
 * Têm de suportar as seguintes funcionalidades:
 *
 *   - listar produtos para venda com os respectivos preços
 *   - permitir adicionar produtos ao carrinho de compras indicando a quantidade
 *   - cada produto deve ter um nome, fotografia, descrição e preço
 */

let products = [];
let shoppingCart = [];
function getProductsFromDb() {
  console.log("get products from db");
  products = [
    {
      id: 1,
      title: "Product A",
      photo: "https://picsum.photos/200",
      description: "Description A",
      price: 9,
    },
    {
      id: 2,
      title: "Product B",
      photo: "https://picsum.photos/200",
      description: "Description B",
      price: 100,
    },
    {
      id: 3,
      title: "Product C",
      photo: "https://picsum.photos/200",
      description: "Description C",
      price: 100,
    },
    {
      id: 4,
      title: "Product D",
      photo: "https://picsum.photos/200",
      description: "Description D",
      price: 100,
    },
  ];
}

function listProducts() {
  console.log("list products");
  let productsHtml = "";
  for (let i = 0; i < products.length; i++) {
    productsHtml =
      productsHtml +
      `<div class="col">
            <div class="card">
                <img
                    src="${products[i].photo}"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">${products[i].title}</h5>
                    <p class="card-text">${products[i].description} (${products[i].price}€)</p>
                </div>
            </div>
        </div>`;
  }
  document.querySelector("#products-container").innerHTML = productsHtml;
}

function addProduct(id, qtd) {
  console.log("adding product", id, qtd);
  shoppingCart.push({ id, qtd });
  console.log(shoppingCart);
  document.querySelector("#shopping-cart-size").innerHTML = shoppingCart.length;

  /**
   * 1 - Ir procurar o produto ao carrinho compras (id)
   * 2 - Se encontrar o produto do carrinho compras
   * 2.1 - Adiciono a quantidade (qtd) ao produto
   * 2.2 - Caso contrário, fazemos do novo produto com quantidade (qtd)
   * 3 - Atualizamos tamanho do carrinho compras com quantidade total de todos os produtos (criar uma função especifica)
   */
}

function removeProduct(id, qtd) {
  /**
   * 1 - Ir procurar o produto ao carrinho compras (id)
   * 2 - Se encontrar o produto no carrinho compras
   * 2.1 - Retiro a quantidade ou removo do carrinho se a quantidade for igual ou superior ao que tiver no carrinho
   * 2.2 - Caso contrário, não faço nada
   * 3 - Atualizamos tamanho do carrinho compras com quantidade total de todos os produtos (criar uma função especifica)
   */
}

console.log("load index.js");
getProductsFromDb();
listProducts();

addProduct(1, 3);
addProduct(1, 2);
addProduct(3, 2);
addProduct(2, 1);
addProduct(5, 10);
