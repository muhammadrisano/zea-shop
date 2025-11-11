import React from 'react'
import * as MyComponent from '../../../components'

const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <>
    <MyComponent.Molecules.Navbar/>
    <div>{children}</div>
    </>
  )
}

export default layout