import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const work = () => {
  return (
    <div>
      <Hero heading="Le Mie Foto" message="Questi sono alcune dei miei scatti fatti viaggiando per il mondo" />
      <Portfolio />
    </div>
  )
}

export default work