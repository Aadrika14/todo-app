import { useEffect, useState } from 'react';
import { assets } from "../../assets/assets";
import React from 'react';
import styles from './ProfileMain.module.css';

function ProfileMain() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => handleImageUpload(e);
    fileInput.click();
  };

  const handleUpdateProfile = () => {
    
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Your Profile</h1>
      <div className={styles.profileImageContainer}>
        {selectedImage ? (
          <img src={selectedImage} alt="Profile" className={styles.profileImage} />
        ) : (
          <img src={assets.Profile1} alt="Profile1" className={styles.profileImage} />
        )}
      </div>
      <div className={styles.uploadContainer} onClick={openFilePicker}>
        <img src={assets.upload} alt="Upload" className={styles.uploadIcon} />
        <span className={styles.uploadText}>Upload Photo</span>
      </div>
      <input className={styles.inputField} type="text" placeholder="Enter your name" />
      <input className={styles.inputField} type="email" placeholder="Enter Your Email" />
      <button className={styles.updateButton} onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default ProfileMain;





