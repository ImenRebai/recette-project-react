
import styles from "./Page.module.scss"
import Recipe from "./Recipe"
function Page() {
  return (
    <div className= " p-20 flex-fill container">
     <h1 className="my-30">Découvrir nos nouvelles recettes</h1>
    <div className={`card p-20 ${styles.contentCard}`}>
    <div className= {styles.grid}>
    <Recipe /> 
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
     </div>
      </div>
    </div>
  )
}

export default Page
