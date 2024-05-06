import { useNavigate } from 'react-router-dom';
import styles from './ProfileLaunch.module.css'
function ProfileLaunch(){
  const navigate=useNavigate();
  const goToMainApp=()=>{
    navigate('/main');
  }
  return (
    <>
    <div className="btnContainer">
    <button onClick={goToMainApp} className={styles.btn}>Launch ClearQuest</button>
    </div>
    </>
  )
}
export default ProfileLaunch;