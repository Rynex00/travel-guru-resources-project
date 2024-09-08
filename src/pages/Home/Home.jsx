import React from 'react'
import homeimg from '../../assets/Rectangle 1.png'
import Navber from '../Shared/Navber/Navber'

const Home = () => {
    return (
        <div className='bg-black/40 bg-blend-multiply bg-cover'
            style={{ backgroundImage: `url(${homeimg})` }}>
            <Navber />

            <div className='pt-24 text-white'>
                <h2 className='text-7xl uppercase'>Cox's bazar</h2>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button>Booking </button>
            </div>
        </div>
    )
}

export default Home