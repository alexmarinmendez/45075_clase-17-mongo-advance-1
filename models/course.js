import mongoose from "mongoose"

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    topics: {
        type: Array,
        default: []
    },
    proffesor: String
})

const courseModel = mongoose.model('courses', courseSchema)
export default courseModel