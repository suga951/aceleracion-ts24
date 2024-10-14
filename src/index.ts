interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateStock(id: number, newQuantity: number): void {
    const prod = this.products.find((prod) => prod.id === id);
    if (prod) {
      prod.quantity = newQuantity;
    } else {
      console.log(`Product id ${id} not found`);
    }
  }

  getTotalValue(): number {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  getLowStockProducts(threshold: number): Product[] {
    return this.products.filter(
      (product: Product) => product.quantity < threshold,
    );
  }
}
