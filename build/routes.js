"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_1 = __importDefault(require("./controllers/crud"));
class SetupRoutes {
    constructor() {
        this.route = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.route.post('/create', crud_1.default.create);
        this.route.get('/read', crud_1.default.read);
        this.route.put('/update/:id', crud_1.default.update);
        this.route.delete('/delete/:id', crud_1.default.delete);
    }
}
exports.default = new SetupRoutes().route;
