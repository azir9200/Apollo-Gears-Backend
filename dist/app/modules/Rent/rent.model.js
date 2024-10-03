"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
/* eslint-disable no-useless-escape */
// models/Rent.ts
const mongoose_1 = __importDefault(require("mongoose"));
const rentSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Car', required: true },
    rentStatus: {
        type: String,
        enum: ['pending', 'ongoing', 'completed'],
        default: 'pending',
    },
    startingPoint: { type: String, required: true },
    destination: { type: String, required: true },
});
exports.Rent = mongoose_1.default.model('Rent', rentSchema);
