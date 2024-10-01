import Button from "../components/Button";
import Countdown from "../components/Countdown";

import lotteryImg from "../Assets/lottery-img.png";

export default function Lottery() {
  const targetDate = "September 15, 2024";

  return (
    <>
      <section id="lottery">
        <div className="container">
          <div className="lottery-wrapper">
            <div className="lottery-img">
              <img src={lotteryImg} alt="lottery" />
            </div>
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="lottery-content">
                  <h3 data-aos="fade-up">Lottery</h3>
                  <h2 data-aos="fade-up">$52,365</h2>
                  <div className="buy-ticket" data-aos="fade-up">
                    <Button
                      title="Buy Ticket"
                      href="#"
                      className="btn-yellow"
                    />
                    <h5>Get your tickets now!</h5>
                  </div>
                  <div className="next-draw" data-aos="fade-up">
                    <p>Next Draw</p>
                    <div className="draw-countdown">
                      <Countdown targetDate={targetDate} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
