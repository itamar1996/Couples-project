"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameRoute_1 = require("../routes/gameRoute");
const router = (0, express_1.Router)();
router.post("/start", gameRoute_1.handleStartGame);
exports.default = router;
