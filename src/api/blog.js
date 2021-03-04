const express = require('express');

const routes = express.Router();

function getBlogs(request, response) {
  // return list of all blogs with small preview
  // Blog object will have "fullText" as well as "previewText"
}

function getBlog(request, response) {
  // return list of single blog.
}

routes.get('/blogs', getBlogs());
routes.get('/blogs/:blogID', getBlog);
//routes.post('blogs/newBlog', createBlog);
//routes.put('blogs/:blogID', updateBlog);
//routes.delete('blogs/:blogID', deleteBlog);

module.exports = {
  routes
};
