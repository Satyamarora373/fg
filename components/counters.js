import { useRouter } from "next/router";
import styles from "../styles/counters.module.css";
export const Counters = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <h1 style={{fontFamily: "Adamina"}}>20K+</h1>
          <p style={{fontFamily: "Roboto"}}>User already registered and signing up for our product</p>
        </div>
        <div>
          <h1 style={{fontFamily: "Adamina"}}>94%</h1>
          <p style={{fontFamily: "Roboto"}}>Daily Activity Engagement</p>
        </div>
        <div>
          <h1 style={{fontFamily: "Adamina"}}>10.2K+</h1>
          <p style={{fontFamily: "Roboto"}}>Happy clients and work done</p>
        </div>
        <div>
          <h1 style={{fontFamily: "Adamina"}}>95+</h1>
          <p style={{fontFamily: "Roboto"}}>Trusted by Company</p>
        </div>
      </div>
    </div>
  );
};
