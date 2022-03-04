import { homepageRoutes } from './routes/landing/homepage'
import { sortRoutes } from './routes/team_handler/sort'

// Routes
export default (app) => {
  app.use(homepageRoutes);
  app.use(sortRoutes);
}
