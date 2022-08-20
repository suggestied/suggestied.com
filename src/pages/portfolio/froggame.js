import FrogGameimage from "../../assets/froggame.png";
import PortfolioTemplate from "../../templates/portfolio";

const data = {
  name: "Frog Game",
  description: "A simple game of frogging.",
  image: FrogGameimage,
  testimonial:
    "Suggestied delivered the entire game in 10 days, while the deadline was set to 30 days. Very hard worker, would recommend.",
  client: "Lonely frogs lambo club",
  features: [
    { name: "Client", description: "Lonely frogs lambo club" },
    {
      name: "Deadline",
      description: "30 days",
    },
    { name: "Finished within", description: "10 days" },
    { name: "Type", description: "Frontend (Ui/UX) & Smart contract" },
    {
      name: "How much would it cost with my current rate?",
      description:
        "For the Ui, Web3 intergration & game smart contract it would be about $2500",
    },
    {
      name: "Hours",
      description: "40 Hours, i spent on this project alone.",
    },
  ],
};

export default function FrogGame() {
  return <PortfolioTemplate data={data} />;
}
