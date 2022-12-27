import styles from './style.module.scss';
interface ISocialNetworksProps {

}

type TSocialNetworks = {
  id: number,
  code: string,
  link: string,
  title: string,
};

const listSocialNetworks:TSocialNetworks[] = [
  {
    id: 1,
    code: 'discord',
    link: 'https://discord.com/',
    title: 'Discord',

  },
  {
    id: 2,
    code: 'twitter',
    link: 'https://twitter.com/',
    title: 'Twitter',
  },
  {
    id: 3,
    code: 'ant',
    link: 'https://ant.design/',
    title: 'Ant Design',
  },
];


export const SocialNetworks: React.FC<ISocialNetworksProps> = ({}) => {
  return (

    <ul className={styles["social-networks"]} aria-label="Social networks list">
      {
        listSocialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles["social-networks__item"]}>
            <a
              href={socialNetwork.link}
              target="_blank"
              rel="noreferrer"
              className={`${styles["social-networks__link"]} ${styles[`social-networks__link--${socialNetwork.code}`]}`} title={socialNetwork.title}
              >

            </a>
          </li>
        ))
      }
    </ul>
  );
}
