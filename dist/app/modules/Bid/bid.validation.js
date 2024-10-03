"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidValidations = exports.updateBidValidationSchema = exports.createBidValidationSchema = void 0;
const zod_1 = require("zod");
exports.createBidValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        rentId: zod_1.z.string(),
        driverId: zod_1.z.string(),
        bidAmount: zod_1.z.number(),
        driverLocation: zod_1.z.string(),
    }),
});
exports.updateBidValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        driverId: zod_1.z.string().optional(),
        bidAmount: zod_1.z.number().optional(),
        bidStatus: zod_1.z.enum(['accepted', 'pending', 'rejected']).optional(),
        driverLocation: zod_1.z.string().optional(),
    }),
});
exports.BidValidations = {
    createBidValidationSchema: exports.createBidValidationSchema,
    updateBidValidationSchema: exports.updateBidValidationSchema,
};
