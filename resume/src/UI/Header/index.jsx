import pic from "../../assets/pic2.jpeg";
import styles from "./style.module.css";
const ResumeHeader = ({headline,summary}) => {
  return (
    <div className={styles.resume_header}>
      <img src={pic} alt="" className={styles.img_main} />
      <div className={styles.resume_section_text}>
        <h1 className={styles.resume_header_name}>TUSHAR RAJPOOT</h1>
        <h2 className={styles.resume_header_subname}>{headline}</h2>
        <div className={styles.resume_header_info}>
          {summary}
        </div>
      </div>

      <div className={styles.resume_section_meta}>
        <div className={styles.resume_section_meta_right}>
          <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href="https://tush-tr.github.io/">
              {" "}
              tush-tr.github.io{" "}
            </a>
          </div>
          <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href>
              {" "}
              tusharrajpoot43@gmail.com{" "}
            </a>
          </div>
          <div className={styles.resume_section_meta_row}>(+91)9058015227 </div>
          <div className={styles.resume_section_meta_row}>
            <a
              className={styles.red}
              href="https://www.linkedin.com/in/tushar-r-849510116/"
            >
              linkedin.com/in/tushar-r-849510116/{" "}
            </a>
          </div>
          <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href="https://github.com/tush-tr">
              {" "}
              github.com/tush-tr{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeHeader;
