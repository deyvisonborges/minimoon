"use strict";
exports.__esModule = true;
var dist_1 = require("./dist");
var router = dist_1.Minimoon.makeHandlers([
    {
        path: '/',
        method: 'GET',
        handler: function () {
            return 'ola mundo';
        }
    }
]);
(function () {
    try {
        dist_1.Minimoon.makeServer({
            port: 4000, handlers: router, statusCode: 200,
            headers: {}
        });
    }
    catch (err) {
        console.log(err);
    }
})();
