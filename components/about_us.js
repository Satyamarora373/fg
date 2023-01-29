import { useRouter } from 'next/router';
import styles from '../styles/about_us.module.css';
import Image from 'next/image';
import about_us_img from '../assets/About us image.png';
export const About_us = () => {
    const router = useRouter();
    
    return (
    <div className={styles.main}>
        <div style={{  display: 'flex', flexWrap: 'wrap'}}>
            <div style={{flex: '50%'}}>
                <Image
                    src={about_us_img} // Route of the image file
                    layout="responsive"
                    alt="About"
                />
            </div>
            <div style={{flex: '50%', float: 'right'}}>
                <h2>About Us</h2>
                <p>
                    Hesadquartered in London, Fintract Global is building cutting edge fintech and regtech platform as SaaS & BaaS business model to support digital economy by providing a range of innovative products (such as, Fraudify - Real time Fraud Detection and Prevention, Finalytics, B2B Payment, Open Banking, End to End Lending, Transaction Monitoring, Trade Finance, Banking Chatbot). We are creating comprehensive financial products combining security, machine intelligence and automation, unique conceptualisation and complete business analysis. 
                </p>
                <br/><br/><br/>
                <div className={styles.button}>
                    Get Started
                </div>
                {/* Add a link element later here */}
            </div>
        </div>
    </div>
    );
    };