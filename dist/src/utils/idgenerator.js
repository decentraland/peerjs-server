"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numericIdGenerator() {
    let currentId = 0;
    return () => {
        currentId++;
        return currentId.toString();
    };
}
exports.numericIdGenerator = numericIdGenerator;
