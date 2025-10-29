import Category from "../models/category.js";
import News from "../models/news.js";
import { encrypt } from "../utils/security.js";

export const newsController = {
  get: async (_, res) => {
    try {
      const news = await News.find()
        .populate("category", "title")
        .sort({ publishedAt: -1 });
      const encryptedNews = encrypt(JSON.stringify(news));
      res.status(200).json(encryptedNews);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const newsItem = await News.findOne({ slug: id }).populate(
        "category",
        "title"
      );

      if (!newsItem) {
        return res.status(404).json({ error: "News not found" });
      }
      const encryptedNews = encrypt(JSON.stringify(newsItem));
      res.status(200).json(encryptedNews);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  getByCategory: async (req, res) => {
    const query = req.query;

    try {
      const { title } = req.query;
      const newsByCategory = await Category.find({ title });
      const catid = newsByCategory[0]._id;

      const newsByCat = await News.find({ category: catid })
        .populate("category", "title")
        .sort({ publishedAt: -1 });

      res.status(200).json(newsByCat);
    } catch (error) {
      console.error("Error in getByCategory:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  post: async (req, res) => {
    try {
      const { title, summary, content, images, author, category, tags } =
        req.body;

      // 🔹 slug автоматаар үүсгэх (title-с)
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9а-яөүё]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const newNews = new News({
        title,
        summary,
        content,
        images,
        author,
        slug,
        category,
        tags,
      });

      await newNews.save();
      res.status(201).json(newNews);
    } catch (error) {
      console.error("Error creating news:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const { title, summary, content, images, author, category, tags } =
        req.body;
      const { id } = req.params;

      // Шинэ slug автоматаар үүсгэх
      const slug = title
        ? title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
        : undefined;

      const updatedNews = await News.findByIdAndUpdate(
        id,
        {
          ...(title && { title, slug }), // title байх үед title & slug update
          summary,
          content,
          images,
          author,
          category,
          tags,
        },
        { new: true, runValidators: true } // ✅ updated document буцааж, validation ажиллуулна
      );

      if (!updatedNews) {
        return res.status(404).json({ error: "News not found" });
      }

      res.status(200).json(updatedNews);
    } catch (error) {
      console.error("Error updating news:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const paramsId = req.params.id;
      const deletedNews = await News.findByIdAndDelete(paramsId);
      if (!deletedNews) {
        return res.status(404).json({ error: "News not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
