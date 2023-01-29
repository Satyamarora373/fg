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
    <div className={styles.main}>
      <br />
      <div className={styles.flexContaine}>

  <div className={styles.flexchild }>
 
    <Logo />
    <p style={{color:"white",fontStyle:"Roboto",fontSize:"3.24vw",paddingLeft:"2vw"}}>Fintract Global</p>
    <p style={{color:"white",paddingLeft:"2vw",width:"52vw"}}>At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional talent from Europe, Asia and America to lead change in how financial entities work. Headquartered in London, Fintract Global develops cutting edge fintech and regtech products.</p>
    <div style={{paddingLeft:"2vw",display:"inline-block",marginTop:"2em"}}>
    <SocialIcon network="twitter" bgColor="#fff" style={{ height: "2.5vw", width: "2.5vw",marginRight:".6em" }}><p style={{color:"white"}}></p></SocialIcon>
    <SocialIcon network="instagram" bgColor="#fff" style={{ height: "2.5vw", width: "2.5vw",marginRight:".6em" }}></SocialIcon>
    <SocialIcon network="facebook"bgColor="#fff" style={{ height: "2.5vw", width: "2.5vw",marginRight:".6em" }}></SocialIcon>
    <SocialIcon network="linkedin" bgColor="#fff" style={{ height: "2.5vw", width: "2.5vw",marginRight:".6em" }}></SocialIcon>
    </div>/''''''''''''
    
  </div>
  
  <div className={styles.flexchild }>
    <div style={{display:"flex",flexWrap:"nowrap"}}>
          <div>
          <p style={{color:"#fff",marginLeft:"1.5vw",marginLeft:"1.5vw"}}>Address</p>
            <br />
            <p style={{color:"#fff",marginLeft:"1.5vw",fontSize:"13px"}}>Registered Office: London Office Address 71-75, Sheldon Street, Covent Garden London, WC2h 9JQ</p>
            
          </div>
     
    </div>
    <br />
    <br />
    <div style={{display:"flex",flexWrap:"nowrap"}}>
          <div>
          <p style={{color:"#fff",marginLeft:"1.5vw",marginLeft:"1.5vw"}}>Phone</p>
            <br />
            <p style={{color:"#fff",marginLeft:"1.5vw",fontSize:"13px"}}>+44-2037373227</p>
            
          </div>
          
     
    </div>
    <br />
    <br />
    <div style={{display:"flex",flexWrap:"nowrap"}}>
          <div>
          <p style={{color:"#fff",marginLeft:"1.5vw",marginLeft:"1.5vw"}}>Email</p>
            <br />
            <p style={{color:"#fff",marginLeft:"1.5vw",fontSize:"13px"}}>contact@fintract.co.uk</p>
            
          </div>
          
     
    </div>

  </div>
  
</div>
<div >
  <p style={{color:"white",width:" 83vw",textAlign:"center",size:"23px"}}> Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the services we provide, but which we believe also benefit our customers. View our Privacy Policy to learn more about these interests and when we may process your information in this way.</p>
    <br></br>
    <p style={{textAlign:"center"}}><a style={{color:"white",textAlign:"center"}}><u>Click here</u> </a></p>
    {/* <br /> */}
    <p style={{textAlign:"center",color:"#9B9B9B"}}> Copyright ©2021 All rights reserved.</p>
</div>  
      <div style={{marginTop: "2vw"}}></div>
    </div>
  );
};
