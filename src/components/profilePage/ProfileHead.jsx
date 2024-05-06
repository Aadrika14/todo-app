import { assets } from "../../assets/assets";
import styles from './ProfileHead.module.css'
function ProfileHead(){
  return(
      <>
      <h2 className={styles.h1}>Yohoo you chose what to do Today!
        <img src={assets.confetti} alt="" />
    </h2>
    <p className={styles.p}>Congratulations on taking the first step towards organising your life with ClearQuest!</p>
    </>
  )
}
export default ProfileHead;