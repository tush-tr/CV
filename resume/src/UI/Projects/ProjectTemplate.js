import styles from "./style.module.css";
const ProjectTemplate = ({ title, desc, link, liveLink }) => {
  const liveLinkTag = liveLink != null ? <a href={liveLink}>Live Link</a> : "";
  return (
    <div className={styles.project_info}>
      <div className={styles.project_heading}>
      <h4>{title}</h4>
        <a href={link}>See Project</a> {liveLinkTag}
      </div>
      <p>{desc}</p>
    </div>
  );
};
export default ProjectTemplate;
