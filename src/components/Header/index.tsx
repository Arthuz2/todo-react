import styles from './styles.module.css'

import ImgLogoTodo from '../../assets/Logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ImgLogoTodo} className={styles.logo} alt="" />
    </header>
  )
}
