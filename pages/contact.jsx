import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Hero heading='Contattami' message='Compila e invia il form per ulteriori informazioni' />
      <Contact />
    </div>
  )
}

export default contact