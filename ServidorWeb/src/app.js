import express from "express";
import ProductManager from "./ProductManager.js";

const manager = new ProductManager("products.json");

const app = express();

app.get("/productos", async(req, res)=>{
    const limit = parseInt(req.query.limit);
    const allProduct = await manager.getAllProducts();
    if(limit && !isNaN(limit)){
        return res.json({status: 200, payload: allProduct.slice(0, limit), limit});
    }
    res.json({status: 200, payload: allProduct, limit: null});
});


app.get("/productos/:id", async(req, res)=>{
    const idProducto = req.params.id;
    const producto = await manager.getProductoById(Number(idProducto));
    if(!producto) return res.status(404).json({error:"Producto no encontrado", status: 404})
    res.json({payload: producto, status: 200})
});

app.listen(8080, ()=> console.log("El servidor esta corriendo en el puerto 8080"));
