const Skill = ({skillDescription,skillHeading,skillNames}) => {
  return (
    <li>
      <b>{skillHeading}</b>
      <span className="skill-names">{skillNames}</span>
      <br></br>
      <span className="skill-description">
        {skillDescription}
      </span>
    </li>
  );
};

export default Skill;