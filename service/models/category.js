import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      minlength: [2, "Category name must be at least 2 characters long"],
      maxlength: [50, "Category name cannot exceed 50 characters"],
    },
  },
  {
    timestamps: true, // createdAt & updatedAt автоматаар нэмэгдэнэ
  }
);

// 🔹 Auto-generate slug from name
categorySchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // зөвшөөрөгдсөн тэмдэгтүүдээс бусдыг "-" болгож орлуулна
      .replace(/(^-|-$)/g, ""); // эх болон төгсгөлд байгаа "-" тэмдэгтийг арилгана
  }
  next();
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
