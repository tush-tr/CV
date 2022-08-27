import styles from "./style.module.css";
const Skill = ({ skillDescription, skillHeading, skillNames }) => {
  return (
    <li>
      <b>{skillHeading}</b>
      <span className={styles.skill_names}>{skillNames}</span>
      <span className={styles.skill_description}>{skillDescription}</span>
    </li>
  );
};

export default Skill;
