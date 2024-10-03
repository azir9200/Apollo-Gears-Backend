"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarValidations = exports.updateCarValidationSchema = exports.createCarValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
        image: zod_1.z.string(),
        rating: zod_1.z.number(),
        fuelType: zod_1.z.enum(['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol']),
        passengerCapacity: zod_1.z.number().int(),
        color: zod_1.z.string(),
        condition: zod_1.z.enum(['New', 'Used']),
        rents: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.updateCarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        model: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        fuelType: zod_1.z
            .enum(['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol'])
            .optional(),
        passengerCapacity: zod_1.z.number().int().optional(),
        color: zod_1.z.string().optional(),
        condition: zod_1.z.enum(['New', 'Used']).optional(),
        rents: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.CarValidations = {
    createCarValidationSchema: exports.createCarValidationSchema,
    updateCarValidationSchema: exports.updateCarValidationSchema,
};
