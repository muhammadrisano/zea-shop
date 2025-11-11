import React from 'react'
import * as MyComponent from "../../../../components";
import Link from 'next/link';
const page = () => {
  return (
    <form action="">
        <div className='flex flex-col gap-4 mt-8'>
        <MyComponent.Attom.Input type="email" name="email" placeholder="email" variant="auth" className="w-full"/>
        <MyComponent.Attom.Button label="Reset Password" variant='primary' className="w-full mt-6"/>
        <p className='mt-4'>Don&apos;t have a Tokopedia account?<Link className='text-clr-primary' href="/register"> Register</Link></p>
        </div>
    </form>
  )
}

export default page