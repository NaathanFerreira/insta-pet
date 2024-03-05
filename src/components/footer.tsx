import Image from 'next/image'
import styles from './footer.module.css'

export interface FooterProps {}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={'/assets/dogs-footer.svg'}
        alt="Dogs"
        width={28}
        height={22}
      />
      <p>Insta Pet. Some rights reserved.</p>
    </footer>
  )
}
