import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {Button, TypeButton} from '../Button';

import styles from './style.module.scss';

interface IArtMenuItemProps {
  id: number;
  href: string;
  title: string;
  image: string;
  isOpened: boolean;
  onClick: (event: React.MouseEvent) => void;
}

const getTypeById = (id: number): TypeButton => {
  if (id === 1) {
      return 'yellow-pink';
  }

  if (id === 2) {
      return 'blue';
  }

  if (id === 3) {
      return 'blue-purple';
  }

  return 'green-yellow';
}

export const ArtMenuItem: React.FC<IArtMenuItemProps> = ({
  id,
  href,
  image,
  title,
  isOpened,
  onClick
}) => {
  return (
      <Link
          href={href}
          onClick={onClick}
          className={`${styles["art-menu__item"]} ${isOpened? styles["art-menu__item--active"]:''}`}
      >
          <h3 className={styles["art-menu__title"]}>{title}</h3>
          <div className={`${styles["card-more"]} ${styles["art-menu__card"]}`}>
              <Button
                  type={getTypeById(id)}
                  onClick={() => {}}
                  className={styles["card-more__btn"]}
              >
                  More
              </Button>
              <Image
                  src={image}
                  alt={title}
                  width="271"
                  height="184"
                  className={styles["card-more__image"]}
              />
          </div>
          <span className={styles["art-menu__decorator"]} />
      </Link>
  );
};
