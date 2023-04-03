const { Router } = require("express");
const ProductController = require("../controller/productController");

const productRouter = Router();

productRouter.post("/products", ProductController.createProduct);
productRouter.get("/products", ProductController.getProductList);
productRouter.get("/products/:id", ProductController.getProductById);
productRouter.patch('/products/:id', ProductController.updateProduct);
productRouter.delete('/products/:id', ProductController.deleteProductById);
module.exports = productRouter;
