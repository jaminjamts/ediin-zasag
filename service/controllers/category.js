import Category from "../models/category.js";

export const categoriesController = {
  get: async (req, res) => {
    try {
      const categories = await Category.find();

      res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  post: async (req, res) => {
    try {
      const { title } = req.body;
      const newCategory = new Category({ title });
      await newCategory.save();
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const paramsId = req.params.id;
      const { title } = req.body;
      const updatedCategory = await Category.findByIdAndUpdate(
        paramsId,
        { title },
        { new: true, runValidators: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const paramsId = req.params.id;
      const deletedCategory = await Category.findByIdAndDelete(paramsId);
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
