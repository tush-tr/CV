import OtherUI from "../../UI/Other";

const othersList = [
  {
    perk: "Knowledge of Algorithms and Data structures(do participate in algorithm programming competitions).",
  },
  {
    perk: "Do participate in Hackathons(Won prize in Google Cloud Fest Hackathon 1)."
  },
  {
    perk: "In his free time, likes to blog, create videos on Youtube.",
  },
];

const Others = () => {
  return <OtherUI list={othersList} />;
};
export default Others;
