import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image'
import { FaceBookIcon } from '@/dependencies/icons/facebook';
import { TwitterIcon } from '@/dependencies/icons/twitter';
import { InstagramIcon } from '@/dependencies/icons/instagram';
import { YoutubeIcon } from '@/dependencies/icons/youtube';


export default function Footer(params: any) {
    return (
        <div className={styles.container}>
            <div className={styles.socialConnects_bg}></div>
            <div className={styles.row}>
                <div className={styles.rowContainer}>
                    <div className={styles.col} style={{alignItems:"center"}}>
                        <Image
                            src="/assets/img/favIcon.png"
                            alt="Image"
                            className={styles.HomeCard_hoveringIcon}
                            width={200}
                            height={200}
                            priority
                        />
                        <div className={styles.iconsContainer}>
                            <FaceBookIcon className={styles.icons} />
                            <TwitterIcon className={styles.icons} />
                            <InstagramIcon className={styles.icons} />
                            <YoutubeIcon className={styles.icons} />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.colText}>Visit IMES Institute Center</p>
                        <p className={styles.colText}>Sikekodji, von coimenterie. Cotonou Benin Republic</p>
                    </div>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.col}>
                        <p className={styles.colText_}>Call Us</p>
                        <p className={styles.colText_}>Phone: +229 96 25 50 90 <br />.</p>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.colText}>Send us an Email</p>
                        <p className={styles.colText}>Email: kingspeoplechurch@yahoo.com</p>
                    </div>
                </div>
            </div>
            <p className={styles.colText} style={{paddingBottom:0, paddingTop: 20}}>© 2024 I.M.E.S. GLOBE</p>
        </div>
    )
}