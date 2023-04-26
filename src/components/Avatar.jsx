import ava from '../ava.jpg'

const Avatar = () => (
    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer mt-1'>
        <img src={ava} alt='ava' />
    </div>
)

export default Avatar
