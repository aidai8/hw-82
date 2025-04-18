import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrackHistorySchema = new Schema({

});

const TrackHistory = mongoose.model("TrackHistory", TrackHistorySchema);
export default TrackHistory;