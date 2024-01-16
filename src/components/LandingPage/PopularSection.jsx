import "../../pages/Home.css";


// Popular Hotels

import hotel from "../../assets/hotels/hotel-1.jpg";
import hotel2 from "../../assets/hotels/hotel-2.jpg";
import hotel3 from "../../assets/hotels/hotel-3.jpg";
import hotel4 from "../../assets/hotels/hotel-4.jpg";
import hotel5 from "../../assets/hotels/hotel-5.jpg";

function PopularSection() {
  return (
    
      <section className="section-popular">
        <div className="container">
          <h2 className="heading-secondary popular-heading">
            Our Most Popular Selections
          </h2>
          <div className="popular-hotels">
            <div className="popular-hotel-data">
              <img src={hotel} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Ice Hotel</p>
                <p className="hotel-location">Athiriver, Kajiado</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>
            <div className="popular-hotel-data">
              <img src={hotel2} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Gates Hotel</p>
                <p className="hotel-location">Kitengela, Kajiado</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>
            <div className="popular-hotel-data">
              <img src={hotel4} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Sarova Hotel</p>
                <p className="hotel-location">Kinoo, Kiambu</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>

            <div className="popular-hotel-data">
              <img src={hotel5} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Ice Hotel</p>
                <p className="hotel-location">Athiriver, Kajiado</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>
            <div className="popular-hotel-data">
              <img src={hotel2} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Gates Hotel</p>
                <p className="hotel-location">Kitengela, Kajiado</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>
            <div className="popular-hotel-data">
              <img src={hotel3} alt="hotel one image" />
              <div className="hotel-text">
                <p className="hotel-name">Sarova Hotel</p>
                <p className="hotel-location">Kinoo, Kiambu</p>
                <p className="hotel-price">$500 Per Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default PopularSection;
