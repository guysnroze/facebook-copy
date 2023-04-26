import React from 'react'
import { MenuOutlined } from '@ant-design/icons'

const menu = [
    {
        img: 'https://flxt.tmsimg.com/assets/1122_v9_bc.jpg',
        title: 'Paul McCartney',
    },
    {
        img: 'https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222',
        title: 'John Lennon',
    },
    {
        img: 'https://elcomercio.pe/resizer/rD6fvb3hnOvIJ05aKN1mmS_mbtI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OERRYUZCQNA6PNEOG7UBDEQSRI.jpeg',
        title: 'George Harrison',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ringo_Starr.png',
        title: 'Ringo Star',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVFcODFjbXMyxoYi4uPtW5ZrgzM4p9jHgY-xeDkYDgoSPrj3xAtnI_CFZYyRpLL0x05I&usqp=CAU',
        title: 'Mick Jagger',
    },
    {
        img: 'https://rock-history.ru/upload/000/u1/003/f2ff5c2f.jpg',
        title: 'Keith Richards',
    },
    {
        img: 'https://i.pinimg.com/474x/00/29/84/0029840c85db749df9846fb1643fa2a1.jpg',
        title: 'Ron Wood',
    },
    {
        img: 'https://i.pinimg.com/originals/96/1b/0e/961b0e20516cadc81a3433dd15b3c3cd.jpg',
        title: 'Bill Wyman',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYjgxNDUzNjgtODIwMi00OGYzLWI2NjEtYmM4NzljMjZlYzk2XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
        title: 'Brian Jons',
    },
]

const Contacts = () => {
    return (
        <div className='shadow-lg p-4'>
            <div className='flex items-center justify-between mb-2 '>
                <h2 className='text-2xl font-bold'>Contacts</h2>
                <MenuOutlined className='text-gray-600 text-lg' />
            </div>
            <ul className='list-none'>
                {menu.map((item, idx) => (
                    <li key={'menu ' + idx}>
                        <a href='/' className='flex items-center py-2'>
                            <div className='h-9 w-9 mr-2 rounded-full overflow-hidden'>
                                <img src={item.img} alt='' />
                            </div>
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts
