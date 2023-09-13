import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Murad Panahli.</div>
      <div>
        <div className={styles.socialBar}>
          <Image className={styles.icon} width={20} height={20} src="/facebook.png" alt="facebook" />
          <Image className={styles.icon} width={20} height={20} src="/instagram.png" alt="instagram" />
          <Image className={styles.icon} width={20} height={20} src="/twitter.png" alt="twitter" />
          <Image className={styles.icon} width={20} height={20} src="/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
