import Blog from "@modals/Blog";
import { ConnectToDB } from "@utils/Database"

export const GET = async (req, resp) => {
    try {
        await ConnectToDB();
        const blogs = await Blog.find({}).populate('creator')
        return new Response(JSON.stringify(blogs), { status: 200 })
    }
    catch (error) {
        return new Response("Internal Server Error", { status: 500 })
    }
}
