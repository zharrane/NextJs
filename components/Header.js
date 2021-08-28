import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Webdev</span> news
      </h1>
      <p className={styles.description}> Keep updated with dev news</p>
    </div>
  )
}

export default Header
