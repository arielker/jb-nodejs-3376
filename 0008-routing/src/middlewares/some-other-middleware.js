"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function someOtherMiddleware(req, res, next) {
    res.send('Hello I\'m some other middleware');
}
exports.default = someOtherMiddleware;
