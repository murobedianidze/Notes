import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle,} from '@fortawesome/free-brands-svg-icons';
import styles from "../footer/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_container}>

        <a className={styles.social_icon} href="https://www.facebook.com/profile.php?id=100004163760758" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a className={styles.social_icon} href="https://www.instagram.com/murobedianidze/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a className={styles.social_icon} href="mailto:bedianidze.muriko@gmail.com">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
