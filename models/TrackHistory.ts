import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrackHistorySchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
});

const TrackHistory = mongoose.model("TrackHistory", TrackHistorySchema);
export default TrackHistory;