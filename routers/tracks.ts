import express from "express";


const trackRouter = express.Router();

trackRouter.get("/", async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

trackRouter.post("/", async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

export default trackRouter;