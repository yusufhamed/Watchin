import mongoose, { Schema } from "mongoose"
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const movieSchema = new Schema (
    {
        ID: String,
        User: String,
    },

)

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema)
export default Movie
