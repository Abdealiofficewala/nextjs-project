import Blog from "@modals/Blog";
import { ConnectToDB } from "@utils/Database"

export const POST = async (req, resp) => {
    const { id, title, description } = await req.json()
    try {
        await ConnectToDB();
        const newBlog = new Blog({
            title,
            description,
            creator: id,
        })
        await newBlog.save()
        return new Response(JSON.stringify(newBlog), { status: 201 })
    }
    catch (error) {
        return new Response("Bad Request", { status: 401 })
    }
}
