import { useRouter } from "next/router";
import styles from "../styles/overview.module.css";
export const Overview = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <button>
        Overview
      </button>
      <br/>
      <br/>
      <p>
      Fintract Global is providing opportunities that constantly challenge management and technical trainee programme to learn and develop in a fast-paced environment. We are looking for students who are driven and motivated to work with some of the brightest minds in the management consulting world. You’ll connect with mentors and experts, who will help you delve deeper into the intricacies of the corporate world. These roles will equip you with the nuances of business strategy through several hands-on and practical experiences.
      </p>
      <h1>
      Find Your Perfect Role
      </h1>
      <p>
      <ul>
        <li>Are available for a minimum work duration of 4 months.</li>
        <li>Demonstrate unflinching commitment and dedication towards the company and its business interests.</li>
        <li>Are pursuing programs/have graduated from distinguished institutes/universities and possess the requisite skills and interests, for various arenas</li>
        <li>Are willing to gain practical exposure under the mentorship of experienced professionals in their selected fields.</li>
      </ul>
      </p>
    </div>
  );
};
