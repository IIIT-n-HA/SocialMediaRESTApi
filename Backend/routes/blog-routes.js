const express = require("express");
const {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
} = require("../controllers/blog-controller");
const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlogs);
blogRoutes.post("/add", addBlog);
blogRoutes.post("/update/:id", updateBlog);
blogRoutes.get("/:id", getById);
blogRoutes.delete("/:id", deleteBlog);

module.exports = blogRoutes;
