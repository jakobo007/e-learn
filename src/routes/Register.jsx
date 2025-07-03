import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full mt-5'>
      <SignUp signInUrl='/login'/>
    </div>
  )
}

export default Register
