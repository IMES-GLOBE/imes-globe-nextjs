
import React from 'react';
import styles from './styles.module.css'
import { FaceBookIcon } from '@/dependencies/icons/facebook';
import { InstagramIcon } from '@/dependencies/icons/instagram';
import { TwitterIcon } from '@/dependencies/icons/twitter';
import { YoutubeIcon } from '@/dependencies/icons/youtube';

function SocialConnect({}) {
  return (
    <div className={styles.container}>
      <div className={styles.layoutBG}></div>
      <FaceBookIcon className={styles.icons}/>
      <TwitterIcon className={styles.icons}/>
      <InstagramIcon className={styles.icons}/>
      <YoutubeIcon className={styles.icons}/>
      <div className={styles.dash}></div>
      <p className={styles.publicLable}>connect with us</p>
    </div>
  );
}

export default SocialConnect;
