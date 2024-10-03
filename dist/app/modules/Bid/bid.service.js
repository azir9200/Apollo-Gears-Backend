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
exports.BidService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const rent_model_1 = require("../Rent/rent.model");
const bid_model_1 = require("./bid.model");
const createBid = (bid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bid_model_1.Bid.create(bid);
});
const findBidById = (bidId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bid_model_1.Bid.findById(bidId);
});
const getAllBids = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const bidQuery = new QueryBuilder_1.default(bid_model_1.Bid.find(), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield bidQuery.modelQuery;
    const metaData = yield bidQuery.countTotal();
    return {
        meta: metaData,
        data: result,
    };
});
const updateBidById = (bidId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bid_model_1.Bid.findByIdAndUpdate({ _id: bidId }, payload, {
        new: true,
        runValidators: true,
    });
    if ((result === null || result === void 0 ? void 0 : result.bidStatus) === 'accepted') {
        const newResult = yield rent_model_1.Rent.findByIdAndUpdate({ _id: result.rentId }, { rentStatus: 'ongoing' }, {
            new: true,
            runValidators: true,
        });
        return newResult;
    }
    return result;
});
const deleteBidById = (bidId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bid_model_1.Bid.findByIdAndDelete(bidId);
    return result;
});
exports.BidService = {
    createBid,
    findBidById,
    getAllBids,
    updateBidById,
    deleteBidById,
};
