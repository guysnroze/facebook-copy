import React, { useState } from 'react'
import Avatar from '../Avatar'
import { FileImageOutlined } from '@ant-design/icons'
import Modal from '../Modal/Modal'

const AddPosting = () => {
const [modalActive, setModalActive] = useState(true)
const [value, setValue] = useState('')
const [posts, setPosts] = useState([])

const addPosts = () => {
    if (value) {
        setPosts([...posts, {
            id: Date.now(),
            title: value,
        }])
        setValue('')
    }
}
    return (
        <div className='flex items-center shadow-lg justify-between mb-5 p-3 rounded'>
            <Avatar />
            <button className='rounded p-2 w-10/12 mx-2 sm:bg-gray-200 text-gray-800' onClick={() => setModalActive(true)}>
                Add a post
            </button>
            <FileImageOutlined className='text-3xl flex items-center justify-center text-gray-600' />

            <Modal active={modalActive} setActive={setModalActive}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={addPosts}>Add a Post</button>
            </Modal>
        </div>
    )
}

export default AddPosting
