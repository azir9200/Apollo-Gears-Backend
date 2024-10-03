"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bid = void 0;
/* eslint-disable no-useless-escape */
// models/Bid.ts
const mongoose_1 = __importDefault(require("mongoose"));
const bidSchema = new mongoose_1.default.Schema({
    rentId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Rent', required: true },
    driverId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Bid',
        required: true,
    },
    bidAmount: { type: Number, required: true },
    bidStatus: {
        type: String,
        enum: ['accepted', 'pending', 'rejected'],
        default: 'pending',
    },
    driverLocation: { type: String, required: true },
});
exports.Bid = mongoose_1.default.model('Bid', bidSchema);
