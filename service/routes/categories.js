import express from "express";
import { categoriesController } from "../controllers/category.js";

const categoriesRouter = express.Router();

// Routes
categoriesRouter.get("/categories", categoriesController.get);
categoriesRouter.post("/categories", categoriesController.post);
categoriesRouter.put("/categories/:id", categoriesController.update);
categoriesRouter.delete("/categories/:id", categoriesController.delete);

export default categoriesRouter;
