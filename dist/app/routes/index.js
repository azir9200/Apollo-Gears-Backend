"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const bid_route_1 = require("../modules/Bid/bid.route");
const car_route_1 = require("../modules/Car/car.route");
const rent_route_1 = require("../modules/Rent/rent.route");
const user_route_1 = require("../modules/User/user.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/cars',
        route: car_route_1.CarRoutes,
    },
    {
        path: '/bids',
        route: bid_route_1.BidRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/rents',
        route: rent_route_1.RentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
