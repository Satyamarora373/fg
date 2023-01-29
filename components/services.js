import { useRouter } from "next/router";
import styles from "../styles/services.module.css";
import Image from "next/image";
import bulb_img from "../assets/bulb image.png";
import service1_img from "../assets/bitcoin and crypto.png";
import service2_img from "../assets/banking as service.png";
import service3_img from "../assets/open banking.png";
import service4_img from "../assets/sme landing.png";
export const Services_given = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <br />
      <h2>
        Here are all the services you get when you register with Fintract Global
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* overall box */}
        <div style={{ flex: "5%" }}></div>
        <div style={{ flex: "28%" }}>
          {/* inner box */}
          <Image
            src={service1_img}
            alt="service1"
            layout="responsive"
            // backgroundColor='white';
          />
          <p style={{ fontSize: "1.5vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in .
          </p>
          <p style={{ fontSize: "10vw", color: "#F5F5F5" }}>.</p>
          <Image
            src={service3_img}
            alt="service3"
            layout="responsive"
            // backgroundColor='white';
          />
          <p style={{ fontSize: "1.5vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in .
          </p>
        </div>
        <div style={{ flex: "30%" }}>
          {/* central bulb image */}

          <Image
            src={bulb_img}
            width={100}
            height={100}
            alt="bulb"
            layout="responsive"
            // backgroundColor='white';
          />
        </div>
        <div style={{ flex: "28%" }}>
          {/* right flex box */}
          <Image
            src={service2_img}
            alt="service2"
            layout="responsive"
            // backgroundColor='white';
          />
          <p style={{ fontSize: "1.5vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in .
          </p>
          <p style={{ fontSize: "10vw", color: "#F5F5F5" }}>.</p>
          <Image
            src={service4_img}
            alt="service4"
            layout="responsive"
            // backgroundColor='white';
          />
          <p style={{ fontSize: "1.5vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in .
          </p>
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>
    </div>
  );
};
