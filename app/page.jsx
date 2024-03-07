import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Medium Blogs
                <br />
                <span className="orange_gradient text-center">Technical & Security Blogs</span>
            </h1>
            <p className="desc text-center">
                A medium blog is a platform where individuals and organizations can publish articles and stories on various topics, providing a space for writers to share their thoughts, expertise, and experiences with a wider audience.
            </p>
            <Feed />
        </section>
    )
}

export default Home