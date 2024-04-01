const mongoose = require ("mongoose");
const userSchema= new mongoose.SchemaType({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    likedMovies: Array,
})

module.exports = mongooes.model("users",userSchema);