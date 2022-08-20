import Gamblrimage from "../../assets/gamblr.png";
import PortfolioTemplate from "../../templates/portfolio";

const data = {
  name: "Gamblr Casino",
  description:
    "This is a casino with 2 games (crash and roulette). The casino has a admin panel, functional deposit and widthdraw system.",
  image: Gamblrimage,
  testimonial:
    "Suggestied made a very cool casino for us. Very happy with the delivery.",
  client: "Gamblr",
  features: [
    { name: "Client", description: "Gamblr Casino" },
    {
      name: "Deadline",
      description: "40 days",
    },
    { name: "Finished within", description: "26 days" },
    { name: "Type", description: "Frontend (Ui/UX) & Back-end development" },
    {
      name: "How much would it cost with my current rate?",
      description: "For the Ui & back-end it would be about $3000",
    },
    {
      name: "Hours",
      description: "60 Hours, i spent on this project alone.",
    },
  ],
};

export default function Casino() {
  return <PortfolioTemplate data={data} />;
}
