import { useRouter } from "next/router";
import styles from "../styles/best.module.css";
import Image from "next/image";
import on_time_img from "../assets/ontime image.png";
import security_img from "../assets/security image.png";
import fast_img from "../assets/fast work image.png";
export const Best_why = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <h1>Why we are the best</h1>
          <br/>
          <p style={{fontSize: "1.5vw", fontFamily: "Roboto", paddingBottom: "8vw"}}>
            We provide our innovative way for digital payment which is secure
            and easy to use.
          </p>
        </div>
        <div style={{display:"block"}}>
          <button className={styles.button1}>
            <p>Get Started</p>
          </button>
          <button className={styles.button2}>
            <p>Know More</p>
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "2.5%" }}></div>
        {/* container */}
        <div style={{ flex: "30%" }}>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          <div div style={{flex: "10"}}></div>
            <div style={{flex: "30"}}>
            <Image
            src={on_time_img}
            alt="On time"
            layout="responsive"

            // backgroundColor='white';
          />
            </div>
            <div div style={{flex: "60"}}></div>
          </div>
          <h3 className={styles.heading}>
            On Time
          </h3>
          <p className={styles.texter}
          >
            Fintract global value your time. We provide all our services to you on time without any delay or hindrance. Our  clients and their time are very valuable to us. Our products are created from cutting edge technologies which are able to provide on time services.
          </p>
        </div>


        <div className="box" style={{ flex: "2.5%" }}></div>

        {/* conatiner */}
        <div style={{ flex: "30%" }}>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          <div div style={{flex: "10"}}></div>
            <div style={{flex: "30"}}>
            <Image
            src={security_img}
            alt="security"
            layout="responsive"

            // backgroundColor='white';
          />
            </div>
            <div div style={{flex: "60"}}></div>
          </div>
          <h3 className={styles.heading}>
            Security
          </h3>
          <p className={styles.texter}
          >
            Fintract Global takes your security very seriously. We do not disclose any private
information of our clients to anyone which includes account details. We store your private data very securely.
          </p>
        </div>


        <div className="box" style={{ flex: "2.5%" }}></div>
        {/* container */}
        <div style={{ flex: "30%" }}>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          <div div style={{flex: "10"}}></div>
            <div style={{flex: "30"}}>
            <Image
            src={fast_img}
            alt="On time"
            layout="responsive"

            // backgroundColor='white';
          />
            </div>
            <div div style={{flex: "60"}}></div>
          </div>
          <h3 className={styles.heading}>
            Fast work turnaround
          </h3>
          <p className={styles.texter}
          >
            Our products (open banking, SME Lending, fraudify... etc) are created from cutting edge technologies because of which we are able to process and provide all the services very rapidly.
          </p>
        </div>



        <div className="box" style={{ flex: "2.5%" }}></div>
      </div>
    </div>
  );
};
