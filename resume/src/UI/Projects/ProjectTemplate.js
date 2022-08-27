import styles from "./style.module.css"
const ProjectTemplate = ({ title, desc, link, liveLink }) => {
  const liveLinkTag = liveLink != null ? <a href={liveLink}>Live Link</a> : "";
  return (
    <div className={styles.project_info}>
      <h4>{title}</h4>
      <p>
        {desc}
        <br></br>
        <a href={link}>See Project</a>
        {" "}
        {liveLinkTag}
      </p>
    </div>
  );
};
export default ProjectTemplate;
