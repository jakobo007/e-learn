import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full mt-10'>
      <SignUp signInUrl='/e-learn/login'/>
    </div>
  )
}

export default Register
