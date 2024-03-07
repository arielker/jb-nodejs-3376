"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var basic_router_1 = require("./routers/basic-router");
var router_with_middlewares_1 = require("./routers/router-with-middlewares");
var server = (0, express_1.default)();
server.use('/basic-router', basic_router_1.default);
server.use('/router-with-middlewares', router_with_middlewares_1.default);
server.listen(8080, function () {
    console.log('started...');
});
