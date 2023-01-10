import { Minimoon } from './dist'

const router = Minimoon.makeHandlers(
  [
    {
      path: '/',
      method: 'GET',
      statusCode: 200,
      handler: () => {
        return 'ola mundo'
      }
    }
  ]
);

(() => {
  try {
    Minimoon.makeServer({
      port: 4000, handlers: router, statusCode: 200,
      headers: {}
    });
  } catch (err) {
    console.log(err);
  }
})();
