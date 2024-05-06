import { assets } from "../../assets/assets";
import styles from './ProfileMain.module.css';

function ProfileMain(){
  return (
    <>
    <div className={styles.container}>

      <div className={styles.prof}>
      <h3>Your Profile</h3>
      <img src={assets.profile} alt="" />
      </div>

      <div className={styles.center}>

        <div className={styles.up}>
          <img src={assets.upload} alt=""  className={styles.image}/>
          <p>Upload Photo</p>
        </div>

        <div className={styles.name}>
        <input type="text" placeholder="Enter your name"/>
    </div>

      </div>
    </div>
    </>
  )
}
export default ProfileMain;