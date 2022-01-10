import React from "react";

const Counter = () => {
  return (
    <div>
      <section class="counter-section pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <h2>We always try to evaluate customers Values</h2>
          </div>

          <div class="counter-content">
            <div class="counter-item">
              <h3>
                <span class="counter">70</span>
                <span class="counter-text-lg">+</span>
              </h3>
              <p>Contributors</p>
            </div>

            <div class="counter-item">
              <h3>
                <span class="counter">40</span>
                <span class="counter-text-sm">K</span>
              </h3>
              <p>Feedback</p>
              <div class="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="counter-item">
              <h3>
                <span class="counter">1000</span>
                <span class="counter-text-sm">k</span>
              </h3>
              <p>Downloaded</p>
              <div class="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="counter-item">
              <h3>
                <span class="counter">590</span>
                <span class="counter-text-lg">+</span>
              </h3>
              <p>Workers</p>
              <div class="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
