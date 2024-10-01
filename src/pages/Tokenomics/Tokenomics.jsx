import smallBeer from "../../Assets/small-beer.svg";
import chartTokenomics from "../../Assets/chart.svg";

import ChartInfo from "./ChartInfo";
import house from "../../Assets/house-img.png";

export default function Tokenomics() {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="tokenomics-content-col">
                <div className="tokenomics-heading" data-aos="fade-right">
                  <img src={smallBeer} alt="Beer" />
                  <h2>Tokenomics</h2>
                </div>
                <p data-aos="fade-right">
                  MemCoin is designed to revolutionize the beer industry with
                  blockchain technology. Here’s a detailed breakdown of our
                  token distribution and usage
                </p>
                <div className="tokenomics-chart-info" data-aos="fade-right">
                  <ChartInfo
                    title="Public Sale"
                    description=" 50% (500,000,000 MemCoins) - For general public purchase."
                  />
                  <ChartInfo
                    title="Development"
                    description="20% (200,000,000 MemCoins) - To fund ongoing development projects."
                  />
                  <ChartInfo
                    title="Marketing"
                    description="10% (100,000,000 MemCoins) - For advertising and promotional activities."
                  />
                  <ChartInfo
                    title="Team"
                    description="10% (100,000,000 MemCoins) - Reserved for the team behind MemCoin."
                  />
                  <ChartInfo
                    title="Future Reserves"
                    description="10% (100,000,000 MemCoins) - Held for future opportunities and partnerships."
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="tokenomics-chart" data-aos="fade-left">
                <img src={chartTokenomics} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="house_tokenomics">
        <img src={house} alt="" />
      </section>
    </>
  );
}
