import mongoose, {Types} from 'mongoose'
import Artist from "./Artist";

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    album_name: {
        type: String,
        required: [true, 'Please enter an album name'],
    },
    artist: {
      type: Schema.Types.ObjectId,
        ref: "Artist",
        required: true,
        validate: {
          validator: async (value: Types.ObjectId) => {
              if (!mongoose.Types.ObjectId.isValid(value)) return false;
              const artist = await Artist.findById(value);
              return !!artist;
              },
            message: "Artist not found",
        },
    },
    year: {
      type: Number,
      required: [true, 'Please enter a year'],
    },
    image: {
        type: String,
        required: false,
    },
});

const Album = mongoose.model("Album", AlbumSchema);
export default Album;