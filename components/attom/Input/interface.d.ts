import {InputHTMLAttributes} from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    type: 'text' | 'password' | 'email';
    errorMessage?: string;
    label?: string;
}
export type {IInputProps}