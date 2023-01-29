import { useRouter } from "next/router";
import styles from "../styles/grows.module.css";
import Image from "next/image";
import growing_img from "../assets/About us image.png";
export const Grows = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className={styles.images}>
          <Image
            src={growing_img} // Route of the image file
            layout="responsive"
            alt="ABOUT US IMAGE"
          />
        </div>
        <div className={styles.text}>
          <br/>
          <br/>
          <h2 style={{font:"Jost"}}>A platform that grows with you</h2>
          <p style={{textAlign:"left"}}>
            Headquartered in London, Fintract Global is building cutting edge
            fintech and regtech platform as SaaS & BaaS business model to
            support digital economy by providing a range of innovative products
            (such as, Fraudify - Real time Fraud Detection and Prevention,
            Finalytics, B2B Payment, Open Banking, End to End Lending,
            Transaction Monitoring, Trade Finance, Banking Chatbot). We are
            creating comprehensive financial products combining security,
            machine intelligence and automation, unique conceptualisation and
            complete business analysis.
          </p>
          <br/>
          <br/>
          <button>
            <p>Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
};
