const { body, param, query, validationResult } = require("express-validator");

// Validation result handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: errors.array(),
    });
  }
  next();
};

// User validation rules
const validateUser = [
  body("username")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),

  body("role")
    .optional()
    .isIn(["admin", "editor", "reporter", "user"])
    .withMessage("Invalid role"),

  body("firstName")
    .optional()
    .isLength({ max: 50 })
    .withMessage("First name cannot exceed 50 characters"),

  body("lastName")
    .optional()
    .isLength({ max: 50 })
    .withMessage("Last name cannot exceed 50 characters"),

  body("bio")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Bio cannot exceed 500 characters"),

  handleValidationErrors,
];

// News validation rules
const validateNews = [
  body("title")
    .isLength({ min: 5, max: 200 })
    .withMessage("Title must be between 5 and 200 characters")
    .trim(),

  body("content")
    .isLength({ min: 50 })
    .withMessage("Content must be at least 50 characters long"),

  body("excerpt")
    .optional()
    .isLength({ max: 300 })
    .withMessage("Excerpt cannot exceed 300 characters"),

  body("category").isMongoId().withMessage("Invalid category ID"),

  body("tags").optional().isArray().withMessage("Tags must be an array"),

  body("tags.*")
    .optional()
    .isLength({ max: 30 })
    .withMessage("Each tag cannot exceed 30 characters"),

  body("status")
    .optional()
    .isIn(["draft", "published", "archived"])
    .withMessage("Invalid status"),

  body("isFeatured")
    .optional()
    .isBoolean()
    .withMessage("isFeatured must be a boolean"),

  body("isBreaking")
    .optional()
    .isBoolean()
    .withMessage("isBreaking must be a boolean"),

  body("seoTitle")
    .optional()
    .isLength({ max: 60 })
    .withMessage("SEO title cannot exceed 60 characters"),

  body("seoDescription")
    .optional()
    .isLength({ max: 160 })
    .withMessage("SEO description cannot exceed 160 characters"),

  handleValidationErrors,
];

// Category validation rules
const validateCategory = [
  body("name")
    .isLength({ min: 2, max: 50 })
    .withMessage("Category name must be between 2 and 50 characters")
    .trim(),

  body("description")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Description cannot exceed 200 characters"),

  body("color")
    .optional()
    .matches(/^#[0-9A-F]{6}$/i)
    .withMessage("Color must be a valid hex color"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be a boolean"),

  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),

  handleValidationErrors,
];

// ID parameter validation
const validateId = [
  param("id").isMongoId().withMessage("Invalid ID format"),

  handleValidationErrors,
];

// Query parameter validation
const validatePagination = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be a positive integer"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be between 1 and 100"),

  query("sort")
    .optional()
    .isIn(["createdAt", "-createdAt", "title", "-title", "views", "-views"])
    .withMessage("Invalid sort parameter"),

  handleValidationErrors,
];

module.exports = {
  validateUser,
  validateNews,
  validateCategory,
  validateId,
  validatePagination,
  handleValidationErrors,
};
