const Blog = require("../models/blog");

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs found" });
  }
};

const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  if (!title || !description || !image || !user) {
    return res
      .status(400)
      .json({ message: "Please enter all the required details." });
  }
  const blog = new Blog({ name, description, image, user });
  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ blog });
};

const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Please enter all the required details." });
  }

  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, { title, description });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to update the blog" });
  }
  return res.status(201).json({ blog });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ blog });
};

const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndDelete(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to Delete" });
  }
  return res.status(200).json({ message: "Deleted Successfully" });
};

module.exports = { getAllBlogs, addBlog, updateBlog, getById, deleteBlog };
