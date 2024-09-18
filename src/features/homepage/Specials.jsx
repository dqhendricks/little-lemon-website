import Button from "../../components/Button.jsx";
import SpecialsCard from "../../components/SpecialsCard.jsx";

import greekSaladImg from "../../assets/greek salad.jpg";

function Specials() {
  return (
    <section className="row">
      <div className="specials">
        <header>
          <h2>This weeks specials!</h2>
          <Button className="">Online Menu</Button>
        </header>
        <div className="items">
          <SpecialsCard
            imgSrc={greekSaladImg}
            label="Greek salad"
            price="12.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
          />
          <SpecialsCard
            imgSrc={greekSaladImg}
            label="Greek salad"
            price="12.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
          />
          <SpecialsCard
            imgSrc={greekSaladImg}
            label="Greek salad"
            price="12.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
          />
        </div>
      </div>
    </section>
  );
}

export default Specials;
