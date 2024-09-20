import TestimonialsCard from "../../components/TestimonialsCard.jsx";
import image1 from "../../assets/testimonial1.jpg";
import image2 from "../../assets/testimonial2.jpg";
import image3 from "../../assets/testimonial3.jpg";
import image4 from "../../assets/testimonial4.jpg";

const testimonialData = [
    {
        imgSrc: image1,
        name: "Lisa Nguyen",
        comment: "Fresh ingredients, bold flavors, and impeccable service. I can't wait to come back!",
    },
    {
        imgSrc: image2,
        name: "Steve Dalva",
        comment: "Authentic dishes prepared to perfection. Every bite was a delight!",
    },
    {
        imgSrc: image3,
        name: "Kate Ross",
        comment: "The food was to die for, and the dessert was the perfect sweet ending!",
    },
    {
        imgSrc: image4,
        name: "Marc Ellison",
        comment: "Delicious food with generous portions, and the staff made us feel like family!",
    },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="row">
        <header>
          <h3>Kind Words From Our Guests</h3>
        </header>
        <div className="items">
            {testimonialData.map((itemProps) => <TestimonialsCard key={itemProps.name} {...itemProps} />) }
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
