import {ReactNode} from 'react';
import styles from './style.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}


export const Button: React.FC<IButtonProps> = ({children, onClick}) => {
  return (

    <button className={styles.btn} onClick={onClick}>
      <span className={styles["btn__text"]}>
        {children}
      </span>
      <span className={styles["btn__angle-left"]}></span>
      <span className={styles["btn__angle-right"]}></span>
    </button>

  );
}
