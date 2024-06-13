"use client"
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import Line from '@/dependencies/Line';
import { FaceBookIcon } from '@/dependencies/icons/facebook';
import { InstagramIcon } from '@/dependencies/icons/instagram';
import { TwitterIcon } from '@/dependencies/icons/twitter';
import { News_Cycle } from 'next/font/google';

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
    <>
      <div className={styles.container_G}>
        <div className={styles.containerFG} style={{ paddingTop: 150 }}>
          <h1 className={styles.Leadership}>Ministers Network</h1>
          <Line
            width={"38vw"}
            lineHeight={1}
            style={{ opacity: 0.55, marginBottom: 10 }}
          />
          <h3 style={{ marginBottom: 20 }}>Esteemed Educators and Spiritual Mentors</h3>
        </div>

      </div>




      <EsteemedLeaders />


      <div className={styles.breifSum}>
        <p>
          Embark on your spiritual journey guided by the wisdom and compassion of our esteemed
          educators and spiritual mentors. With deep expertise in scripture and a commitment to
          nurturing souls, they illuminate the path to spiritual growth and understanding. Through
          their guidance, you&apos;ll not only gain knowledge but also cultivate a profound connection
          with the teachings of the Bible, enriching your life with faith, purpose, and fulfillment.
        </p>
        <Line
          width={"38vw"}
          leftEclips rightEclips
          lineHeight={1}
          style={{ opacity: 0.55, marginBottom: 50, marginTop: 50 }}
        />
      </div>


      <div className={styles.MOF_container}>
        <div className={styles.MOF_container_}>
          <h3>MEMBERS OF THE FACULTY</h3>
          <div className={`${styles.MOF_row} row`}>

            <div className={` col-md-4`}>
              <Faculty name="Pastor Arnaud Kounde" title="Registrar" img="/assets/img/about/people/Anaurd.png" />
              <Faculty name="Jerry Splendor Marvel" title="DevOps Administrator" img="/assets/img/about/people/J_splendour.png" />
              <Faculty name="Ivette Zoé Mehounou" title="Secretary" img="/assets/img/about/people/Ivette.png" />
            </div>

            <div className={`${styles.MOF_col} col-md-8`}>
              <h3>Meet Our Esteemed Faculty Members</h3>
              <p>
                At [Your Bible School Name], we take pride in our distinguished faculty members who bring a wealth
                of knowledge, experience, and passion to our institution. Each member of our faculty is carefully
                selected for their expertise in biblical studies, dedication to teaching, and commitment to nurturing
                the spiritual growth of our students.
              </p>
              <p>
                Our faculty members are renowned scholars and spiritual leaders, deeply immersed in the study
                and interpretation of scripture. With years of experience in both academic and pastoral settings,
                they bring a unique blend of academic rigor and spiritual insight to the classroom.
              </p>
              <p>
                As mentors and guides, our faculty members are committed to providing personalized attention
                and support to each student, helping them navigate their academic journey with confidence and
                clarity. Whether through lectures, seminars, or one-on-one discussions, our faculty members
                are dedicated to fostering an environment of intellectual curiosity, spiritual growth, and
                personal transformation.
              </p>
              <p>
                Get to know our esteemed faculty members and discover the wealth of wisdom and inspiration
                they bring to our vibrant learning community. Join us as we embark on a journey of exploration,
                enlightenment, and spiritual discovery under the guidance of our exceptional faculty team.
              </p>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

interface miniCoponentProps {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}


