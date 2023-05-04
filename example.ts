import { Minimoon } from './dist/src'

const router = Minimoon.makeHandlers(
  [
    {
      path: '/',
      method: 'GET',
      handler: () => {
        return 'ola mundo'
      }
    },
    {
      path: '/json',
      method: 'GET',
      handler: () => {
        return {
          message: 'ola mundo'
        }
      }
    }
  ]
);

(() => {
  try {
    Minimoon.makeServer({
      port: 4000, handlers: router,
      headers: {}
    });
  } catch (err) {
    console.log(err);
  }
})();
