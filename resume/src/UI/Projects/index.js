import Template from "./ProjectTemplate";
import SectionTitle from "../StyleWrappers/SectionTitle";
import styles from "./style.module.css";
const Projects = ({ projectsList }) => {
  return (
    <div className={styles.projects}>
      <SectionTitle>Projects</SectionTitle>
      <div className={styles.project_info}>
        {projectsList.map(({ title, desc, link, liveLink }) => (
          <Template title={title} desc={desc} link={link} liveLink={liveLink} />
        ))}
      </div>
      <p className={styles.project_info_see_others}>
        Check more at{" "}
        <a href="https://tusharrajpoot.com/#/projects">
          tusharrajpoot.com/projects
        </a>
      </p>
    </div>
  );
};
export default Projects;
