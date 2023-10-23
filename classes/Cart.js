class Cart {
  constructor(products, total) {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
  }
}
