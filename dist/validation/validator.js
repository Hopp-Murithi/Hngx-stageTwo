"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyName = void 0;
const verifyName = (name) => {
    if (!name) {
        return { message: "Name is required" };
    }
    else if (name.length < 3 || name.length > 20) {
        return { message: "length must be between 3 and 20 characters" };
    }
    else {
        return true;
    }
};
exports.verifyName = verifyName;
//# sourceMappingURL=validator.js.map