import React from 'react'
import Copyrights from './Copyrights'

const menu = [
    {
        img: 'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview',
        title: 'Not-So-Secret Family Recipes',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421__480.png',
        title: 'Red Table Talk Group',
    },
    {
        img: 'https://image.flaticon.com/icons/png/512/1458/1458512.png',
        title: 'Events',
    },
    {
        img: 'https://icons-for-free.com/iconfiles/png/512/bookmark-131964752402712733.png',
        title: 'Saved',
    },
    {
        img: 'https://icons.iconarchive.com/icons/papirus-team/papirus-devices/512/input-gaming-icon.png',
        title: 'Gaming',
    },
    {
        img: 'https://icon-library.com/images/fundraising-icon/fundraising-icon-16.jpg',
        title: 'Fundraisers',
    },
    {
        img: 'https://icons-for-free.com/iconfiles/png/512/citycons+click+memories+pictures+icon-1320136425346395563.png',
        title: 'Memories',
    },
    {
        img: 'https://pics.freeicons.io/uploads/icons/png/2515875551582823581-512.png',
        title: 'Help & Support',
    },
    {
        img: 'https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png',
        title: 'Settings & Privacy',
    },
    {
        img: 'https://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-GrooveShark-icon.png',
        title: 'See more',
    },
]


const LeftSide = () => {
    return (
        <div className='shadow-lg p-4 w-1/4 h-screen'>
            <div className="flex items-center justify-between mb-2">
                <h2 className='text-2xl font-bold'> Home </h2>
                <a href="/" className='text-blue-400'>Create</a>
            </div>
            <ul className='list-none'>
                {menu.map((item, idx) => (
                    <li key={'menu' + idx}>
                        <a href="" className='flex items-center py-2'>
                            <img src={item.img} alt="" className='h-9 w-9 mr-2 ' />
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <Copyrights />
        </div>
    )
}

export default LeftSide