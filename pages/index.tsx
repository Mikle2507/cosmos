import styles from "../styles/components/home.module.scss";
import cl from 'classnames';


export default function Home() {
  return (
    <section className={cl(styles.section, styles['section--main'])}></section>
  )
}
