import React from 'react';
import style from '../../styles/system/button.module.scss';
import Link from './Link';

interface ButtonContainerProps {
  children: React.ReactNode;
  position?: 'left' | 'center' | 'right';
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  position = 'right',
}) => {
  return (
    <div data-position={position} className={style['button-container']}>
      {children}
    </div>
  );
};

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  color = 'primary',
  href,
  className,
}) => {
  if (href) {
    return <Link href={href} children={children} />;
  }

  return (
    <button onClick={onClick} className={className} data-color={color} type={type}>
      {children}
    </button>
  );
};

export default Button;