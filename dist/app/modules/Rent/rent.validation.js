"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentValidations = exports.updateRentValidationSchema = exports.createRentValidationSchema = void 0;
const zod_1 = require("zod");
exports.createRentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string(),
        car: zod_1.z.string(),
        startingPoint: zod_1.z.string(),
        destination: zod_1.z.string(),
    }),
});
exports.updateRentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string().optional(),
        driver: zod_1.z.string().optional(),
        car: zod_1.z.string().optional(),
        rentStatus: zod_1.z.enum(['pending', 'ongoing', 'completed']).optional(),
        startingPoint: zod_1.z.string().optional(),
        destination: zod_1.z.string().optional(),
    }),
});
exports.RentValidations = {
    createRentValidationSchema: exports.createRentValidationSchema,
    updateRentValidationSchema: exports.updateRentValidationSchema,
};
