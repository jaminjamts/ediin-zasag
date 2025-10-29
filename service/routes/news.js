import express from "express";
import { newsController } from "../controllers/news.js";

const newsRouter = express.Router();

newsRouter.get("/news", newsController.get);
newsRouter.get("/news/category", newsController.getByCategory);
newsRouter.get("/news/:id", newsController.getById);

newsRouter.post("/news", newsController.post);
newsRouter.put("/news/:id", newsController.update);
newsRouter.delete("/news/:id", newsController.delete);

export default newsRouter;
