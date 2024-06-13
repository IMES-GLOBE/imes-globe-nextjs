"use client"
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'

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
        <GradientCard direction='top' colors={["rgba(0,0,0,0)", "rgba(66,66,66,1)"]} width={2} />
      </div>
      

    </div>
  )
}





