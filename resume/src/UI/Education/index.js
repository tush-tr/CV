import styles from "./style.module.css";
import SectionTitle from "../StyleWrappers/SectionTitle";
const Education = () => {
  return (
    <div className="resume-section education">
      <SectionTitle>Education</SectionTitle>
      <div className={styles.education_content}>
        <div className={styles.institute_name}>
          <div className={styles.institute}>Himalayan Garhwal University</div>
          <div className="study-duration">2017-2020</div>
        </div>
        <div className="studyname">
          <div className={styles.course_title}> Information Technology</div>
          <div className="about-course">
            Bechelors of Science in Information Technology. Focused course on
            programming in C/C++, web technologies, DBMS and many else.
          </div>
        </div>
      </div>
      <br />
      <div className={styles.education_content}>
        <div className={styles.institute_name}>
          <div className={styles.institute}>Uttar Pradesh State Board</div>
          <div className="study-duration">2015-2017</div>
        </div>
        <div className="studyname">
          <div className={styles.course_title}> Intermediate Examination</div>
          <div className="about-course">
            Intermediate qualification specialized in PCM (Physics, Chemistry,
            Mathematics).
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
