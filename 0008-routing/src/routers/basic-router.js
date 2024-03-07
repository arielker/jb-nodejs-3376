"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/healthcheck', function (req, res, next) {
    res.send('I\'m healthy');
});
exports.default = router;
