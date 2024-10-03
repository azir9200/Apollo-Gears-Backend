"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const rent_controller_1 = require("./rent.controller");
const rent_validation_1 = require("./rent.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_utils_1 = require("../User/user.utils");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_utils_1.USER_ROLE.user), (0, validateRequest_1.default)(rent_validation_1.createRentValidationSchema), rent_controller_1.RentController.createRent);
router.get('/', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user, user_utils_1.USER_ROLE.driver), rent_controller_1.RentController.getAllRents);
router.get('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user, user_utils_1.USER_ROLE.driver), rent_controller_1.RentController.findRentById);
router.patch('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user), (0, validateRequest_1.default)(rent_validation_1.updateRentValidationSchema), rent_controller_1.RentController.updateRentById);
router.delete('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user), rent_controller_1.RentController.deleteRentById);
exports.RentRoutes = router;
