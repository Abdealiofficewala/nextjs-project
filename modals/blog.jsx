import { Schema, model, models } from "mongoose";


const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog;