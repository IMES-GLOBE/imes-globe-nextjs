"use client"
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
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
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_G}>
          <div className={styles.containerBG}>
            {/* <GradientCard
              direction='top'
              colors={["rgba(0,0,0,0)", "rgb(109, 40, 71)"]}
              width={"100%"}
              height={400}
            /> */}
          </div>
          <div className={styles.containerFG} style={{ paddingTop: 150 }}>
            <h1 className={styles.whoWeAre}>Who We Are?</h1>
            <div className={styles.aboutCard}>
              <h3>Institute of Missions and Strategies Studies Global</h3>
              <Line
                leftEclips
                leftScale={0.5}
                rightEclips
                rightScale={0.5}
                width={"38vw"}
              />
              <p>
                Institute of Missions and Strategic Studies is a Non-denominational Bible school
                Based in Republic of Benin in West Africa, this institution is burdened with the
                vision of training and raising quality spirit filled Pastors, Missionaries Christian
                Leaders, Church workers and Ministers of the gospel, Our mandate is to raise a special
                breed of end time army for end time Harvest.
              </p>
            </div>

            <Line
              width={"38vw"}
              lineHeight={1}
              style={{ opacity: 0.55, marginBottom: 10 }}
            />

          </div>
        </div>

        <div className={styles.containerFG_2} style={{ paddingTop: 5 }}>
          <div className={`${styles.about_row} row`}>

            <div className={`${styles.about_col} col-md-6`}>
              {/* <p>
                Our bible school is Strategic in approach, we help our Students to discover different
                mission strategies and approaches of accomplishing their divine assignment or calling.
                Through strategic bible coaching.
              </p> */}

              <Line
                leftEclips
                leftScale={0.2}
                // rightEclips
                // rightScale={0.5}
                width={"38vw"}
                style={{ marginTop: "2vw" }}
              />
              <h3>EQUIPPING ALL MEN WITH ALL GOSPEL FOR <span style={{ color: "brown" }}>ALL GENERATION</span></h3>
              <h5>SCHOOL OF WORKERS AND CHURCH LEADERS</h5>
              <p>
                You can now register with us in our School of Workers and Church Leaders, and be
                trained to be useful in your local Churches. It is also an opportunity for pastors
                to train their workers for effective services intheir Churches :- classes hold two
                (2) Mondays every Month, from 7PM to 10 PM. call our office now for registration.
              </p>
              <h5>SCHOOL OF MINISTRY AND BIBLICAL / THEOLOGICAL STUDIES</h5>
              <p>
                For those who have a special call for service into ministry,and service of the Lord,
                you can register with us now for ministerial training and preparation for full
                operation into fivefold ministries, prophetic andPower gift. Call our office now
                for registration and other information concerning schedule of Classes.
              </p>
              <div className={styles.AC_moreInfo}>
                <p className={styles.AC_moreInfo_}>Academic calender</p>
                <p className={styles.AC_moreInfo_}>Course coriculum</p>
              </div>

              <Line
                leftEclips
                leftScale={0.2}
                // rightEclips
                // rightScale={0.5}
                width={"38vw"}
                style={{ marginTop: "2vw" }}
              />
            </div>

            <div className={`${styles.about_col} ${styles.about_col_img} col-md-6`}>
              <div className={styles.AC_imgContainer}>
                <div className={styles.AC_img1}>
                  <Image
                    src="/assets/img/IMES_GALLERY/imes_img_34.png"
                    className={styles.AC_img1_} alt="Image"
                    width={size.width * 0.5} height={size.width * 0.5} priority
                  />
                </div>
                <div className={styles.AC_img2}>
                  <Image
                    src="/assets/img/IMES_GALLERY/imes_img_47.png"
                    className={styles.AC_img2_} alt="Image"
                    width={size.width * 0.5} height={size.width * 0.5} priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className={styles.container_G_3}>
          <div className={styles.containerFG_3}>
            <div className={`${styles.about_row} row`}>

              <div className={`${styles.about_col} ${styles.about_col_img} col-md-6`}>
                <div className={styles.AC2_imgContainer}>
                  <div className={styles.AC2_img1}>
                    <Image
                      src="/assets/img/IMES_GALLERY/imes_img_87.png"
                      className={styles.AC2_img1_} alt="Image"
                      width={size.width * 0.5} height={size.width * 0.5} priority
                    />
                  </div>
                  <div className={styles.AC2_img2}>
                    <Image
                      src="/assets/img/IMES_GALLERY/imes_img_74.png"
                      className={styles.AC2_img2_} alt="Image"
                      width={size.width * 0.5} height={size.width * 0.5} priority
                    />
                  </div>
                  {/* <div className={styles.AC2_img3}>
                    <Image
                      src="/assets/img/about/preacher.png"
                      className={styles.AC2_img3_} alt="Image"
                      width={size.width * 0.5} height={size.width * 0.5} priority
                    />
                  </div> */}
                </div>
              </div>

              <div className={`${styles.about2_col} col-md-6`}>
                <Line
                  leftEclips
                  leftScale={0.2}
                  // rightEclips
                  // rightScale={0.5}
                  width={"38vw"}
                  style={{ marginTop: "2vw" }}
                />
                <h3>SPECIAL TRAINING, CONFRENCES AND SEMINARS</h3>
                <h5>SCHOOL OF THE MIRACULOUS</h5>
                <p>
                  This is a three day Ministers conference that holds first week of July every year to
                  mark the beginning of the academic Year, attendants is open for all Ministers of the
                  Gospel and compulsory for all Members of the Network
                </p>
                <h5>SCHOOL OF DELIVERANCE</h5>
                <p>
                  This is a three day Spiritual warfare and prayer conference that holds on first week of
                  November every year to mark the Matriculation ceremony of the new Students. It shall be
                  a prayer conference for all Ministers of the Gospel and compulsory for all Members of
                  the Network. At the end of this program registration of new students will end and all
                  registered students will have their School badge with registration Number of the school
                </p>
                <h5>SPECIAL CLASSES</h5>
                <p>
                  Benin has French Language as her official Language but is surrounded by English Speaking
                  countries, with most of their citizens and other English Speaking foreigners in Benin for
                  commercial activities. This has created the need to understanding English and French in
                  Benin, not only for social life but also for the Spread of the gospel, for this reason
                  IMES has created an opportunity for mission language classes in her curriculum English and French
                </p>

                <Line
                  leftEclips
                  leftScale={0.2}
                  // rightEclips
                  // rightScale={0.5}
                  width={"38vw"}
                  style={{ marginTop: "2vw" }}
                />
              </div>

            </div>

          </div>
        </div>

      </div>


    </div>
  )
}





