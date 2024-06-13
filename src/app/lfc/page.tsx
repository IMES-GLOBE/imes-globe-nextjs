"use client"
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import CollapsibleText from '@/dependencies/CollapsibleText';

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
    lfc, lfc_1, lfc_foregound, head, body, pflo, colTextContaner,
    InfoRow, InfoRow_,
    lfc_eg
  } = styles;
  return (
    <div>
      <div className={lfc}>
        <Image src={"/assets/img/lfc/lfc_bg.jpg"}
          alt={"lfc"}
          className={lfc_1}
          width={size.width}
          height={size.height}
          placeholder="blur"
          blurDataURL="/assets/img/lfc/lfc_bg.jpg" // Provide a base64-encoded placeholder image
          loading="lazy"
        />

        <div className={lfc_foregound}>
          <div className={head}>
            <Image
              src="/assets/img/page_icon_Dark_black.png"
              alt="LOGIC Logo"
              className={styles.LogicIconDark}
              width={160}
              height={160}
              priority
            />
          </div>
          <div className={`row ${body}`}>
            <div className='col-md-6'>
              <Image
                src="/assets/img/lfc/lfc_pflo.png"
                alt="LOGIC PFLO"
                className={pflo}
                width={887}
                height={1096}
                priority
              />
            </div>
            <div className={`${colTextContaner} col-md-6`}>
              {size.width > 767.98 ?
                <h1>
                  L.O.G.I.C.<br />
                  FOUNDATION<br />
                  CLASS
                </h1>
                :
                <h1>
                  L.O.G.I.C.
                  FOUNDATION
                  CLASS
                </h1>
              }
              <h3>WITH <span style={{ fontWeight: "800" }}>DR. FLOURISH PETERS</span></h3>
              <p>LOVE | LIFE | IMPACT</p>
              <h6>STARTS</h6>
            </div>
          </div>
        </div>
      </div>

      <div className={InfoRow}>
        <div className={`${InfoRow_} row`}>
          <div className={` col-md-6`}>
            <CollapsibleText />
          </div>
          <div className={` col-md-6`}>
            <CountDown />
          </div>
        </div>
      </div>





    </div>
  )
}



const countdown = [
  { title: "DAYS", value: 0 },
  { title: "HOURS", value: 0 },
  { title: "MINUTES", value: 0 },
  { title: "SECONDS", value: 0 },
]

const CountDown = () => {
  const {
    CountDown_, countdown_values_cont, countdown_values_, countdown_values_title,
    register
  } = styles;
  return (
    <div className={CountDown_}>
      <h2>LFC Registration Form</h2>
      <h4>Next L.F.C begins in:</h4>
      <div className={countdown_values_cont}>
        {countdown.map((value) => {
          return (
            <div key={value.title} className={countdown_values_}>
              <p>{value.value}</p>
              <p className={countdown_values_title}>{value.title}</p>
            </div>
          )
        })}
      </div>
      <div className={register}>
        <p>Register for LFC</p>
      </div>
    </div>
  )
}




