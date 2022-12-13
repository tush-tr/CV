import OtherUI from "../../UI/Other";

const othersList = [
  {
    perk: "Knowledge of Algorithms and Data structures(do participate in algorithm programming competitions).",
  },
  {
    perk: (
      <span>
        Do practice on online coding platforms like{" "}
        <a href="https://www.hackerrank.com/tush_tr">HackerRank</a>{" "}
        <a href="https://www.hackerearth.com/@tusharrajput604">HackerEarth</a>{" "}
        <a href="https://leetcode.com/tush_tr/">Leetcode.</a>
      </span>
    ),
  },
  {
    perk: "In his free time, likes to blog, create videos on Youtube.",
  },
];

const Others = () => {
  return <OtherUI list={othersList} />;
};
export default Others;
