import {ReactNode} from 'react';
import styles from './style.module.scss';


export type TypeButton = 'blue-purple' | 'green-yellow' | 'blue' | 'yellow-pink';

interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
  className: string;
  type?: TypeButton;
}


export const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  type

  }) => {
  return (

    <button className={`
      ${styles.btn}
      ${className}
      ${type ? `${styles["btn--type"]} ${styles[`btn--${type}`]}`: ''}
      `} onClick={onClick}>
      <span className={styles["btn__text"]}>
        {children}
      </span>
      <span className={styles["btn__angle-left"]}></span>
      <span className={styles["btn__angle-right"]}></span>
    </button>

  );
}
