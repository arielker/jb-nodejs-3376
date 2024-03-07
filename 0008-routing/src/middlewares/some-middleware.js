"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function someMiddleware(req, res, next) {
    res.send('Hello I\'m a middleware');
}
exports.default = someMiddleware;
