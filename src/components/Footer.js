import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={`d-flex flex-row align-items-center p-20 ${styles.footer}`}>
    <p> Copyright ©2023 Recette PinguCoder,Inc.</p>  
    </footer>
  )
}

export default Footer
