import SectionTitle from "../StyleWrappers/SectionTitle";
const Other = ({ list }) => {
  return (
    <div className="resume-section others">
      <SectionTitle>Other Perks </SectionTitle>
      <ul>
        {list.map(({ perk }) => (
          <li>{perk}</li>
        ))}
      </ul>
    </div>
  );
};
export default Other;
