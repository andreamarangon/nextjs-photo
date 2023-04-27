import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-7xl m-auto p-4 h-screen' >
      <h1 className='text-2xl font-bold text-center p-4'>Contattami</h1>
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type="text" placeholder='Nome' />
          <input className='border shadow-lg p-3' type="email" placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Oggetto' />
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Messaggio'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2'>Invia</button>
      </form>
    </div >

  )
}

export default Contact