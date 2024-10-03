"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bid_controller_1 = require("./bid.controller");
const bid_validation_1 = require("./bid.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_utils_1 = require("../User/user.utils");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_utils_1.USER_ROLE.driver), (0, validateRequest_1.default)(bid_validation_1.createBidValidationSchema), bid_controller_1.BidController.createBid);
router.get('/', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user, user_utils_1.USER_ROLE.driver), bid_controller_1.BidController.getAllBids);
router.get('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user, user_utils_1.USER_ROLE.driver), bid_controller_1.BidController.findBidById);
router.patch('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.user, user_utils_1.USER_ROLE.driver), (0, validateRequest_1.default)(bid_validation_1.updateBidValidationSchema), bid_controller_1.BidController.updateBidById);
router.delete('/:id', (0, auth_1.default)(user_utils_1.USER_ROLE.admin, user_utils_1.USER_ROLE.driver), bid_controller_1.BidController.deleteBidById);
exports.BidRoutes = router;
