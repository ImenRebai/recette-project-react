
import styles from "./Page.module.scss"
function Page() {
  return (
    <div className= " p-20 flex-fill container">
     <h1 className="my-30">Découvrir nos nouvelles recettes</h1>
    <div className={`card p-20 ${styles.contentCard}`}>
    <div className= {styles.grid}>
     <div className={styles.elem}>element</div>
     <div className={styles.elem}>element</div>
     <div className={styles.elem}>element</div>
     <div className={styles.elem}>element</div>
     <div className={styles.elem}>element</div>
     <div className={styles.elem}>element</div>
     </div>
     </div>
      </div>
    
  )
}

export default Page
