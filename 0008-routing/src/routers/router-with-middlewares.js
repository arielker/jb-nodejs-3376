"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var some_middleware_1 = require("../middlewares/some-middleware");
var some_other_middleware_1 = require("../middlewares/some-other-middleware");
var a_third_middleware_1 = require("../middlewares/a-third-middleware");
var router = (0, express_1.Router)();
// this will apply in the router level...
router.use(some_middleware_1.default);
router.get('/healthcheck', function (req, res, next) {
    res.send('I\'m healthy');
});
// this will apply from here onward...
router.use(some_other_middleware_1.default);
// this will apply from here onward on all PUTs
router.put('*', a_third_middleware_1.default);
router.get('/say-hi', function (req, res, next) {
    res.send('hi');
});
exports.default = router;
