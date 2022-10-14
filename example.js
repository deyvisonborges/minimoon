const { Minimoon } = require("./dist");

const router = Minimoon.makeRouter([
  {
    path: "/",
    method: "GET",
    controller: (req, res) => {
      return {
        name: "deyvison",
      };
    },
  },
]);

Minimoon.makeServer({
  port: 4000,
  routes: router,
});
