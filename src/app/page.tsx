"use client";
import { RefAttributes, RefObject, useEffect, useRef } from 'react';
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
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
    <>
      <div className={styles.HomeCard}>

        <div className={styles.Webview}>

          {size.width > 767.98 && <div className={styles.Webview_sec1}>
            <div className={styles.cardHolder}>
              <CardSubHolder1 />
              <CardSubHolder2 />
              {/* <CardSubHolder3 /> */}
            </div>
          </div>}

          <div className={styles.Webview_sec2} style={{ width: size.width < 767.98 ? "100vw" : "50%" }}>
            <div className={styles.Webview_sec2_img}>
              <Image
                src="/assets/img/favIcon.png"
                alt="Image"
                className={styles.Webview_sec2_img_}
                width={size.width}
                height={size.height}
                priority
              />
            </div>
            <h1 className={styles.HomeCard_title}>
              Institute of Missions and Strategies Studies Global
            </h1>
            <Line containerClass={styles.Webview_sec2_line} />
            <h4 className={styles.HomeCard_subTitle}>
              Eagles Wings Faith Missions WORLD
            </h4>
            <p className={styles.HomeCard_p}>
              The Institute of Missions and Strategies Studies, an affiliate of Eagles wing faith
              center Arizona USA, is burdened with the vision of raising an Army for the kingdom.
            </p>
            <Line containerClass={styles.Webview_sec2_line2} lineWidth={size.width * 0.2} />
            <div className={styles.Webview_sec2_BtnContainer}>
              <div className={styles.Webview_sec2_Btn1}>
                <Image
                  src="/assets/img/homestream/icons/enroll.png"
                  className={styles.Webview_sec2_Btn_img} alt="Image"
                  width={200} height={200} priority
                />
                <p>Enroll Now</p>
              </div>
              <div className={styles.Webview_sec2_Btn2}>
                <Image
                  src="/assets/img/homestream/icons/calender.png"
                  className={styles.Webview_sec2_Btn_img} alt="Image"
                  width={200} height={200} priority
                />
                <p>Academic Calender</p></div>
            </div>
          </div>


        </div>

        {
          /* <div>
            <p className={styles.HomeCard_title}>
              The
              <span className={styles.love}> Love</span> Of
              <span className={styles.God}> God</span> In
              <span className={styles.God}> Christ</span> Church
            </p>
            <p className={styles.HomeCard_subTitle}>
              Love . Life . <span className={styles.impact}> Impact</span>
            </p>
          </div> */
        }
      </div>

      <Section2 />

      <div className={styles.moreInfo}>
        <MoreInfo1 />
        <MoreInfo2 />
      </div>

      {/* <AnimatedDiv /> */}

      <Section />
    </>
  )
}






{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadComponent />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}



const Section = () => {
  const size = useWindowSize();
  return (
    <div className={styles.boardSectionContainer} style={{ paddingTop: 30, paddingBottom: 20 }}>
      <div className={`${styles.boardS} row`}>
        <div className={`${styles.boardSection} col-md-6`}>
          <div className={styles.BS_bg}> </div>
          <h1>Esteemed Educators and Spiritual Mentors</h1>
          <p>
            Embark on your spiritual journey guided by the wisdom and compassion of
            our esteemed educators and spiritual mentors. With deep expertise in
            scripture and a commitment to nurturing souls, they illuminate the path
            to spiritual growth and understanding. Through their guidance, you&apos;ll not
            only gain knowledge but also cultivate a profound connection with the
            teachings of the Bible, enriching your life with faith, purpose,
            and fulfillment.</p>
          <p style={{ paddingTop: 30 }}>
            Immerse yourself in a supportive community of fellow learners, where discussions
            flourish and insights are shared. Our vibrant learning environment encourages
            collaboration and fosters a sense of belonging as you explore the profound
            depths of scripture together. Join us as we journey towards deeper understanding
            and spiritual enlightenment, guided by the wisdom of our dedicated educators and mentors.
          </p>
        </div>
        <div className={`${styles.boardSection_img} col-md-6`}>
        </div>
      </div>
      {/* <BoardHover /> */}
    </div>
  )
}

