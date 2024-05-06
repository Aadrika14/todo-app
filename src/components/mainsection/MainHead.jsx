import { assets } from '../../assets/assets';
import styles from './MainHead.module.css'

function MainHead(){
  return (
    <div className={styles.d}>
      <h1 className={styles.head}>Add your tasks here</h1>
      <img src={assets.cute} alt="" />
    </div>
  )
}
export default MainHead;