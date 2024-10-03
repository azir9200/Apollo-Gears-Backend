"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
/* eslint-disable no-useless-escape */
// models/Car.ts
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    fuelType: {
        type: String,
        enum: ['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol'],
        required: true,
    },
    passengerCapacity: { type: Number, required: true },
    color: { type: String, required: true },
    condition: { type: String, enum: ['New', 'Used'], required: true },
});
exports.Car = mongoose_1.default.model('Car', carSchema);
