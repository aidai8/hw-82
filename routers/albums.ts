import express from "express";
import {imagesUpload} from "../multer";


const albumRouter = express.Router();

albumRouter.get("/", async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

albumRouter.get("/:id", async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

albumRouter.post("/", imagesUpload.single("image"), async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

export default albumRouter;