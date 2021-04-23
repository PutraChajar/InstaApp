import Home from '../views/pages/home.js';
import Profile from '../views/pages/profile.js';

const routes = {
  '/': Home,
  '/home': Home,
  '/profile/:id': Profile,
};

export default routes;