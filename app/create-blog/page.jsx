"use client"

import BlogForm from "@components/BlogForm"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useState } from "react"

const CreateBlog = () => {
    const { data: session } = useSession()
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false)
    const [blog, setBlog] = useState({
        title: '',
        description: '',
    })
    const createBlog = async (e) => {
        e.preventDefault();
        setSubmitting(true)
        try {
            const resposnse = await fetch('/api/blog/new', {
                method: 'POST',
                body: JSON.stringify({
                    id: session?.user.id,
                    title: blog.title,
                    description: blog.description
                })
            })
            if (resposnse.ok) {
                router.push("/");
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setSubmitting(false)
        }
    }
    return (
        <BlogForm
            type="Create"
            blog={blog}
            setBlog={setBlog}
            submitting={submitting}
            onSubmit={createBlog}
        />
    )
}

export default CreateBlog