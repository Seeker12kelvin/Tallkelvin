import React, { useState, useEffect } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.6, // 60% visible = active
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
  ]

  return (
    <header className='fixed self-center bg-[#0000008f] p-6 mt-4 z-10 rounded-4xl backdrop-blur-lg shadow-md'>
      <nav className='flex justify-center items-center'>
        <ul className='flex space-x-6 text-xl text-white'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-all duration-300 ${
                  activeSection === item.id
                    ? 'border-b-2 border-white pb-0.5 text-cyan-300'
                    : 'text-cyan-200 hover:border-b-2 hover:border-white pb-0.5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
