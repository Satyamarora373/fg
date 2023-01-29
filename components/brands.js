import { useRouter } from "next/router";
import styles from "../styles/brands.module.css";

import Image from "next/image";
import paypal_img from "../assets/Paypal.webp";
import google_img from "../assets/Google.png";
import university_img from "../assets/University.png";
import amazon_img from "../assets/Amazon_icon.svg";
export const Brands = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <br/>
      <h1> Many big companies trust us </h1>
      <p>
        Our clients include multinational corporations, financial institutions,
        private equity funds, domestic corporations, joint ventures, emerging
        companies, start-ups, non-governmental organizations, international
        organizations, individuals and government.
      </p>
      <br/>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "5", marginTop: "2vw" }} />
        <div style={{ flex: "5", marginTop: "2vw" }}>
          <Image
            src={paypal_img}
            layout="responsive"
            width={120}
            height={100}
            alt="Paypal"
          />
        </div>
        <div style={{ flex: "15" }}>
          <h1 className={styles.namer}>Paypal</h1>
        </div>
        <div style={{ flex: "5", marginTop: "2vw" }} />
        <div style={{ flex: "5", marginTop: "2vw" }}>
          <Image
            src={google_img}
            layout="responsive"
            width={120}
            height={100}
            alt="Paypal"
          />
        </div>
        <div div style={{ flex: "20" }}>
          <h1 className={styles.namer}>Google</h1>
        </div>
        <div style={{ flex: "5", marginTop: "2vw" }} />
        <div style={{ flex: "20", marginTop: "2vw" }}>
          {/* <Image
            src={university_img}
            layout="responsive"
            width={120}
            height={100}
            alt="Paypal"
          /> */}
          <h1 className={styles.namer} style={{fontSize: "2vw", marginTop: "-2vw"}}>The university 
of buckingham</h1>
        </div>

        {/* <div div style={{ flex: "20" }}>
          <h1>Paypal</h1>
        </div> */}
        <div style={{flex: "5"}}></div>
        <div style={{ flex: "5", marginTop: "2vw" }}>
          <Image
            src={amazon_img}
            layout="responsive"
            width={120}
            height={100}
            alt="Paypal"
          />
        </div>
        <div div style={{ flex: "20", color: "rgba(131, 131, 131, 0.68);" }}>
          <h1 className={styles.namer}>Amazon</h1>
        </div>
        <div style={{ flex: "5", marginTop: "2vw" }} />
      </div>
      <div></div>
    </div>
  );
};
