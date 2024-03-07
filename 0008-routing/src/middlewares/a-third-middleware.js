"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aThirdMiddleware(req, res, next) {
    res.send('Hello I\'m a 3rd middleware');
}
exports.default = aThirdMiddleware;
