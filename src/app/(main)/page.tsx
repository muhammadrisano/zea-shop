import React from 'react'
import * as MyComponent from "../../../components";
import {Category, Popular, New} from './_components'


const page = () => {
  return (
    <div>
        <Category/>
        <New/>
        <Popular/>
    </div>
  )
}

export default page