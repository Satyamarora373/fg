import React from "react";

// const Contact = () => {
//   return (
//     <div className="center">
      
//     </div>
//   );
// };
// export default Contact;
import Head from "next/head"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Initial_pic_career } from "../components/initial_photo_career";
import { Last_element } from "../components/footer_last";
import { Overview } from "../components/overview"
import { Areas } from "../components/career_areas";
import { Perks } from "../components/perks";
import { Form } from "../components/form";
export default function Career() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Fintract Global</title>
        <meta name="description" content="FG" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <Navbar /> */}
      {/* <Navbar /> */}

      <Initial_pic_career />
      <Overview/>
      <Areas />
      <Perks/>
      <Form/>


      {/* <Counters />
      <Grows />
      <Best_why />
      <Brands />
      <New_services_given />

      <Founder /> */}

      <Last_element />
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
