import Link from 'next/link'
import React from 'react'

const BlogForm = ({
    type,
    blog,
    setBlog,
    submitting,
    onSubmit
}) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text_left">
                <span className="blue_gradient">{type} Blog</span>
            </h1>
            <p className="desc text-left max-w-md">
                Empowering Voices, Igniting Curiosity.
                Discover, Connect, and Inspire.
            </p>
            <form
                onSubmit={onSubmit}
                className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-santoshi font-semibold text-base text-gray-700">
                        Your Blog Title
                    </span>
                    <input
                        value={blog.title}
                        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                        placeholder="Please Enter a blog Title"
                        required
                        className="form_input"
                    />

                </label>
                <label>
                    <span className="font-santoshi font-semibold text-base text-gray-700">
                        Description
                    </span>
                    <textarea
                        value={blog.description}
                        onChange={(e) => setBlog({ ...blog, description: e.target.value })}
                        placeholder="Description..."
                        required
                        className="form_textarea"
                    />

                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>
                    <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? <>submitting...</> : <>{type}</>}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default BlogForm