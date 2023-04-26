import React from 'react'
import Menu from './Menu'
import Profile from './Profile'
import Search from './Search'

const Header = () => {
    return (
        <div className='px-4 py-2 flex items-center justify-between shadow'>
            <div className='w-1/4 flex items-center'>
                <div className='mr-2'>
                    <img
                        className='h-8 rounded-full'
                        src='https://cdn.svgporn.com/logos/facebook.svg'
                        alt='logo'
                    />
                </div>
                <Search />
            </div>
            <div className='w-1/2'>
                <Menu />
            </div>
            <div className='w-1/4'>
                <Profile />
            </div>
        </div>
    )
}

export default Header