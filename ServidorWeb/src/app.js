import express from "express";
import ProductManager from "./ProductManager.js";

const manager = new ProductManager("products.json");

const app = express();

