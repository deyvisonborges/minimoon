const {Minimoon} = require("./dist");

const router = Minimoon.makeRouter([{
    path: "/",
    method: "GET",
    controller: (req, res) => {
      return 'opa jia'
    }
  },]);

(() => {
  try {
    Minimoon.makeServer({port: 4000, routes: router});
  } catch (err) {
    console.log(err)
  }
})()
