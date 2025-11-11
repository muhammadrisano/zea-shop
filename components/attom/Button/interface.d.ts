import {ButtonHTMLAttributes} from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'| 'icon' | 'iconBorder' | 'counter';
    label?: string;
    size?: 'small' | 'medium' | 'large';

}