import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    message: ''
  })

  const handleOnChange = useCallback((e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
    [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null}
    })
  }, [])

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg}
      })
      setInputs({
        companyName: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {error: true, msg}
      })
    }
  }, [])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true
    }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xzbownnr',
      data: inputs
    }).then(_response => {
      handleServerResponse(true, 'Thank you, your message has been sent.')
    })
  }, [inputs, handleServerResponse])

  return (
    <div className='bg-cyan-600 text-white flex flex-col justify-center pt-10 min-h-screen'>
      <div className='flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6'>
        <div className='pb-10'>
          <Image src='/assets/logo.svg' width={30} height={30} alt='logo' />
        </div>
        <h2 className='text-4xl font-bold'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]'>
          {status.info.error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
              <strong className='font-bold'>Error </strong>
              <span className='block sm:inline'>{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div className='text-white text-xl font-bold px-4 py-3 rounded relative' role='alert'>Your message has been successfully sent!</div>
          ) : (
            <>
              <input className='bg-cyan-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2' id="companyName" name="companyName" required maxLength={128} type='text' placeholder='Company Name' onChange={handleOnChange} value={inputs.companyName} />
              <input className='bg-cyan-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-2' type="email" id='email' name='email' required maxLength={128} placeholder='E-mail' onChange={handleOnChange} value={inputs.email} />
              <textarea className='bg-cyan-700 text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]' name="message" id="message" required maxLength={1048576} placeholder='Additional info' onChange={handleOnChange} value={inputs.message}></textarea>
              <div className='text-center mt-10'>
                <button type='submit' className='bg-white text-black rounded-3xl px-8 py-2'>
                  {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...' }
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactUs