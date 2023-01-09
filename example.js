const {Minimoon} = require("./dist");

const router = Minimoon.makeRouter([{
    path: "/",
    method: "GET",
    handler: (req, res) => {
      return 'opa jia'
    }
  },]);

(() => {
  try {
    Minimoon.makeServer({port: 4000, routes: router, statusCode: 200 });
  } catch (err) {
    console.log(err)
  }
})()

