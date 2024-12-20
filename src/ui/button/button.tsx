import React from 'react';
import styles from './button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ icon }) => {
  return <button className={styles.button}>{icon}</button>;
};

export default Button;
