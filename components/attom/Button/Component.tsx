import React from 'react'
import { IButtonProps } from './interface'
import { cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'



const Component:React.FC<IButtonProps> = ({label, variant, className, ...props}) => {
  return (
    <button {...props} className={cn(buttonVariants({variant}), className)}>
        {label}
    </button>
  )
}

const buttonVariants = cva(
     'py-3 px-4 rounded-md font-medium cursor-pointer hover:opacity-50', {
        variants:{
            variant:{
                primary: 'bg-clr-primary text-white rounded-full',
                secondary: 'bg-gray-800 text-white',
            }        
        }
     }
)


export default Component