import styles from "./Recipe.module.scss"
import lasagne from "../assets/images/lasagne.jpg"
function Recipe() {
  return (
    <div className={styles.recipe}>
     <div className={styles.imageContainer}>
        <img src={lasagne} alt="recipe"/>
         </div>
       <div className={` d-flex flex-row align-items-center justify-content-center ${styles.recipeTitle}`}>
        <h3>
            lasagne à la bolognaise
        </h3>
        </div>   
    </div>
  )
}

export default Recipe
