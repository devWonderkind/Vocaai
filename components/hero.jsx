import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { Button } from "@/components/ui/button"
// import banner from '../public/banner-img.jpg'
const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl'>
                    Your AI carrer coach for
                    <br />
                    Professional Success
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Advance your career with persnolized guidance, interview prep, and AI-powered tools for job success.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <Link href='/dashboard'>
                <Button size='lg' className='px-8 animate-bounce'>
                    Get Started
                    </Button></Link>
                    {/* <Link href='https://www.youtube.com'>
                <Button size='lg' className='px-8' variant='outline'>
                    Get Started
                    </Button></Link> */}
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection
