import express from 'express';
import blogRoutes from './blog';
import userRoutes from './user';

const routes = express.Router();

function about(request, response) {
  // Return resume stored in S3?
}

routes.get('/about', about);
routes.use(blogRoutes);
routes.use(userRoutes);

export default routes;
