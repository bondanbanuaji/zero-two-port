import React from 'react'

import Hero from './Hero/Hero'
import ParticleBackground from './Hero/ParticleBackground'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <ParticleBackground />
            <Hero />
        </div>
    )
}

export default Home
