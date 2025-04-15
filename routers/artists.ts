import express from 'express';
import {imagesUpload} from "../multer";

const artistRouter = express.Router();

artistRouter.get('/', async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }

});

artistRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
});

export default artistRouter;