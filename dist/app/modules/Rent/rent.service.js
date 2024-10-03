"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const rent_model_1 = require("./rent.model");
const createRent = (rent) => __awaiter(void 0, void 0, void 0, function* () {
    return yield rent_model_1.Rent.create(rent);
});
const findRentById = (rentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield rent_model_1.Rent.findById(rentId);
});
const getAllRents = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const rentQuery = new QueryBuilder_1.default(rent_model_1.Rent.find(), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield rentQuery.modelQuery;
    const metaData = yield rentQuery.countTotal();
    return {
        meta: metaData,
        data: result,
    };
});
const updateRentById = (rentId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rent_model_1.Rent.findByIdAndUpdate({ _id: rentId }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteRentById = (rentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rent_model_1.Rent.findByIdAndDelete(rentId);
    return result;
});
exports.RentService = {
    createRent,
    findRentById,
    getAllRents,
    updateRentById,
    deleteRentById,
};
