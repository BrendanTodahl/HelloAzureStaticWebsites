import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Secret from './views/Secret';
import SuperSecret from './views/SuperSecret';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
      },
      meta: {
        title: 'AZ Static Websites',
      }
    },
    {
      path: '/secret',
      name: 'secret',
      components: {
        default: Secret
      },
      meta: {
        title: 'AZ Static Websites - Secret',
      }
    },
    {
      path: '/super-secret',
      name: 'super-secret',
      components: {
        default: SuperSecret
      },
      meta: {
        title: 'AZ Static Websites - Super Secret',
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
