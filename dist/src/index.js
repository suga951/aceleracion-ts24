"use strict";
class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    updateStock(id, newQuantity) {
        const prod = this.products.find((prod) => prod.id === id);
        if (prod) {
            prod.quantity = newQuantity;
        }
        else {
            console.log(`Product id ${id} not found`);
        }
    }
    getTotalValue() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    getLowStockProducts(threshold) {
        return this.products.filter((product) => product.quantity < threshold);
    }
}
const inventario = new Inventory();
inventario.addProduct({ id: 1, name: "Prod 1", price: 10, quantity: 10 });
inventario.addProduct({ id: 2, name: "Prod 2", price: 20, quantity: 20 });
inventario.addProduct({ id: 3, name: "Prod 3", price: 30, quantity: 30 });
console.log(inventario);
inventario.updateStock(3, 500);
console.log(inventario);
console.log(inventario.getTotalValue());
console.log(inventario.getLowStockProducts(500));
