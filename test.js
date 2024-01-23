const ProductManager = require('./ProductManager')
const manager = new ProductManager('./productos.json');

let product1 = {
	title: "Laptop MSI",
	description: "La mejor laptop del mercado al mejor precio",
	price: 299.99,
	thumbnail: "https://www.google.com",
	code: "1190B2",
	stock: 11,
};

let product2 = {
	title: "Audifonos SONY WH1005000",
	description: "La mejor cancelación de sonido que pueda existir",
	price: 40.99,
	thumbnail: "https://www.google.com",
	code: "1190B22",
	stock: 12,
};

let product3 = {
	title: "Teclado Cooler Master",
	description: "Excelente teclado mecanico",
	price: 15.00,
	thumbnail: "https://www.google.com.",
	code: "1190C23",
	stock: 20,
};

let product4 = {
	title: "Monitor 35 pulgadas Samsung curvo",
	description: "Un monitor de excelente calidad de video e imagen",
	price: 150.00,
	thumbnail: "https://www.google.com",
	code: "1190E25",
	stock: 2,
};

let product5 = {
	title: "Mouse Logitech 3s mx ",
	description: "Excelente Mouse",
	price: 18.99,
	thumbnail: "https://www.google.com",
	code: "1190E27",
	stock: 100,
};

let product6 = {
	title: "Nintendo Switch",
	description: "El mejor entretenimiento activo",
	price: 200.00,
	thumbnail: "https://www.google.com.ar",
	code: "1190E31",
	stock: 30,
};

let product7 ={
    title: "Audifonos logitech overear",
	description: "La mejor fidelidad de sonido",
	price: 50.00,
	thumbnail: "https://www.google.com.ar",
	code: "1190E39",
	stock: 10,
};

async function functions() {
  console.log("------------------------------------------------");
  console.log("Producto agregado: ", await manager.addProduct(product1));
  console.log("Producto agregado: ", await manager.addProduct(product2));
  console.log("Producto agregado: ", await manager.addProduct(product3));
  console.log("Producto agregado: ", await manager.addProduct(product4));
  console.log("Producto agregado: ", await manager.addProduct(product5));
  console.log("Producto agregado: ", await manager.addProduct(product6));
  console.log("Se intento agregar prod. con codigo repetido: ", await manager.addProduct(product1));
  console.log("Se intento agregar prod. con campos faltantes: ", await manager.addProduct({title: "Laptop Macbook Pro"}));
  console.log("------------------------------------------------");
  console.log("Todos los productos: ", await manager.getProducts());
  console.log("------------------------------------------------");
  console.log("Buscar producto por ID 2: ", await manager.getProductById(2));
  console.log("Buscar producto por ID 4: ", await manager.getProductById(4));
  console.log("Buscar producto por ID inexistente 999: ", await manager.getProductById(999));
  console.log("------------------------------------------------");
  console.log("Actualizar producto por ID: ", await manager.updateProduct(5, { title: "Mouse Apple ACTUALIZADO", price: 99.2 }));
  console.log("Actualizar producto por ID inexistente 999: ", await manager.updateProduct(999));
  console.log("------------------------------------------------");
  console.log("Eliminar producto por ID 4: ", await manager.deleteProduct(4));
  console.log("Eliminar producto por ID inexistente 999: ", await manager.deleteProduct(999));
  console.log("------------------------------------------------");
}

functions()