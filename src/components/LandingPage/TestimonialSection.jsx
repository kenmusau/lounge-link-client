import "./Home.css";
import avatar1 from "../../assets/avatar/avatar1.jpg";
import avatar2 from "../../assets/avatar/avatar2.jpg";
import avatar3 from "../../assets/avatar/avatar3.jpg";

function TestimonialSection() {
  return (
    <section className="section-testimonials">
      <div className="container">
        <h2 className="heading-secondary testimonial-heading">
          What Our Customers are Saying
        </h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={avatar1} alt=" image of a man smiling" />
            <div className="testimony-content">
              <p className="testimony-title">Unforgettable Experience</p>
              <blockquote className="testimony">
                Booking through this platform made our vacation truly
                unforgettable. The room we rented exceeded our expectations in
                terms of cleanliness and comfort. The seamless process was a
                game-changer.
              </blockquote>
              <p className="person-name">~ Elvis Michaelson</p>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={avatar2} alt=" image of a man smiling" />
            <div className="testimony-content">
              <p className="testimony-title">
                Effortless Booking, Amazing Stay
              </p>
              <blockquote className="testimony">
                I was initially skeptical, but this platform proved me wrong.
                The booking process was so smooth, and the stay was beyond
                amazing. The variety of options and the detailed information I
                highly recommend it!
              </blockquote>
              <p className="person-name">~ Elvis Michaelson</p>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={avatar3} alt=" image of a man smiling" />
            <div className="testimony-content">
              <p className="testimony-title">Customer Service Excellence</p>
              <blockquote className="testimony">
                What sets this platform apart is the exceptional customer
                service. Any queries or concerns were addressed promptly, making
                me feel valued as a customer. The personalized recommendations.
              </blockquote>
              <p className="person-name">~ Elvis Michaelson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
