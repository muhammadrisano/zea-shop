import React from 'react'
import { Sidebar } from './_components'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex min-h-[calc(100vh-80px)]'>
       <Sidebar />
        <div className='flex-1 bg-[#f5f5f5] p-5'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout