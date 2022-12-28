import styles from './style.module.scss';
import {Logo} from '../../components/Logo';
import {SocialNetworks} from '../../components/SocialNetworks';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Nav} from '../../components/Nav';

interface IHeroProps {

}

export const Hero: React.FC<IHeroProps> = ({}) => {
  return (
    <section className={`section ${styles.hero}`}>
      <header
        className={styles.header}
      >
        <div className={styles["header__logo"]}>
          <Logo/>
        </div>
        <SocialNetworks/>
        <Button onClick={()=>{
            console.log('123');
          }}>
            Whitepaper
        </Button>
      </header>

      <Nav/>

      <div className="hero__content">
        <div className={styles["hero__title"]}>
          <Title align='center'>
            From dusk to&nbsp;dawn
          </Title>
        </div>
        <ul className={styles["hero__button-list"]}>
            <li>
              <Button onClick={()=>{
                console.log('123');
              }}>
                Mint
              </Button>
            </li>
            <li>
              <Button onClick={()=>{
                console.log('123');
              }}>
                Connect Wallet
              </Button>
            </li>
        </ul>
      </div>
    </section>
  );
}
