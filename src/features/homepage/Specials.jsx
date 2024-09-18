import Button from "../../components/Button.jsx";
import Card from "../../components/Card.jsx";

import greekSaladImg from "../../assets/greek salad.jpg";

function Specials() {
  return (
    <section className="row specials">
      <div className="header">
        <h2>This weeks specials!</h2>
        <Button className="">Order Online</Button>
      </div>
      <div className="items">
        <Card
          imgSrc={greekSaladImg}
          label="Greek salad"
          price="12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          imgSrc={greekSaladImg}
          label="Greek salad"
          price="12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          imgSrc={greekSaladImg}
          label="Greek salad"
          price="12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </section>
  );
}

export default Specials;
