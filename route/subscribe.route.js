import express from "express";
import { userSubscription } from "../controller/subscribe.controller.js";

const router = express.Router();

router.post("/", userSubscription);

export default router;