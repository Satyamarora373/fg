import { useRouter } from "next/router";
import styles from "../styles/initial_photo.module.css";

import Image from "next/image";
import body_img from "../assets/home_photo1.png";
export const Initial_pic = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      {/* <h1>FINTRACT GLOBAL</h1> */}
      <Image
        src={body_img} // Route of the image file
        layout="responsive"
        alt="BODY IMAGE"
      />
    </div>
  );
};
