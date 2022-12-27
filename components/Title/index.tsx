
import {ReactNode} from 'react';
import styles from './style.module.scss';
interface ITitleProps {
  children: ReactNode;
  size?: 'medium' | 'large';
  align?: 'center' | 'right';
}

export const Title: React.FC<ITitleProps> = ({align = '', size = 'medium', children}) => {
  return (
    <h2 className={`${styles.title} ${styles[`title--${size}`]} ${styles[`title--${align}`]}`}>{children}</h2>
  );
}
