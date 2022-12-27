import {ReactNode} from 'react';
import styles from './style.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  view?: 'secondary'
}


export const Button: React.FC<IButtonProps> = ({children, onClick, view}) => {
  return (

    <button className={`${styles.btn} ${styles[`btn--${view}`]}`} onClick={onClick}>
      <span className={styles["btn__inner"]}>
        {children}
      </span>
      <span className={styles["btn__lines-top"]}></span>
      <span className={styles["btn__lines-bottom"]}></span>
    </button>

  );
}
