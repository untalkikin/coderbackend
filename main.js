class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Validar campos obligatorios
      const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
      const missingFields = requiredFields.filter(field => !product[field]);
  
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }
  
      // Validar que el código no esté repetido
      const codeExists = this.products.some(existingProduct => existingProduct.code === product.code);
      if (codeExists) {
        throw new Error(`Product with code ${product.code} already exists.`);
      }
  
      // Agregar producto al arreglo
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(existingProduct => existingProduct.id === id);
  
      if (product) {
        return product;
      } else {
        throw new Error('Product Not Found');
      }
    }
  }
  
  // Ejemplo de uso:
  const productManager = new ProductManager();
  
  try {
    productManager.addProduct({
      title: 'Product 1',
      description: 'Description 1',
      price: 19.99,
      thumbnail: 'image1.jpg',
      code: 'ABC123',
      stock: 50,
    });
  
    productManager.addProduct({
      title: 'Product 2',
      description: 'Description 2',
      price: 29.99,
      thumbnail: 'image2.jpg',
      code: 'XYZ456',
      stock: 30,
    });
  
    console.log(productManager.getProducts());
  
    const productIdToFind = 1;
    const foundProduct = productManager.getProductById(productIdToFind);
    console.log(`Product found with ID ${productIdToFind}:`, foundProduct);
  } catch (error) {
    console.error(error.message);
  }
  