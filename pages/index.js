// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <div className="center">
      
//     </div>
//   );
// }
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { Navbar } from "../components/navbar";
import { Initial_pic } from "../components/initial_photo";
import { Three_col } from "../components/three_col";
import { Brands } from "../components/brands";
import { About_us } from "../components/about_us";
import { Best_why } from "../components/best";
import { Services_given } from "../components/services";
import { Last_element } from "../components/footer_last";
import { Counters } from "../components/counters";
import { Grows } from "../components/grows";
import { New_services_given } from "../components/new_services";
import { Founder } from "../components/founder";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fintract Global</title>
        <meta name="description" content="FG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      <Initial_pic />
      <Counters />
      <Grows />
      <Best_why />
      <Brands />
      <New_services_given />

      <Founder />

      <Last_element />
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
