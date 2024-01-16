import "../../pages/Home.css";

import { Ri24HoursFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";

function ServiceSection() {
  return (
    <section className="section-services">
      <div className="container">
        <h2 className="heading-secondary popular-heading">Our Services</h2>
        <p className="services-subtitle">
          Explore the exceptional services we offer to make your vacation
          unforgettable.
        </p>
        <div className="services-cards">
          <div className="service-card">
            <p className="service-icon">
              <LuPackageOpen />
            </p>
            <p className="service-name">Customized Packages</p>
          </div>

          <div className="service-card">
            <p className="service-icon">
              <Ri24HoursFill />
            </p>
            <p className="service-name">24 Hours support</p>
          </div>

          <div className="service-card">
            <p className="service-icon">
              <RiCustomerService2Fill />
            </p>
            <p className="service-name">Quality Service</p>
          </div>

          <div className="service-card">
            <p className="service-icon">
              <RiSecurePaymentLine />
            </p>
            <p className="service-name">Secure Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
