"use strict";
exports.__esModule = true;
var src_1 = require("./dist/src");
var router = src_1.Minimoon.makeHandlers([
    {
        path: '/',
        method: 'GET',
        handler: function () {
            return 'ola mundo';
        }
    },
    {
        path: '/json',
        method: 'GET',
        handler: function () {
            return {
                message: 'minha messagem'
            };
        }
    }
]);
(function () {
    try {
        src_1.Minimoon.makeServer({
            port: 4000, handlers: router,
            headers: {}
        });
    }
    catch (err) {
        console.log(err);
    }
})();
