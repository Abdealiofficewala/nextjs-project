import Image from 'next/image'
import { useState } from 'react'

const BlogCard = ({ blog }) => {
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={blog.creator.image}
                        width={40}
                        height={40}
                        alt="creator_image"
                        className='rounded-full object-contain'
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {blog.creator.username}
                        </h3>
                        <p className='font-inter text-sm text-gray-500'>
                            {blog.creator.email}
                        </p>
                    </div>
                </div>
            </div>
            <p className="my-4 font-satoshi text-sm text-gray-700">
                {blog.title}
            </p>
            <p className="font-inter text-sm blue_gradient cursor-pointer desc_wrap">
                {blog.description}
            </p>
        </div>
    )
}

export default BlogCard