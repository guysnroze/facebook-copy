import React from 'react'
import AddPost from './AddPost'
import Post from './Post'

const CenterSide = () => {
    return (
        <div className='w-1/2 mt-4'>
            <AddPost />
            <Post />
        </div>
    )
}

export default CenterSide