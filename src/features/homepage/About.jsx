import { useEffect, useState } from "react";
import image1 from "../../assets/Mario and Adrian A.jpg";
import image2 from "../../assets/Mario and Adrian b.jpg";

function About() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".about");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75)
          setIsInView(true);
        if (!entry.isIntersecting && entry.intersectionRatio <= 0.25)
          setIsInView(false);
      },
      { threshold: [0.25, 0.75] }
    );

    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return (
    <section className={`about ${isInView ? "isInView" : ""}`}>
      <div className="row">
        <div className="left-panel">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </div>
        <div className="right-panel">
          <img src={image2} alt="Mario and Adrian" />
          <img src={image1} alt="Mario and Adrian" />
        </div>
      </div>
    </section>
  );
}

export default About;
