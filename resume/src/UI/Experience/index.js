import styles from "./style.module.css";
const Experience = ({
  companyName,
  periodDate,
  companyWebLink,
  companyWebSite,
  position,
  tagline,
  workList,
}) => {
  return (
    <div className={styles.cv_timeline_row}>
      <div className={styles.cv_timeline_side}>
        <div className={styles.cv_timeline_company}>{companyName}</div>
        <div className="cv-timeline-date">{periodDate}</div>
        <a href={companyWebLink} className={styles.a}>
          {companyWebSite}
        </a>
      </div>
      <div className={styles.cv_timeline_body}>
        <h4 className={styles.cv_timeline_position}>{position}</h4>
        <p className={styles.body_paragraph}>{tagline}</p>
        <ul className={styles.unordered_list}>
          {workList.map((line) => (
            <li className={styles.list_item}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
