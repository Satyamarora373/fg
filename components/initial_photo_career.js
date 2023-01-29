import { useRouter } from "next/router";
import styles from "../styles/initial_photo_career.module.css";

import Image from "next/image";
import body_img from "../assets/header 1 image.png";
export const Initial_pic_career = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      {/* <h1 className={styles.text}>
        EXPLORE THE
        <br /> CAREER AT
        <br /> FINTRACT GLOBAL
        <br /> JOIN THE TEAM
      </h1>
      <p className={styles.line}>
        Join us in the Development of Cutting Edge Fintech Products and
        accelerate your Career Growth
      </p> */}
      <Image
        src={body_img} // Route of the image file
        layout="responsive"
        alt="BODY IMAGE"
      />
    </div>
  );
};