const BoardHover = () => {
  const size = useWindowSize();
  return (
    <div className={styles.board_hover}>

      <div className={styles.BH_col}>
        <Image
          src="/assets/img/homestream/icons/bible.png"
          alt="Image"
          className={styles.BH_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h1>Interactive Bible Study Modules</h1>
      </div>

      <div className={styles.BH_col}>
        <Image
          src="/assets/img/homestream/icons/vidPlaylist.png"
          alt="Image"
          className={styles.BH_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h1>Live Streaming of Bible Classes</h1>
      </div>

      <div className={styles.BH_col}>
        <Image
          src="/assets/img/homestream/icons/road.png"
          alt="Image"
          className={styles.BH_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h1>Personalized Learning Paths</h1>
      </div>

      <div className={styles.BH_col}>
        <Image
          src="/assets/img/homestream/icons/group.png"
          alt="Image"
          className={styles.BH_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h1>Discussion Forums and Boards</h1>
      </div>

    </div>
  )
}


const Section2 = () => {
  const size = useWindowSize();
  return (
    <div className={styles.boardSectionContainer} style={{ paddingTop: 30, paddingBottom: 20 }}>
      <div className={`${styles.boardS} row`}>
        <div className={`${styles.boardSection_img2} col-md-6`}>
        </div>
        <div className={`${styles.boardSection2} col-md-6`}>
          <div className={styles.BS_bg_2}> </div>
          <h1>Cultivate Transformative Biblical Experiences</h1>
          <p>
            Explore profound paths to spiritual growth and enlightenment through our transformative
            biblical experiences. Through immersive study, dynamic teachings, and enriching fellowship,
            we invite you to embark on a journey towards deeper understanding and personal transformation.
          </p>
          <p style={{ paddingTop: 30 }}>
            Delve into the sacred scriptures with expert guidance from our seasoned educators and mentors,
            who are dedicated to illuminating the timeless wisdom of the Bible. Engage in meaningful
            discussions, reflections, and hands-on activities that bring the teachings to life,
            fostering a deeper connection with your faith and purpose. Join us as we cultivate an
            enriching journey of spiritual renewal and enlightenment.
          </p>
        </div>
      </div>
    </div>
  )
}


const CardSubHolder1 = () => {
  const size = useWindowSize();
  return (
    <div className={styles.cardSubHolder}>
      <div className={styles.cardSub1}>
      </div>
      <div className={styles.cardSub2}>
        <div className={styles.cardProf2}>
          <Image
            src="/assets/img/homestream/graduate7.png"
            alt="Image"
            className={styles.cardProf3_img_}
            width={size.width * 0.4}
            height={size.height * 0.4}
            priority
          />
        </div>
      </div>
    </div>
  )
}

const CardSubHolder2 = () => {
  const size = useWindowSize();
  return (
    <div className={styles.cardSubHolder}>

      <div className={styles.cardSub3}>
        <div className={styles.cardProf3_img}>
          {/* <Image
            src="/assets/img/homestream/graduate1.png"
            alt="Image"
            className={styles.cardProf3_img_}
            width={size.width * 0.4}
            height={size.height * 0.4}
            priority
          /> */}
          <div className={styles.cardProf3_img__img1}></div>
        </div>
        <div className={styles.cardProf3}>
          <div className={styles.cardProf3buble}></div>
          <p>
            Gospel Insights
          </p>
          <p>
            Deliverance Mastery: <br /> Unlock Gospel Wisdom
          </p>
        </div>
      </div>

      <div className={styles.cardSub4}>
        <div className={styles.cardProf4}>
          <div className={styles.imesLogo}>
            <Image
              src="/assets/img/homestream/bible_rating_light.png"
              alt="Image"
              className={styles.cardProf3_img_}
              width={size.width * 0.4}
              height={size.height * 0.4}
              priority
            />
            <div className={styles.cardProf3_img__img1}></div>
          </div>
          <p>
            Embrace Top-Rated Gospel Teaching and Solid Doctrinal Foundations
          </p>
        </div>
        <div className={styles.cardEclipse}>
          <div className={styles.cardEclipse_img}>
            {/* <Image
              src="/assets/img/homestream/reading_bible2.png"
              alt="Image"
              className={styles.cardEclipse_img_}
              width={size.width * 0.4}
              height={size.height * 0.4}
              priority
            /> */}
            <div className={styles.cardEclipse_img_}></div>
            <div className={styles.cardEclipse_img_cover}></div>
          </div>
          <p>Discover</p>
        </div>
        {/* <div className={styles.cardOutLine}></div> */}
      </div>

    </div>
  )
}

const CardSubHolder3 = () => {
  const size = useWindowSize();
  return (
    <div className={styles.cardSubHolder}>
      <div className={styles.cardSub5}>
        <div className={styles.cardProf5}>
          <Image
            src="/assets/img/homestream/graduate4.png"
            alt="Image"
            className={styles.cardProf3_img_}
            width={size.width}
            height={size.height}
            priority
          />
        </div>
      </div>
      <div className={styles.cardSub6}>
      </div>
    </div>
  )
}



const MoreInfo1 = () => {
  const size = useWindowSize();
  return (
    <div className={styles.moreInfo_col1}>
      <div className={`${styles.moreInfo_card} ${styles.moreInfo_card1}`}>
        <Image
          src="/assets/img/homestream/icons/news_light.png"
          alt="Image"
          className={styles.moreInfo_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h4>Insights & Events</h4>
        <p>Stay Current with Updates from Our Bible School.</p>
        <div className={`${styles.MI_btn} ${styles.MI_btn1}`}>
          <p>Visit</p>
        </div>
      </div>
      {size.width > 767.98 && <div className={`${styles.moreInfo_card} ${styles.moreInfo_card2}`}>
        <div className={styles.MI_col1}>
          <Image
            src="/assets/img/homestream/icons/play_stream_light.png"
            alt="Image"
            className={styles.moreInfo_icon}
            width={size.width}
            height={size.height}
            style={{ marginTop: 20 }}
            priority
          />
          <h4 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Course Streaming</h4>
          <p style={{ textAlign: "center", fontSize: 12, lineHeight: 1.4, marginBottom: 10 }}>Stay on Track Anytime, Anywhere</p>
          <div className={`${styles.MI_btn} ${styles.MI_btn2}`}>
            <p>Visit</p>
          </div>
        </div>
        <div className={styles.MI_col2}>
          <div className={styles.MI_vid}>
            <div className={styles.MI_vid_}>
              <Image
                src="/assets/img/homestream/college-graduation-photos.png"
                alt="Image"
                className={styles.MI_vid_img}
                width={size.width}
                height={size.height}
                priority
              />
              <div className={styles.MI_vid_hover}>
                <Image
                  src="/assets/img/homestream/icons/play.png"
                  alt="Image"
                  className={styles.MI_vid_hover_icon}
                  width={size.width}
                  height={size.height}
                  style={{ marginTop: 20 }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className={styles.MI_vid}>
            <div className={styles.MI_vid_}>
              <Image
                src="/assets/img/homestream/graduate_.png"
                alt="Image"
                className={styles.MI_vid_img}
                width={size.width}
                height={size.height}
                priority
              />
              <div className={styles.MI_vid_hover}>
                <Image
                  src="/assets/img/homestream/icons/play.png"
                  alt="Image"
                  className={styles.MI_vid_hover_icon}
                  width={size.width}
                  height={size.height}
                  style={{ marginTop: 20 }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}


const MoreInfo2 = () => {
  const size = useWindowSize();
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the file you want to download
    link.href = 'https://www.imesglobe.com/directory/imes.apk';
    // Set the download attribute to specify the filename users will see
    link.download = 'imes.apk';
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document body
    document.body.removeChild(link);
  };
  return (
    <div className={styles.moreInfo_col2}>
      <div className={`${styles.moreInfo_card} ${styles.moreInfo_card3}`}>
        <Image
          src="/assets/img/homestream/icons/app_light.png"
          alt="Image"
          className={styles.moreInfo_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h4 style={{ marginTop: 0 }}>Get the App</h4>
        <IconsPresentation />
        <p style={{ fontSize: 11 }}>Access our resources anytime, anywhere.</p>
        <div className={`${styles.MI_btn} ${styles.MI_btn3}`} onClick={handleDownload}>
          <p>Downloads app</p>
          {/* <p>Go to Downloads</p> */}
        </div>
      </div>
      {/* <div className={`${styles.moreInfo_card} ${styles.moreInfo_card4}`}>
        <Image
          src="/assets/img/homestream/icons/calendar_light.png"
          alt="Image"
          className={styles.moreInfo_icon}
          width={size.width}
          height={size.height}
          priority
        />
        <h4>Academic calendar</h4>
        <p>Plan your academic journey with ease.</p>
        <div className={`${styles.MI_btn} ${styles.MI_btn4}`}>
          <p>Visit</p>
        </div>
      </div> */}
    </div>
  )
}


const IconsPresentation = () => {
  const size = useWindowSize();
  const OS = ["ios", "android", "macos", "windows"]

  const returnIcon = (val: any) => {
    return (
      <div className={styles.OSIcons}>
        <Image
          src={`/assets/img/homestream/icons/${val}.png`}
          alt="Image"
          className={styles.OSIcon}
          width={size.width}
          height={size.height}
          priority
        />
        <p>{val}</p>
      </div>
    )
  }
  return (
    size.width > 575.98 ?
      <div className={styles.iconsPresentation}>
        {OS.map((value) => {
          return (
            returnIcon(value)
          )
        })}
      </div>
      :
      <>
        <div className={styles.iconsPresentation} style={{marginBottom: 5}}>
          {OS.slice(0, 2).map((value) => {
            return (
              returnIcon(value)
            )
          })}
        </div>
        <div className={styles.iconsPresentation}>
          {OS.slice(2, 4).map((value) => {
            return (
              returnIcon(value)
            )
          })}
        </div>
      </>
  )
}


const AnimatedDiv = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    public_add_class_onReveal(targetRef, styles.animate2);
  }, []);

  return (
    <div ref={targetRef} className={styles.animateMe}>
      Animate me when in view
    </div>
  );
};


const public_add_class_onReveal = (targetRef: any, newClass: any) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(newClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (targetRef.current) {
    observer.observe(targetRef.current);
  }

  return () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current);
    }
  };
}
