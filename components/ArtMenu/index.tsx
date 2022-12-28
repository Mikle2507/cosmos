import { useState } from 'react';
import styles from './style.module.scss';
import { ArtMenuItem } from './ArtMenuItem';

const pathImages = "/resources/images/art_menu";

interface IArtMenuProps {}

const links = [
  {
      id: 1,
      href: '/',
      title: 'Blighted Badlands',
      image: `${pathImages}/blighted_badlands.jpg`,
      active: false,
  },
  {
      id: 2,
      href: '/',
      title: 'Glacial Frontier',
      image: `${pathImages}/glacial_frontier.jpg`,
      active: false,
  },
  {
      id: 3,
      href: '/',
      title: 'Sundered Grove',
      image: `${pathImages}/sundered_grove.jpg`,
      active: false,
  },
  {
      id: 4,
      href: '/',
      title: 'Sky Citadel',
      image: `${pathImages}/sky_citadel.jpg`,
      active: false,
  }
];


export const ArtMenu: React.FC<IArtMenuProps> = () => {
  const [ openedId, setOpenedId ] = useState(0);


  return (
      <div className={styles["art-menu"]} >
          {links.map((link) => (
              <ArtMenuItem
                  key={link.id}
                  onClick={(event) => {
                      event.preventDefault();
                      setOpenedId(link.id !== openedId ? link.id : 0);
                  }}
                  isOpened={link.id === openedId}
                  {...link}
              />
          ))}
      </div>
  );
}
