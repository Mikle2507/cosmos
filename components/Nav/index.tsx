import Link from 'next/link';
import { Fragment } from 'react';
import styles from './style.module.scss';

interface INavProps {

}

const links = [
  {
      id: 1,
      title: 'Home',
      href: '/',
      active: true,
  },
  {
      id: 2,
      title: 'Factions',
      href: '/',
      active: false,
  },
  {
      id: 3,
      title: 'Roadmap',
      href: '/',
      active: false,
  }
];


export const Nav: React.FC<INavProps> = ({}) => {
  return (
    <nav className={styles.navigation}>
        {links.map((link, id) => (
            <Fragment key={link.id}>
                <Link
                    href={link.href}
                    className={`${styles["navigation__link"]} ${ (link.active)? `${styles["navigation__link--active"]}`:``}`}
                >
                    {link.title}
                </Link>
                {id < links.length - 1 && (
                    <span className={styles["navigation__star"]} />
                )}
            </Fragment>
        ))}
    </nav>
  );
}
