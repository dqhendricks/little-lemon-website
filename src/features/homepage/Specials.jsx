import Button from "../../components/Button.jsx";
import SpecialsCard from "../../components/SpecialsCard.jsx";

import greekSaladImg from "../../assets/greek salad.jpg";
import bruchettaImg from "../../assets/bruchetta.jpg";
import lemonDessertImg from "../../assets/lemon dessert.jpg";

const specialsData = [
    {
        imgSrc: greekSaladImg,
        label: "Greek salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        imgSrc: bruchettaImg,
        label: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        imgSrc: lemonDessertImg,
        label: "Lemon dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

function Specials() {
  return (
    <section className="row">
      <div className="specials">
        <header>
          <h2>This weeks specials!</h2>
          <Button className="">Online Menu</Button>
        </header>
        <div className="items">
            { specialsData.map((itemProps) => <SpecialsCard key={itemProps.label} {...itemProps } />) }
        </div>
      </div>
    </section>
  );
}

export default Specials;
