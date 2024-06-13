"use client"
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import Link from 'next/link';
import Line from '@/dependencies/Line';

export default function Home() {
  return (
    <main className={styles.container}>
      <HeadComponent />
      <HomeCard />
    </main>
  )
}

function HomeCard(params: any) {
  const size = useWindowSize();
  const {
    IntroBG_container, IntroBG, IntroLayout,
    bankInfo, bankInfo_, accountsGiving, givingLink
  } = styles
  return (
    <div>
      <div className={IntroBG_container}>
        <Image
          src="/assets/img/giving/giving2.jpg"
          alt="Image"
          className={IntroBG}
          width={size.width}
          height={size.height}
          priority
        />
        <div className={IntroLayout}>
          <h2>GIVING</h2>
          <p>Together let’s make a difference with our hilarious generosity.</p>
        </div>
      </div>

      <div className={`${bankInfo}`}>
        <div className={`${bankInfo_} row`}>
          <div className={` col-md-6`}>
            <h2>Online Giving</h2>
            <p>
              No registration or account needed.
              Give securely using your debit or credit Card by clicking the button below
            </p>
            <div className={givingLink}>
              <Link href={"https://dashboard.flutterwave.com/donate/otbzrmxi0lta"}>Give Online</Link>
            </div>
            {size.width < 768 && <Line style={{ marginTop: 80, position: "relative", left: -35, opacity: 0 }} width={500} />}
            
          </div>
          <div className={` col-md-6`}>
            <h2>Give Through Bank Transfer</h2>
            <p>
              Give by direct transfer to any of our accounts below
            </p>
            <p className={accountsGiving}>
              GTB  ₦:  0649565992 <br />
              Providus   ₦: 5400709469 <br />
              Zenith Bank   ₦: 1016568467 <br />
              Zenith Bank $ : 5071184741 (SWIFT CODE – ZEIBNGLA) <br />
              Zenith Bank £: 5060299821 <br />
              (SWIFt CODe – ZEIBNGLA)
            </p>
            <Line style={{ marginTop: 10, position: "relative", left: -35 }} width={"40vw"} />
          </div>
        </div>
      </div>


    </div>
  )
}





