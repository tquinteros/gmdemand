import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'md', className, style }) => {
    return (
        <button style={style} onClick={onClick} className={`text-lg hover:opacity-75 duration-300 font-extrabold ${size === 'sm' ? "py-1" : "py-2"} rounded-full text-black ${className}`}>
            {children}
        </button>
    )
}

export default Button