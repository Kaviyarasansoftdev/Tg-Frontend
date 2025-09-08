import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function Main() {
  const location = useLocation().pathname
  const [isScroll, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='flex flex-col justify-between'>
        <Header />
        <main className={`${location == '/' ? (!isScroll ? 'pt-[70px] md:pt-[150px] lg:pt-[200px]' : 'pt-[60px] md:pt-[130px] lg:pt-[160px]') : ''}`} >
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
