import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/upload", controller.uploadImage);

export default router;
