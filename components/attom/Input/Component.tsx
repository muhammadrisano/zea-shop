import React, { forwardRef } from 'react'
import { IInputProps } from './interface'
import { cn } from '../../../utils/cn';
import { cva } from 'class-variance-authority';
import * as MyComponent from "../../../components";

const Component:React.FC<IInputProps> = forwardRef(({className, variant, size, label, ...prpos}, ref:React.Ref<HTMLInputElement>) => {
    return (
        <div className={cn('relative', className)}>
              {label && <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>   }
              <input
                ref={ref}
                className={cn(inputVariants({variant, size}), 'w-full')}
                {...prpos}
              />
              {variant === 'search' && (
                <div className='absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 cursor-pointer'>
                   <MyComponent.Icon.IcSearch />    
                </div>
              )}
        </div>
    )
});

const inputVariants = cva('border',{
    variants:{
        variant:{
            auth: 'border-clr-my-gray rounded px-4 py-3',
            search: 'box-border border-clr-my-gray rounded-full pl-6 pr-0  py-2 text-base focus:outline-none focus:ring-2 focus:ring-clr-my-gray focus:border-transparent',
            default: 'border border-clr-my-gray rounded text-text-primary focus:outline-none focus:ring-2 focus:ring-clr-my-gray focus:border-transparent',
            error: 'border-red-500',
            radio: ''
        },
        size:{
            default: '',
            sm: 'py-2 px-3',
            md: 'py-3 px-4 text-sm',
            lg: 'py-4 px-5'
        },
        defaultVariants:{
            variant: 'default',
            size: 'default' 
        }
    }
})
    

Component.displayName = "Input";

export default Component