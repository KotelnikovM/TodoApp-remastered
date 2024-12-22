import React from 'react';
import styles from './button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ icon, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {icon}
    </button>
  );
};

export default Button;
