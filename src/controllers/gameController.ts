import { Router } from "express";
import { handleStartGame } from "../routes/gameRoute";

const router : Router = Router();

router.post("/start",handleStartGame);

export default router