class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (!product.id || !product.code) {
      throw new Error("Id and code are required fields.");
    }

    if (this.products.some((p) => p.id === product.id || p.code === product.code)) {
      throw new Error("Product with the same id or code already exists.");
    }

    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Product not found");
    }

    // Preserve the original id
    updatedProduct.id = id;

    // Update the product in the array
    this.products[index] = updatedProduct;
  }

  deleteProduct(id) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Product not found");
    }

    // Remove the product from the array
    this.products.splice(index, 1);
  }
}

// Ejemplo de uso:

const productManager = new ProductManager();

// Agregar productos
productManager.addProduct({
  id: "1",
  title: "Product 1",
  description: "Description 1",
  price: 10.99,
  thumbnail: "url1",
  code: "ABC123",
  stock: 50,
});

productManager.addProduct({
  id: "2",
  title: "Product 2",
  description: "Description 2",
  price: 19.99,
  thumbnail: "url2",
  code: "XYZ456",
  stock: 30,
});

// Obtener productos
const allProducts = productManager.getProducts();
console.log("All Products:", allProducts);

// Obtener producto por ID
const productById = productManager.getProductById("1");
console.log("Product by ID:", productById);

// Actualizar producto
productManager.updateProduct("1", {
  title: "Updated Product 1",
  description: "Updated Description 1",
  price: 12.99,
  thumbnail: "updatedUrl1",
  code: "ABC123", // No se permite cambiar el código
  stock: 45,
});

console.log("Updated Products:", productManager.getProducts());

// Eliminar producto
productManager.deleteProduct("2");
console.log("Products after deletion:", productManager.getProducts());