import TestimonialsCard from "../../components/TestimonialsCard.jsx";
import image1 from "../../assets/testimonial1.jpg";
import image2 from "../../assets/testimonial2.webp";
import image3 from "../../assets/testimonial3.jpg";
import image4 from "../../assets/testimonial4.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="row">
        <header>
          <h3>Kind Words From Our Guests</h3>
        </header>
        <div className="items">
          <TestimonialsCard
            imgSrc={image1}
            name="Lisa Nguyen"
            saying="Fresh ingredients, bold flavors, and impeccable service. I can't wait to come back!"
          />
          <TestimonialsCard
            imgSrc={image2}
            name="Steve Dalva"
            saying="Authentic dishes prepared to perfection. Every bite was a delight!"
          />
          <TestimonialsCard
            imgSrc={image3}
            name="Kate Masterson"
            saying="The food was to die for, and the dessert was the perfect sweet ending!"
          />
          <TestimonialsCard
            imgSrc={image4}
            name="Marc Ellison"
            saying="Delicious food with generous portions, and the staff made us feel like family!"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
