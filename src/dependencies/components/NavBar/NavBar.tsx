"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image'
import { BagIcon } from '@/dependencies/icons/bag';
import { UserCircleIcon } from '@/dependencies/icons/userCircle';
import { UserIcon } from '@/dependencies/icons/user';
import { DropdownIcon } from '@/dependencies/icons/dropdown';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ListIcon } from '@/dependencies/icons/list';

function NavBar({ }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClick = (url: string) => {
    router.push(url);
  }

  const isActive = (route: string) => {
    return route === pathname ? true : false;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.layoutBG}></div>
        <div className={styles.navList}>
          {navList.map(value => {
            return (
              value.title === "cart" ?
                <div key={value.title} className={styles.UserSection}>
                  <BagIcon className={styles.BagIcon} />
                  <UserCircleIcon_ />
                </div>
                :
                <div className={`${styles.navContainer} ${isActive(value.to) ? styles.navContainerActive : ''}`}>
                  <Link href={value.to} className={styles.Link}>
                    <p className={styles.nav}>{value.title}</p>
                    {value.subNav.length >= 1 &&
                      <DropdownIcon
                        width='10px'
                        height='10px'
                      />}
                  </Link>
                  {value.subNav.length >= 1 &&
                    <div className={styles.subNavContainer}>
                      <div className={styles.subNavContainerLayout}>
                        {value.subNav.map(subValue => {
                          return (
                            <Link key={subValue.to} href={subValue.to}>
                              <p className={`${styles.subnav} ${isActive(subValue.to) ? styles.subnavActive : ''}`}>{subValue.title}</p>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  }
                </div>
            )
          })}
        </div>
      </div>
      {/* <div className={styles.giveContainer} onClick={() => {onClick("/giving")}}>
        <p className={styles.give}>Give</p>
      </div> */}
      <ImesLogo />
      <SmallScreenMenu pathname={pathname} router={router} searchParams={searchParams} />
    </>
  );
}

const navList = [
  {
    title: "Home",
    to: "/",
    subNav: []
  },
  {
    title: "about",
    to: "/about-the-school",
    subNav: [
      {
        title: "About the School",
        to: "/about-the-school"
      },
      {
        title: "Ministers Network",
        to: "/ministers-network"
      }
    ]
  },
  {
    title: "Online Courses",
    to: "/sermons?id=online-courses",
    subNav: [
      {
        title: "Inspirational",
        to: "/sermons?id=inspirational"
      },
      {
        title: "Enroll for IMES",
        to: "/enroll-for-imes"
        // if signed in then:
        // to: "/sermons?id=online-courses"
      },
    ]
  },
  // {
  //   title: "location",
  //   to: "/locations",
  //   subNav: []
  // },
  // {
  //   title: "giving",
  //   to: "/giving",
  //   subNav: []
  // },
  // {
  //   title: "resources",
  //   to: "/sermons?id=audio-sermons",
  //   subNav: [
  //     {
  //       title: "Sermons",
  //       to: "/sermons?id=audio-sermons"
  //     },
  //   ]
  // },
  {
    title: "Gallery",
    to: "/gallery",
    subNav: []
  },
  {
    title: "Contact",
    to: "/contact",
    subNav: []
  },
  {
    title: "cart",
    to: "/cart",
    subNav: []
  },
]

function ImesLogo({ }) {
  const router = useRouter();

  const onClick = (url: string) => {
    router.push(url);
  }
  return (
    <div className={styles.ImesLogo} onClick={() => { onClick("/") }}>
      <div className={styles.ImesLogoLayout}>
        <Image
          src="/assets/img/favIcon.png"
          alt="Imes Logo"
          className={styles.ImesIconLight}
          width={60}
          height={60}
          priority
        />
        <Image
          src="/assets/img/favIcon_Dark.png"
          alt="Imes Logo"
          className={styles.ImesIconDark}
          width={60}
          height={60}
          priority
        />
      </div>
    </div>
  )
}

function SmallScreenMenu(params: any) {
  const { pathname, router, searchParams } = params;
  const {
    SmallScreenMenu, SmallScreenMenuLayout, menuBackground, menuBackground_,
    menuContainer, menuContainerLayout, SSM_hide, MC_show,
    Menu_navList, menuHead,
  } = styles;
  const [buttoninVisible, setButtoninVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [bgVisible_, setBgVisible_] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const onClick = (url: string) => {
    if (bgVisible === true) {
      setMenuVisible(false);
      setTimeout(() => {
        setBgVisible_(false);
        setTimeout(() => {
          setBgVisible(false);
        }, 500);
      }, 300);
      setButtoninVisible(false);
    } else {
      setBgVisible(true);
      setTimeout(() => {
        setBgVisible_(true);
        setTimeout(() => {
          setMenuVisible(true);
        }, 200);
      }, 100);
      setButtoninVisible(true);
    }
  }

  const forceClose = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setBgVisible_(false);
      setTimeout(() => {
        setBgVisible(false);
      }, 500);
    }, 300);
    setButtoninVisible(false);
  }

  useEffect(() => {
    forceClose()
  }, [pathname, searchParams]);


  const RenderNavList = () => {
    return (
      <div className={Menu_navList}>
        {navList.map(value => {
          return (
            value.title === "cart" ?
              <div className={menuHead}>
                <BagIcon className={styles.BagIcon} />
                <div onClick={() => { forceClose() }}>
                  <p>close</p>
                </div>
              </div>
              :
              <NavList value={value} pathname={pathname} />
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className={`${SmallScreenMenu} ${buttoninVisible === true && SSM_hide}`} onClick={() => { onClick("/") }}>
        <div className={SmallScreenMenuLayout}>
          <ListIcon />
        </div>
      </div>
      {bgVisible && <div className={menuBackground} style={{ opacity: bgVisible_ ? 1 : 0 }}>
        <div className={menuBackground_} onClick={() => { onClick("/") }}></div>
        <div className={`${menuContainer} ${menuVisible && MC_show}`}>
          <div className={menuContainerLayout}>
            {RenderNavList()}
          </div>
        </div>
      </div>}
    </>
  )
}

const NavList = (params: any) => {
  const { value, pathname } = params;
  const [subNavHeight, setSubNavHeight] = useState(0);
  const [collapsNav, setCollapsNav] = useState(false);
  const subNavRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const {
    Menu_subNavContainer, Menu_subNavContainerLayout, expanded,
    Menu_nav, Menu_navContainer, Menu_navContainerActive,
    Menu_navContainer_special, Menu_navContainer_special_active,
    Menu_DropdownIcon, Menu_DropdownIcon_active
  } = styles;

  useEffect(() => {
    if (subNavRef.current) {
      setSubNavHeight(subNavRef.current.scrollHeight);
    }
  }, [])
  const togleColapse = () => {
    if (value.subNav.length >= 1) {
      setCollapsNav(!collapsNav);
    } else {
      router.push(value.to);
    }
  }

  const isActive = (route: string) => {
    return route === pathname ? true : false;
  }

  const RenderSubNav = () => {
    return (
      <>
        {value.subNav.length >= 1 &&
          <div
            className={`${Menu_subNavContainer} ${collapsNav && expanded}`}
            style={{ maxHeight: collapsNav ? `${subNavHeight}px` : "0px" }}
          >
            <div className={Menu_subNavContainerLayout} ref={subNavRef}>
              {value.subNav.map((subValue: any) => {
                return (
                  <Link key={subValue.url} href={subValue.to}>
                    <p className={`${styles.subnav} ${isActive(subValue.to) ? styles.subnavActive : ''}`}>{subValue.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        }
      </>
    )
  }

  return (
    <>
      <div className={`${Menu_navContainer_special} ${collapsNav && Menu_navContainer_special_active}`} onClick={() => { togleColapse() }}>
        <div className={`${Menu_navContainer} ${isActive(value.to) ? Menu_navContainerActive : ''}`}>
          <div className={styles.Link}>
            <Link href={value.to}  className={Menu_nav}>{value.title}</Link>
            {value.subNav.length >= 1 &&
              <DropdownIcon
                width='30px'
                height='30px'
                className={`${Menu_DropdownIcon} ${collapsNav && Menu_DropdownIcon_active}`}
              />}
          </div>
        </div>
        {RenderSubNav()}
      </div>
    </>
  )
}

function UserCircleIcon_(params: any) {
  return (
    <div className={styles.UserCircleIcon}>
      <div className={styles.UserCircleIconLayout}>
        <UserIcon className={styles.UserIcon} />
      </div>
    </div>
  )
}

export default NavBar;