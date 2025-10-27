import React, { forwardRef } from 'react'
import { IInputProps } from './interface'
import { cn } from '../../../utils/cn';

const Component:React.FC<IInputProps> = forwardRef(({className, label, ...prpos}, ref:React.Ref<HTMLInputElement>) => {
    return (
        <div>
              {label && <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>   }
              <input
                ref={ref}
                className={cn("border border-clr-my-gray rounded px-4 py-3", className)}
                {...prpos}
              />
        </div>
    )
});

Component.displayName = "Input";

export default Component