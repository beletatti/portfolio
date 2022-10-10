import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href='https://www.facebook.com/richard.bas.9'><FaFacebook /></a></li>
                <li><a href='https://www.instagram.com/dev_beletatti/'><FaInstagram /></a></li>
                <li><a href='https://www.linkedin.com/in/richard-beletatti-527670143/'><FaLinkedin /></a></li>
                <li><a href='https://twitter.com/Dev_Beletatti'><FaTwitter /></a></li>
            </ul>
            <p className={styles.copy_right}> &copy; <span>DevBeletatti</span></p>
        </footer>
    )
}

export default Footer