import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'md', color, className, style }) => {
    return (
        <button style={style} onClick={onClick} className={`hover:opacity-75 text-lg duration-300 ${size === 'sm' ? "py-1" : "py-2"} rounded-full text-black font-extrabold ${className}`}>
            {children}
        </button>
    )
}

export default Button