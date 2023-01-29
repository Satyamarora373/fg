import { useRouter } from "next/router";
import styles from "../styles/form.module.css";
import Image from "next/image";
import img from "../assets/Form img.png";
import arrow_img from "../assets/send img.png"
export const Form = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <br />
      <div className={styles.former}>
        <form>
          <div className={styles.inputs}>
            <br />
            <div className={styles.row1}>
              <div className={styles.inp11}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" name="name"></input>
                <hr />
              </div>
              <div className={styles.inp12}>
                <label htmlFor="mail">Email</label>
                <br />
                <input type="email" id="mail" name="mail"></input>
                <hr />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.row2}>
              <div className={styles.inp21}>
                <label htmlFor="phone">Phone</label>
                <br />
                <input type="tel" id="phone" name="phone"></input>
                <hr />
              </div>
              <div className={styles.inp22}>
                <label htmlFor="profile">Linkedin Profile</label>
                <br />
                <input type="url" id="profile" name="profile"></input>
                <hr />
              </div>
            </div>
            <div className={styles.dropdown}>
              <br />
              <br />
              <label htmlFor="role">Which role are you interested in?</label>
              <br />
              <br />
              <select name="roles" id="role">
                <option value="Marketing & sales (CEO)">
                  Marketing & sales (CEO)
                </option>
                <option value="Design and content writing">
                  Design and content writing
                </option>
                <option value="Human resources and Management">
                  Human resources and Management
                </option>
                <option value="Finance and Marketing">
                  Finance and Marketing
                </option>
                <option value="Software development and engineering">
                  Software development and engineering
                </option>
                <option value="Product and corporate management">
                  Product and corporate management
                </option>
              </select>
              <hr />
            </div>
            <br />
            <div className={styles.resume}>
              <br />
              <label htmlFor="resume">Resume</label>
              <br />
              {/* <button> */}
              <input
                type="file"
                id="resume"
                name="resume"
                placeholder="Browse Files"
              ></input>
              <p>Browse Files</p>
              {/* </button> */}
              <hr />
            </div>
            <div className={styles.message}>
              <div className={styles.m1}>
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <input type="text" id="message" name="message"></input>
                <hr />
              </div>
              <div className={styles.m2}>
                <Image src={arrow_img} layout="responsive" />
              </div>
              <hr />
            </div>
            <div className={styles.final}>
              <br />
              <br />
              <br />
              <br />
              <label htmlFor="click">Sign Up</label>
              <br />
              <input type="button" id="Sign Up" name="click"></input>
            </div>
          </div>
        </form>
        <div className={styles.images}>
          <Image src={img} layout="responsive" />
          <p></p>
        </div>
      </div>
      <br />
    </div>
  );
};
