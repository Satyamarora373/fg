import { useRouter } from "next/router";
import styles from "../styles/founder.module.css";
import Image from "next/image";
import founder_img from "../assets/CEO image.png";
export const Founder = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <br/>
      <div>
        <h1 className={styles.title}>Vision of the founder</h1>
      </div>
      <div></div>
      <div
        className={styles.bluebg}
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#0057FF",
        }}
      >
        <div style={{ flex: "5%" }}></div>
        <div style={{ flex: "15%", paddingTop: "2.5vw" }}>
          <Image src={founder_img} layout="responsive" />
        </div>
        <div style={{ flex: "5%" }}></div>
        <div style={{ flex: "70%" }}>
          <br/>
          <br/>
          <p>
            “Over the years, I have built lasting relationships with my clients
            and team, whose professional success I believe to be closely linked
            with our long-term progress”
          </p>
          <h4>Debasis Chakraborty</h4>
          <h5>CEO FinTract Global</h5>
          <br/>
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>
    </div>
  );
};
