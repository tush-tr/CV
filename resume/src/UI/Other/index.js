import SectionTitle from "../StyleWrappers/SectionTitle";
import Wrapper from "./Wrapper";
const Other = ({ list }) => {
  return (
    <Wrapper>
      <SectionTitle>Other Perks </SectionTitle>
      <ul>
        {list.map(({ perk }) => (
          <li>{perk}</li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default Other;
