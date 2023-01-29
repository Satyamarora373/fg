import { useRouter } from "next/router";
import styles from "../styles/new_services.module.css";
import Image from "next/image";
import service1_img from "../assets/open_banking.png";
import service2_img from "../assets/fraud.png";
import service3_img from "../assets/sme_landing.png";
import service4_img from "../assets/b2b.png";
import service5_img from "../assets/baas.png";
export const New_services_given = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <br />
      <div className={styles.heading}>
        <h2>Here are all the services you get when you register with Fintract Global</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "5%" }}></div>
        <div className={styles.texter}>
          <h2>Open Banking</h2>
          <br/>
          <p>
            Our target is to develop an ecosystem of products and services
            augmented with production environments, Fraudify Certified APIs by
            PSD2, enhanced authentication by OpenID and multi-factor
            authentication....
          </p>
          <button style={{marginLeft: "12vw", textAlign: "center", marginTop:"2vw"}}>Read More</button>
        </div>
        <div  className={styles.imager}>
          <Image src={service1_img} layout="responsive" />
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "5%" }}></div>

        <div  className={styles.imager}>
          <Image src={service2_img} layout="responsive" />
        </div>
        <div className={styles.texter}>
          <h2>Fraudify</h2>
          <p>
            To greatly reduce the current state of rampant online fraud with our
            cutting-edge tech-stack with niche solutions. With our fraud
            detection capabilities, we bring trust and credibility to all
            financial transactions....
          </p>
          <button style={{marginLeft: "12vw", textAlign: "center", marginTop:"2vw"}}>Read More</button>
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "5%" }}></div>
        <div className={styles.texter}>
          <h2>SME Landing</h2>
          <p>
            We enable start-ups to focus solely on their business instead of
            fretting about gaps in their cash-flows.Our vision is to lend our
            contribution to the growth of the industrial economy by providing
            superior financial solutions to under....
          </p>
          <button style={{marginLeft: "12vw", textAlign: "center", marginTop:"2vw"}}>Read More</button>
        </div>
        <div  className={styles.imager}>
          <Image src={service3_img} layout="responsive" />
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "5%" }}></div>

        <div  className={styles.imager}>
          <Image src={service4_img} layout="responsive" />
        </div>
        <div className={styles.texter}>
          <h2>B2B Payment</h2>
          <p>
            To be a leading international payment platform for banking and
            financial institutions. We aim to support payments in all the major
            FIAT(s) and cryptocurrencies with support for real-time currency
            conversions....
          </p>
          <button style={{marginLeft: "12vw", textAlign: "center", marginTop:"2vw"}}>Read More</button>
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "5%" }}></div>
        <div className={styles.texter}>
          <h2>Banking as a Service</h2>
          <p>
            To develop our partner businesses by providing a ‘banking as a
            service’ platform for seamless integration of financial services. We
            aim to push out APIs at an unmatched pace and strive for complete
            automation of all processes....
          </p>
          <button style={{marginLeft: "12vw", textAlign: "center", marginTop:"2vw"}}>Read More</button>
        </div>
        <div  className={styles.imager}>
          <Image src={service5_img} layout="responsive" />
        </div>
        <div style={{ flex: "5%" }}></div>
      </div>
      <div>
        <button style={{marginTop:"0px"}}>Load More</button>
      </div>
    </div>
  );
};
