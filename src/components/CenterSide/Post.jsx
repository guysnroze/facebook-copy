import React from 'react'
import Avatar from '../Avatar'
import { MenuOutlined } from '@ant-design/icons'
import vlad from '../../1.jpg'

const Post = () => {
    return (
        <div className='shadow-lg rounded'>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Avatar />
                        <div className='ml-2'>
                            <div className='text-gray-800 text-sm font-medium'>Vladislav Augistin</div>
                            <div className='text-xs'>5 mins</div>
                        </div>
                    </div>
                    <MenuOutlined className='text-gray-600 text-lg' />
                </div>
                <div className='mt-4 mb-2'>Ну и </div>
            </div>
            <img
                src=''
                alt=''
            />
        </div>
    )
}

export default Post
