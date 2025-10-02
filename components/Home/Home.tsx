import React from 'react'

import Hero from './Hero/Hero'
import ParticleBackground from '../../lib/ParticleBackground'
import About from './About/About';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <ParticleBackground />
            <Hero />
            <About />
        </div>
    )
}

export default Home
