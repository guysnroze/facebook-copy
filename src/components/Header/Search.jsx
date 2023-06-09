import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
    return (
        <div className='bg-gray-200 flex items-center rounded-full py-1 px-4'>
            <SearchOutlined className='text-lg text-gray-600' />
            <input placeholder='Search Facebook' className='outline-0 bg-gray-200 px-2 ml-2' />
        </div>
    )
}

export default Search