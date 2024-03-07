"use client"
import { useState, useEffect } from 'react'
import BlogCard from './BlogCard'

const BlogCardList = ({ data }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}


const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blog', { method: 'GET' })
            const data = await response.json()
            setBlogs(data)
        }
        fetchBlogs()
    }, [])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="search_input peer"
                    required
                />
            </form>

            <BlogCardList data={blogs} />
        </section>
    )
}

export default Feed