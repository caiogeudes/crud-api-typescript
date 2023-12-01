"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.json();
        this.routes();
        this.listen(this.port);
    }
    json() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(routes_1.default);
    }
    listen(port) {
        return this.app.listen(port);
    }
}
exports.default = new App;
