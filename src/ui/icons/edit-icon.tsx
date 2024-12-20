import React from 'react';
import styles from './icons.module.css';
type IEditIconProps = React.SVGProps<SVGSVGElement>;

export const EditIcon: React.FC<IEditIconProps> = () => {
  return (
    <svg
      className={styles.editIcon}
      height="24"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
};
