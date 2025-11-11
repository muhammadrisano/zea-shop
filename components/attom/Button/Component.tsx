import React from 'react'
import { IButtonProps } from './interface'
import { cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'



const Component:React.FC<IButtonProps> = ({label, variant, className, size, children, ...props}) => {
  return (
    <button {...props} className={cn(buttonVariants({variant, size}), className)}>
        {label && label}
        { variant === 'icon' || variant === 'iconBorder' ? <div className='absolute top-1/2 left-1/2 -translate-1/2'>{children}</div>  : children}
    </button>
  )
}

const buttonVariants = cva(
     'rounded-md font-medium cursor-pointer hover:opacity-50 relative', {
        variants:{
            variant:{
                primary: 'bg-clr-primary text-white rounded-full',
                secondary: 'bg-transparent text-clr-my-gray border border-clr-my-gray rounded-full hover:text-black',
                icon: 'h-10 w-10 bg-transparent p-2 rounded-full',
                iconBorder: 'bg-transparent h-10 w-10 rounded-xl border border-clr-my-gray hover:bg-gray-200 ',
                counter: "rounded-full h-9 w-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] flex justify-center items-center",
            }, 
            size: { 
                small: 'text-sm px-5 py-1',
                medium: 'text-sm px-6 py-2 font-medium',
                large: 'py-3 px-4 text-base font-medium   ', 
                default: ''
            },
            variantDefault: { 
              size: 'default'
            }
        }
     }
)


export default Component