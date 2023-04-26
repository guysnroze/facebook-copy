import React from 'react'
import s from './LeftSide.module.css'

const copy = [
    'Privacy',
    'Terms',
    'Advertising',
    'Ad Choices',
    'Cookies',
    'More',
    'Facebook © 2021',
]

const Copyrights = () => {
    return (
        <div className={s.copy}>
            <ul className='list-none'>
                {copy.map(text => (
                    <li key={`copy ${text}`} className='inline-block mr-3'>
                        <a href='/' className='text-gray-500 text-xs'>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Copyrights
