"use strict";
// db.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectToMongoDB = async () => {
    try {
        const options = {};
        await mongoose_1.default.connect(process.env.CONNECTION_URI, options);
        console.log('Connected to MongoDB Atlas');
    }
    catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1);
    }
};
exports.default = connectToMongoDB;
//# sourceMappingURL=db.js.map