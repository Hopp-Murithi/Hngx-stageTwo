"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const person_routes_1 = __importDefault(require("./routes/person.routes"));
exports.app = (0, express_1.default)();
const PORT = process.env.DB_PORT;
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
//connect DB if there is no error
(0, db_1.default)();
/**
 * Base url
 */
const baseUrl = '/api/';
/**
 * mount routes
 */
exports.app.use(baseUrl, person_routes_1.default);
//# sourceMappingURL=app.js.map