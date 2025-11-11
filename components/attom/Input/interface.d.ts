import {InputHTMLAttributes} from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    type?: 'text' | 'password' | 'email' | 'radio'; // default 'text'
    errorMessage?: string;
    label?: string;
    size?: 'sm' |'md'| 'lg';
    variant?: 'auth' | 'search' | 'default' | 'error' | 'radio';
}
export type {IInputProps}