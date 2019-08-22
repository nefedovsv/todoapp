"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TodoSchema = new mongoose.Schema({
    data: String,
    completed: Boolean,
    userName: String,
});
//# sourceMappingURL=todo.schemas.js.map