const EsteemedLeaders = () => {
  const size = useWindowSize();
  return (
    size.width > 575.98 ?
      <div className={`${styles.preacher_cont} row`}>
        <div className={`${styles.preacher} row`}>
          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={1} name="Bishop David and Deborah Rice" title="International President" img="/assets/img/about/people/B_David_R_.png" />
            <Preacher rank={2} imgTop name="DR. Paul Uzoma" title="International Director" img="/assets/img/about/people/B_paul_.png" />
            <Preacher rank={2} imgTop name="Prophetesse Excel Jerry" title="Deputy International Director" img="/assets/img/about/people/P_Excel.png" />
          </div>

          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={3} imgTop name="Apostle Maxime Eliel" title="" img="/assets/img/about/people/A_Maxime_E.png" />
            <Preacher rank={3} name="Reverend Line Eliel" title="Provost" img="/assets/img/about/people/R_Line_E.png" />
            <Preacher rank={4} imgTop name="Apostle Vincent Adjomatin" title="President of the School" img="/assets/img/about/people/img5.png" />
          </div>
        </div>
      </div>
      :
      <div className={`${styles.preacher_cont} row`}>
        <div className={`${styles.preacher} row`}>
          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={1} specialClass={styles.BishDavid} name="Bishop David and Deborah Rice" title="International President" img="/assets/img/about/people/B_David_R_.png" />
          </div>

          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={2} imgTop name="DR. Paul Uzoma" title="International Director" img="/assets/img/about/people/B_paul_.png" />
            <Preacher rank={2} imgTop name="Prophetesse Excel Jerry" title="Deputy International Director" img="/assets/img/about/people/P_Excel.png" />
          </div>

          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={3} imgTop name="Apostle Maxime Eliel" title="" img="/assets/img/about/people/A_Maxime_E.png" />
            <Preacher rank={3} name="Reverend Line Eliel" title="Provost" img="/assets/img/about/people/R_Line_E.png" />
          </div>

          <div className={`${styles.preacher_col_} col-md-12`}>
            <Preacher rank={4} imgTop name="Apostle Vincent Adjomatin" title="President of the School" img="/assets/img/about/people/img5.png" />
          </div>
        </div>
      </div>
  )
}

const returnNewClass = (rank: any) => {
  const newCLass = rank === 1 ? styles.imgRank1 :
    rank === 2 ? styles.imgRank2 :
      rank === 3 ? styles.imgRank3 :
        rank === 4 ? styles.imgRank4 :
          styles.imgRank0;
  return newCLass
}


const Preacher = (props: any) => {
  const size = useWindowSize();
  const { name, title, rank, img, imgTop, specialClass } = props;
  const newCLass = returnNewClass(rank);
  return (
    <div className={`${styles.preacher_User} ${newCLass}`}>
      <Image
        src={img ? img : "/assets/img/about/preacher.png"}
        alt="Image"
        className={styles.preacher_User_img}
        width={size.width}
        height={size.height}
        style={{ objectPosition: imgTop ? "top" : "center" }}
      />
      <div className={`${styles.preacher_User_info} ${specialClass}`}>
        <h3>{name ? name : "the name of Minister"}</h3>
        <p>{title ? title : "the title of Minister"}</p>
        <MiniCoponent />
      </div>
    </div>
  )
}

const Faculty = (props: any) => {
  const size = useWindowSize();
  const { name, title, rank, img } = props;
  return (
    <div className={styles.faculty}>
      <div className={styles.faculty_info}>
        <h3>{name ? name : "the name of Faculty"}</h3>
        <p>{title ? title : "the title of Faculty"}</p>
      </div>
      <div className={styles.faculty_img}>
        <Image
          src={img ? img : "/assets/img/about/preacher.png"}
          alt="Image"
          className={styles.faculty_img_}
          width={size.width * 0.4}
          height={size.height * 0.4}
        />
      </div>
    </div>
  )
}


const MiniCoponent = (params: miniCoponentProps) => {
  const { facebook, instagram, twitter } = params;
  const { MiniCoponent_container, MiniCoponent_containerSub, icons } = styles;
  return (
    <div className={MiniCoponent_container}>
      <div className={MiniCoponent_containerSub}>
        {facebook && <FaceBookIcon className={icons} />}
        {instagram && <InstagramIcon className={icons} />}
        {twitter && <TwitterIcon className={icons} />}
      </div>
    </div>
  )
}





