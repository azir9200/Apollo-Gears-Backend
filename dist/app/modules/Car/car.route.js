"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const car_controller_1 = require("./car.controller");
const car_validation_1 = require("./car.validation");
const router = express_1.default.Router();
router.post('/', 
// auth(USER_ROLE.admin),
(0, validateRequest_1.default)(car_validation_1.createCarValidationSchema), car_controller_1.CarController.createCar);
router.get('/', car_controller_1.CarController.getAllCars);
router.get('/:id', car_controller_1.CarController.findCarById);
router.patch('/:id', 
// auth(USER_ROLE.admin),
(0, validateRequest_1.default)(car_validation_1.updateCarValidationSchema), car_controller_1.CarController.updateCarById);
router.delete('/:id', 
// auth(USER_ROLE.admin),
car_controller_1.CarController.deleteCarById);
exports.CarRoutes = router;
