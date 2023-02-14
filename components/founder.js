import { useRouter } from "next/router";
import styles from "../styles/founder.module.css";
import Image from "next/image";

function Home() {
  return (
    <div>
      <img src="CEO.png" alt="CEO logo" style={{height:"180px",width:"180px",alignItems:"center",marginLeft:"-42px"}}/>
    </div>
  );
}
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
        {/* <Image src={founder_img}  /> */}
        
      {/* <Home /> */}
        <div style={{ flex: "5%" }}></div>
        <div style={{ flex: "15%", paddingTop: "2.5vw",alignContent:"center" }}>
          <Home/>
        </div>
        {/* <div style={{ flex: "5%" }}></div> */}
        <div style={{ flex: "75%" }}>
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
        {/* <div style={{ flex: "5%" }}></div> */}
      </div>
    </div>
  );
};
