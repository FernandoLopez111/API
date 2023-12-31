"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = require("express");
const rol_routes_1 = __importDefault(require("./rol.routes"));
dotenv_1.default.config();
const URL = process.env.URL || '/api/v1';
const routes = (0, express_1.Router)();
routes.use(`${URL}/rol`, rol_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.routes.js.map