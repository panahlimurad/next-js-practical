import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero1.png"
import Button from "@/components/Button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Better design for your digital products</h1>
        <p>
          Turning your idea into Reality. We bring together the teams from the
          global tech indstury
        </p>
        <Button url="/dashboard/register" text="Register"/>
      </div>
      <div>
        <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="home" />
        </div>
      </div>
    </div>
  );
}
