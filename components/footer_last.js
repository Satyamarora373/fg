import { useRouter } from "next/router";
import Head from "next/head"
import Script from "next/script"
import styles from "../styles/footer.module.css";
import Logo from "./Logo";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';
import Location from "./location"
export const Last_element = () => {
  const router = useRouter();
  return (
<div className={styles.ppp}>
      <div className={styles.footer}>
        <div class={styles.container}>
          <div class={styles.secabout}>
            <Logo />
            <h2>Fintract Global</h2>
            <p style={{color:"white"}}>
            At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional talent from Europe, Asia and America to lead change in how financial entities work. Headquartered in London, Fintract Global develops cutting edge fintech and regtech products.
            </p>
            <ul class={styles.some}>
              <li>
                <SocialIcon network="instagram" bgColor="#fff" style={{ height: "2.5rem", width: "2.5rem",marginRight:".6em" }}></SocialIcon>
              </li>
              <li>
              <SocialIcon network="linkedin" bgColor="#fff" style={{ height: "2.5rem", width: "2.5rem",marginRight:".6em" }}></SocialIcon>
              </li>
              <li>
              <SocialIcon network="twitter" bgColor="#fff" style={{ height: "2.5rem", width: "2.5rem",marginRight:".6em" }}></SocialIcon>
              </li>
              <li>
              <SocialIcon network="facebook" bgColor="#fff" style={{ height: "2.5rem", width: "2.5rem",marginRight:".6em" }}></SocialIcon>
              </li>
            </ul>
          </div>

          <div class="sec contact">
            {/* <h2>Contact Info</h2> */}
            <ul className={styles.info}>
              <li>
                <h2>Address <br /></h2>
                <span style={{color:"white"}}>Registered Office: London<br /> Office Address 71-75, <br />Sheldon Street, Covent Garden<br /> London, WC2h 9JQ</span>
                
              </li>
              <br/><br />
              <li>
                <h3 style={{color:"white"}}>Phone</h3>
                <p style ={{color:"white"}}><a href="tel:442037373227">+44-2037373227</a></p>
              </li>
              <br/>
              <li>
                <h3 style={{color:"white"}}>Email</h3>
                <p style={{color:"white"}}>
                  <a href="malito:contact@fintract.co.uk">contact@fintract.co.uk</a>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <br /><br /><br />
        <p style={{alignContent:"center"}}>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the services we provide, but which we believe also benefit our customers. View our Privacy Policy to learn more about these interests and when we may process your information in this way.</p>
      </div>
      
        </div>
      </div>
      
      <div >
        <p style={{backgroundColor:"black",color:"white"}}>
          Copyright © 2021. All rights reserved
        </p>
      </div>
    </div>

  );
};
