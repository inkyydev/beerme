import token1 from "../Assets/token-1.svg";
import token2 from "../Assets/token-2.svg";
import token3 from "../Assets/token-3.svg";
import token4 from "../Assets/token-4.svg";

export default function InfoSection() {
  return (
    <section id="info_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="info-single" data-aos="fade-up">
                  <h5>Total numbers of holders</h5>
                  <h2>15,000,000</h2>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="info-single" data-aos="fade-up">
                  <h5>Total Volume</h5>
                  <h2>358,000</h2>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="info-single" data-aos="fade-up">
                  <h5>Market Cap</h5>
                  <h2>28,000</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="tokens-wrapper">
              <div className="token-single" data-aos="fade-in">
                <img src={token1} alt="" />
              </div>
              <div className="token-single" data-aos="fade-in">
                <img src={token2} alt="" />
              </div>
              <div className="token-single" data-aos="fade-in">
                <img src={token3} alt="" />
              </div>
              <div className="token-single" data-aos="fade-in">
                <img src={token4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
