import React from 'react'
import * as MyComponent from "../../../../../components";

const page = async({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params;
    console.log(id)
  return (
    <form action="">
        <div className='flex flex-col gap-4 mt-8'>
            <MyComponent.Attom.Input type='password' name="password" placeholder="New Password" variant="auth" className="w-full"/>
            <MyComponent.Attom.Input type='password' name='comfirmPassword' placeholder='Confirm New Password' variant="auth" className="w-full"/>
            <MyComponent.Attom.Button label="Set New Password" variant='primary' className="w-full mt-6"/>
            
        </div>
    </form>
  )
}

export default page