import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';
import logoImg from './images/logo.png';

interface ILogoProps {

}

export const Logo: React.FC<ILogoProps> = ({}) => {
  return (
    <Link href="/" className={styles.logotype} aria-label = "Link to homepage">
      <Image
        className={styles['logotype__img']}
        src={logoImg}
        alt="Dusctopia logotype"
      />

    </Link>
  );
}
