import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({ 
    blogImage:{type: String , required: true},
    blogTitle: {type: String, required: true},
    blogDescription:{type: String , required: true},
    blogCategory:{type: String , required: true},
    createDate:{type: Date, default: Date.now}
});
export const NewBlog = mongoose.models.NewBlog || mongoose.model("NewBlog", blogsSchema);