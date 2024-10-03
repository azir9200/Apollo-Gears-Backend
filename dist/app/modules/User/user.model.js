"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable no-useless-escape */
// models/User.ts
const mongoose_1 = __importDefault(require("mongoose"));
const user_utils_1 = require("./user.utils");
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [user_utils_1.validateEmail, 'Please fill a valid email address'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'driver'],
        default: 'user',
    },
    img: { type: String },
    rating: { type: Number, default: 0 },
    rents: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Rent' }],
});
exports.User = mongoose_1.default.model('User', userSchema);
