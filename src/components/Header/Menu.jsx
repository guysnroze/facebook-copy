import React from 'react'
import {
    HomeOutlined,
    NotificationOutlined,
    PlaySquareOutlined,
    ShopOutlined,
    TeamOutlined,
    MessageOutlined
} from '@ant-design/icons'
import Avatar from '../Avatar'
import s from './Header.module.css'


const Menu = () => {
    return (
        <div className={s.menu}>
            <ul className='list-none grid grid-cols-7 gap-2 text-center'>
                <li className='active'>
                    <a href="/#">
                        <HomeOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <NotificationOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <PlaySquareOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
                <li className="m-auto">
                    <a href="/">
                        <Avatar />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <ShopOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <TeamOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <MessageOutlined className='text-3xl text-gray-500' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu