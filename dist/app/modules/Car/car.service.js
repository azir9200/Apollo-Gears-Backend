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
exports.CarService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const car_constant_1 = require("./car.constant");
const car_model_1 = require("./car.model");
const createCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.Car.create(car);
});
const findCarById = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.Car.findById(carId);
});
const getAllCars = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const carQuery = new QueryBuilder_1.default(car_model_1.Car.find(), query)
        .search(car_constant_1.CarSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield carQuery.modelQuery;
    const metaData = yield carQuery.countTotal();
    return {
        meta: metaData,
        data: result,
    };
});
const updateCarById = (carId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate({ _id: carId }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteCarById = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndDelete(carId);
    return result;
});
exports.CarService = {
    createCar,
    findCarById,
    getAllCars,
    updateCarById,
    deleteCarById,
};
