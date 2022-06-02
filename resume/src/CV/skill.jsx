const Skill = ({skillDescription,skillHeading,skillNames}) => {
  return (
    <li>
      <b>{skillHeading}</b>
      <span className="skill-names">{skillNames}</span>
      <span className="skill-description">
        {skillDescription}
      </span>
    </li>
  );
};

export default Skill;