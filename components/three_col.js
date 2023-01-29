import { useRouter } from "next/router";
import styles from "../styles/three_col.module.css";

import Image from "next/image";
import card_hand_img from "../assets/card hand image.png";
import ceo_img from "../assets/CEO image.png";
export const Three_col = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "10" }}></div>
        <div
          style={{
            flex: "26.66%",
            color: "#666666",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "2.5vw",
            lineHeight: "129.19%",
          }}
        >
          <p>
            The current payment & banking structures are light years away from
            meeting the needs of customers and stakeholders. At Fintract Global
            Ltd, we combine a cutting-edge tech stack with exceptional talent
            from Europe, Asia and America to lead change in how financial
            entities work.
          </p>
        </div>
        <div style={{ flex: "26.66%" }}>
          <Image
            src={card_hand_img} // Route of the image file
            layout="responsive"
            // height='577.11'
            alt="CARD IN HAND"
          />
        </div>
        <div style={{ flex: "26.66%", padding: "10px" }}>
          <Image
            src={ceo_img} // Route of the image file
            // layout="responsive"
            width="10%"
            alt="CEO"
          />
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#666666",
            }}
          >
            “Over the years, I have built lasting relationships with my clients
            and team, whose professional success I believe to be closely linked
            with our long-term progress”
          </p>
          <br />
          <h3
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "26px",
              lineHeight: "30px",
              color: "black",
            }}
          >
            Debasis Chakraborty
          </h3>
          <h3
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "26px",
              lineHeight: "30px",
              color: "black",
            }}
          >
            CEO FinTract Global
          </h3>
          <h2
            style={{
              paddingTop: "20%",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "64px",
              lineHeight: "161.5%",
              color: "black",
            }}
          >
            20K+
          </h2>
          <p
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#666666",
            }}
          >
            Users already registered and signing up for our product
          </p>
        </div>
        <div style={{ flex: "10" }}></div>
      </div>
    </div>
  );
};
