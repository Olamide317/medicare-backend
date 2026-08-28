import express from "express";
import {
  createContactMessage,
  getAllContactMessages,
} from "../controller/contact.controller.js";

const router = express.Router();

router.post("/", createContactMessage);
router.get("/", getAllContactMessages);

export default router;