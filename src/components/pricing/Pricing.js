import React from "react";

const Pricing = () => {
  return (
    <section className="home-pricing-section p-tb-100">
      <div className="container">
        <div className="section-title">
          <h2>Our Reasonable Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>

        <div className="home-pricing-content">
          <div className="home-pricing-category">
            <table>
              <thead>
                <tr className="orange-gradient">
                  <th className="t-align-left">Pricing list</th>
                  <th>Business main</th>
                  <th>Householder</th>
                  <th>Freelancer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Technical support over IRC
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Control payout timing
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Automate evidence submission
                  </td>
                  <td>
                    <span className="price-availability availability-blue">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-blue">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-blue">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Collaboration notes
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Transparent payouts
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-light">
                      <i className="bx bx-x"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    24×7 support
                  </td>
                  <td>
                    <span className="price-availability availability-green">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-green">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-green">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Cognitive Management
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="price-availability availability-orange-dark">
                      <i className="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
