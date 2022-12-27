import styles from './style.module.scss';
import {Title} from '../../components/Title';

interface IEarthProps {

}

export const Earth: React.FC<IEarthProps> = ({}) => {
  return (
    <section className={`${styles.earth}`}>
      <Title size="large">
        Factions
      </Title>
    </section>
  );
}
