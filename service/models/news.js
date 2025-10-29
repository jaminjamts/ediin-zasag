import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 250,
    },

    summary: {
      type: String,
      maxlength: 300,
    },
    content: {
      // Бүтэн мэдээний текст
      type: String,
      required: true,
    },
    images: [
      // Олон зураг хадгалах array
      {
        type: String,
        default: null,
      },
    ],
    author: {
      // Нийтлэгч
      type: String,
      default: "WSJ Staff",
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags: [
      // RSS болон хайлтанд ашиглах түлхүүр үгс
      { type: String, trim: true, lowercase: true },
    ],

    publishedAt: {
      // Хэзээ нийтлэгдсэн
      type: Date,
      default: Date.now,
    },
    views: {
      // Үзсэн тоо
      type: Number,
      default: 0,
      min: 0,
    },
    source: {
      // Мэдээний эх сурвалж
      type: String,
      default: "WSJ",
    },
    region: {
      // Орчин, улс, бүс нутаг
      type: String,
      default: "Global",
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true } // createdAt & updatedAt автоматаар үүснэ
);

// 🔹 Slug-г title-с автоматаар үүсгэх hook
newsSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9а-яөүё]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

// 🔹 Indexes for performance
newsSchema.index({ slug: 1 });
newsSchema.index({ category: 1 });
newsSchema.index({ isPublished: 1 });
newsSchema.index({ publishedAt: -1 });

const News = mongoose.model("News", newsSchema);
export default News;
