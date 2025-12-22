"use client"
import React from 'react'
import AboutHeroComponent from './AboutHeroComponent'
import MissionVisionComponent from './MissionVisionComponent'
import FaqSection from '@/components/landing/FaqSection'
import ContactSection from '@/components/landing/ContactSection'

const AboutComponent = () => {
    return (
        <div>
            <AboutHeroComponent />
            <MissionVisionComponent />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default AboutComponent
