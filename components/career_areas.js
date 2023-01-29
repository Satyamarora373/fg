import { useRouter } from "next/router";
import styles from "../styles/career_areas.module.css";
import Image from "next/image";
import area1_img from "../assets/1.png";
import area2_img from "../assets/2.png";
import area3_img from "../assets/3.png";
import area4_img from "../assets/4.png";
import area5_img from "../assets/5.png";
import area6_img from "../assets/6.png";
export const Areas = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <h6>.</h6>
      <br />
      <h1 className={styles.topper}>
        Explore <span>Career</span> Areas
      </h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area1_img} />
            <a href="#">
              <h2>Marketing & sales (CEO)</h2>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area2_img} />
            <a href="#">
              <h2>Design and content writing</h2>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area3_img} />
            <a href="#">
              <h2>Human resources and Management</h2>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area4_img} />
            <a href="#">
              <h2>Finance and Marketing</h2>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area5_img} />
            <a href="#">
              <h2>Software development and engineering</h2>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <Image layout="responsive" src={area6_img} />
            <a href="#">
              <h2>Product and corporate management</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
