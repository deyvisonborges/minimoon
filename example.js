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
    Minimoon.makeServer({port: 4000, routes: router, headers: {
      "Content-Type": 'multipart/form-data'
    }});
  } catch (err) {
    console.log(err)
  }
})()
