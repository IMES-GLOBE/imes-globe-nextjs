"use client"
import { useEffect, useState, useRef } from 'react'
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ImageIntro from '@/dependencies/ImageIntro'

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
  const router = useRouter();
  const { container, imageIntro } = styles;

  const onClick_ = (url: string) => {
    router.push(url);
  }

  return (
    <div>
      <div className={container}>
        <div className={imageIntro}>
          <ImageIntro
            image="/assets/img/streaming/display/bible_3_.png"
            alt="pflo background"
          />
        </div>
        <MiniScreen onClick_={onClick_}/>
      </div>

    </div>
  )
}



const MiniScreen = (params:any) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { container, miniScreen, navTitleBar, navTitle, navTitleActive } = styles;

  const visible = (name: string) => {
    return name === id ? true : false;
  }

  return (
    <div className={miniScreen}>
      <div className={navTitleBar}>
        <Link href={"/sermons?id=online-courses"} className={`${navTitle} ${visible("online-courses") && navTitleActive}`}>
          <p>Online Courses</p>
        </Link>
        <Link href={"/sermons?id=inspirational"} className={`${navTitle} ${visible("inspirational") && navTitleActive}`}>
          <p>Video Sermons</p>
        </Link>
      </div>
      <DminiScreen visible={visible} id={id} onClick_={params.onClick_}/>
    </div>
  )
}
const DminiScreen = (params: any) => {
  const { visible, id, onClick_ } = params;
  const {
    fadeIn, fadeOut, screen, screenCard, streamCard, streamCard_,
    cardIMG, googleIcons, transparentIcons, appleIcons, appleIcons_, description,
    youtubeRow, youtube, youtubeImage, ytb_btn, youtube_link, youtube_linkImage, ytb_link_btn, timeStamp,
    screenCard_notice, screenCard_notice_, screenCard_notice_layout, screenCard_continue, 
    screenCard_continue_sec, SCC_link,
  } = styles;

  const IconStyle = (style: string): string => {
    return (style === "google" && googleIcons) || (style === "transparent" && transparentIcons) || appleIcons;
  }
  // <div className={streamCard}>
  //   <Link href={value.url} className={streamCard_}>
  //     <div className={cardIMG}>
  //       <div className={`${value.iconStyle === "apple" && appleIcons_}`}>
  //         <Image
  //           src={value.icon}
  //           alt={value.name}
  //           className={IconStyle(value.iconStyle)}
  //           width={500}
  //           height={500}
  //         // priority
  //         />
  //       </div>
  //     </div>
  //     <div className={description}>
  //       <p>{value.name}</p>
  //     </div>
  //   </Link>
  // </div>
  const Screen1 = () => {
    return (
      <div className={`${screenCard} ${visible("online-courses") ? fadeIn : fadeOut}`}>
        <h1>Stream Courses Online:</h1>
        <div className={`${screenCard_notice}`}>
          <div className={`${screenCard_notice_}`}>
            <div className={screenCard_notice_layout}>
              <div className={``}>
                <Image
                  src={"/assets/img/streaming/podcast/rss.png"}
                  alt={"RSS"}
                  className={"transparent"}
                  width={100}
                  height={100}
                // priority
                />
              </div>
              <h1>Online Streaming</h1>
              <h5>
                Welcome to our Online Streaming platform, where you can access enriching Bible courses and live sessions
              </h5>
              <p>
                Please sign in to your account to unlock access to this exclusive content and immerse yourself
                in a transformative learning experience. If you don&apos;t have an account yet, we invite you to
                join our community by signing up today. Start your journey towards deeper spiritual understanding
                and growth with us.
              </p>
              <div className={screenCard_continue}>
                <div className={screenCard_continue_sec}>
                  <p onClick={()=>{onClick_("/login")}} className={SCC_link}>Login</p>
                  <p>sign in to your account to unlock access</p>
                </div>

                <div className={screenCard_continue_sec}>
                  <p onClick={()=>{onClick_("/enroll-for-imes")}} className={SCC_link}>Sign Up</p>
                  <p> join our community by signing up today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const Screen2 = () => {
    return (
      <div className={`${screenCard} ${visible("inspirational") ? fadeIn : fadeOut}`}>
        <h1>Watch Latest Inspiratioanl Sermons on:</h1>
        <div className={`row ${youtubeRow}`}>
          {/* <div className={`col-md-4`}>
            <div className={youtube}>
              <Image
                src={"/assets/img/streaming/video/youtube/youtube2.png"}
                alt={"youtube"}
                className={youtubeImage}
                width={500}
                height={500}
              // priority
              />
              <Link href={"https://www.youtube.com/c/TheLogicChurch"} className={ytb_btn} target='_blank'>
                <p>click here</p>
              </Link>
            </div>
          </div> */}
          {YoutubeStreams.map((value) => {
            return (
              <Link key={value.url} href={value.url} target='_blabk' className={`col-md-4`}>
                <div className={youtube_link}>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    className={youtube_linkImage}
                    width={500}
                    height={500}
                  // priority
                  />
                  <div className={ytb_link_btn}>
                    <p>{value.title}</p>
                  </div>
                  <div className={timeStamp}>
                    <p>{value.timeStamp}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={screen}>
      <Screen1 />
      <Screen2 />
    </div>
  )
}








const AudioStreams = [
  {
    name: "Spotify",
    icon: "/assets/img/streaming/podcast/spotify.png",
    iconStyle: "google",
    url: "https://open.spotify.com/show/4gUZkv7D8vSSSi0QowACjp",
  },
  {
    name: "Apple Podcast",
    icon: "/assets/img/streaming/podcast/apple_podcast.png",
    iconStyle: "transparent",
    url: "https://podcasts.apple.com/podcast/id1571305683?app=podcast&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p&ls=1&mt=2",
  },
  {
    name: "Google Podcast",
    icon: "/assets/img/streaming/podcast/google_podcast.png",
    iconStyle: "apple",
    url: "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZTRhMjQxMC9wb2RjYXN0L3Jzcw",
  },
  {
    name: "Castbox",
    icon: "/assets/img/streaming/podcast/castbox.png",
    iconStyle: "apple",
    url: "https://castbox.fm/vic/1571305683",
  },
  {
    name: "RSS",
    icon: "/assets/img/streaming/podcast/rss.png",
    iconStyle: "transparent",
    url: "https://anchor.fm/s/5e4a2410/podcast/rss",
  },
  {
    name: "Pocket Casts",
    icon: "/assets/img/streaming/podcast/pocket_cast.png",
    iconStyle: "transparent",
    url: "https://pca.st/itunes/1571305683",
  },
  {
    name: "Overcast",
    icon: "/assets/img/streaming/podcast/overcast.png",
    iconStyle: "apple",
    url: "https://overcast.fm/itunes1571305683",
  },
  {
    name: "Bullhorn",
    icon: "/assets/img/streaming/podcast/bulhorn.png",
    iconStyle: "transparent",
    url: "https://www.bullhorn.fm/podchaser/itunes/1571305683",
  },
  {
    name: "Castro",
    icon: "/assets/img/streaming/podcast/castro.png",
    iconStyle: "apple",
    url: "https://castro.fm/itunes/1571305683",
  },
  {
    name: "Player FM",
    icon: "/assets/img/streaming/podcast/player_fm.png",
    iconStyle: "apple",
    url: "https://player.fm/subscribe?id=https://anchor.fm/s/5e4a2410/podcast/rss",
  },
  {
    name: "Podcast Addict",
    icon: "/assets/img/streaming/podcast/podcast_addict.png",
    iconStyle: "google",
    url: "https://podcastaddict.com/feed/https%3A%2F%2Fanchor.fm%2Fs%2F5e4a2410%2Fpodcast%2Frss",
  },
  {
    name: "Podbean",
    icon: "/assets/img/streaming/podcast/podbean.png",
    iconStyle: "apple",
    url: "#",
  },
  {
    name: "Podhero",
    icon: "/assets/img/streaming/podcast/podhero.png",
    iconStyle: "google",
    url: "https://podhero.com/podcast/feed/https%3A%2F%2Fanchor.fm%2Fs%2F5e4a2410%2Fpodcast%2Frss",
  },
  {
    name: "Podcast Guru",
    icon: "/assets/img/streaming/podcast/podcast_guru.png",
    iconStyle: "apple",
    url: "https://app.podcastguru.io/podcast/1571305683",
  },
  {
    name: "Podcast Republic",
    icon: "/assets/img/streaming/podcast/podcast_republic.png",
    iconStyle: "apple",
    url: "#",
  },
  {
    name: "Podfriend",
    icon: "/assets/img/streaming/podcast/podfriend.png",
    iconStyle: "transparent",
    url: "https://web.podfriend.com/podcast/1571305683",
  },
  {
    name: "RadioPublic",
    icon: "/assets/img/streaming/podcast/radiopublic.jpeg",
    iconStyle: "google",
    url: "http://radiopublic.com/https%3A%2F%2Fanchor.fm%2Fs%2F5e4a2410%2Fpodcast%2Frss",
  },
  {
    name: "Sonnet",
    icon: "/assets/img/streaming/podcast/sonnet.png",
    iconStyle: "google",
    url: "https://sonnet.fm/p/1571305683",
  },
  {
    name: "Subscribe on Android",
    icon: "/assets/img/streaming/podcast/android.png",
    iconStyle: "transparent",
    url: "https://subscribeonandroid.com/anchor.fm/s/5e4a2410/podcast/rss",
  },
]

const YoutubeStreams = [
  {
    title: "The Devil Is A Liar | Part 1 | 2nd Service | Pastor Flourish Peters | The LOGIC Church",
    icon: "/assets/img/streaming/video/youtube/tdial.png",
    url: "https://www.youtube.com/watch?v=uwh_O_Hz_CE",
    timeStamp: "1:42:33",
  },
  {
    title: "Sonship | 2nd Service | Pastor Flourish Peters | The LOGIC Church",
    icon: "/assets/img/streaming/video/youtube/sonship.png",
    url: "https://www.youtube.com/watch?v=uYNB6-PnU38",
    timeStamp: "1:36:49",
  },
  {
    title: "The Devil Is A Liar | Part 1 | 2nd Service | Pastor Flourish Peters | The LOGIC Church",
    icon: "/assets/img/streaming/video/youtube/tdial.png",
    url: "https://www.youtube.com/watch?v=uwh_O_Hz_CE",
    timeStamp: "1:42:33",
  },
  {
    title: "Sonship | 2nd Service | Pastor Flourish Peters | The LOGIC Church",
    icon: "/assets/img/streaming/video/youtube/sonship.png",
    url: "https://www.youtube.com/watch?v=uYNB6-PnU38",
    timeStamp: "1:36:49",
  },
]



