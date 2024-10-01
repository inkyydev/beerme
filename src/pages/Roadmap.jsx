import beerRoadmap from "../Assets/roadmap-beer.svg";

const ROADMAP = [
  {
    leftSide: [
      {
        year: "Q1 2024",
        title: "Launch and Initial Token Distribution",
        list: [
          "Token Launch",
          "Public Sale",
          "Community Building",
          "Partnership Announcements",
        ],
      },
      {
        year: "Q4 2024",
        title: "Expansion of Partnerships within the Beer Industry",
        list: [
          "Partnership Expansion",
          "Merchant Adoption",
          "Event Sponsorships",
          "",
        ],
      },
    ],
    rightSide: [
      {
        year: "Q2 2024",
        title: "Listing on Major Cryptocurrency Exchanges",
        list: [
          "Exchange Listings",
          "Liquidity Pool Creation",
          "Marketing Blitz",
          "Community Events",
        ],
      },
      {
        year: "Q3 2024",
        title: "Development of MemCoin Mobile App and User Platform",
        list: [
          "App Development",
          "Beta Testing",
          "Platform Features",
          "User Feedback Integration",
        ],
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="container">
        <div className="section-heading text-center">
          <h2 data-aos="fade-up">Roadmap</h2>
          <p data-aos="fade-up">
            Join us on our journey to revolutionize the beer industry with
            MemCoin. Here’s our roadmap with detailed milestones for each stage:
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            {ROADMAP.map((curr, index) => (
              <div className="left-side-wrapper" key={index}>
                {curr.leftSide.map((item, index) => (
                  <div
                    className="roadmap-single"
                    data-aos="fade-right"
                    key={index}
                  >
                    <h5>{item.year}</h5>
                    <h4>{item.title}</h4>
                    <ul>
                      {item.list.map((currList, index) => (
                        <li key={index}>{currList}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="col-12 col-md-4">
            <div className="roadmap-beer text-center">
              <img src={beerRoadmap} alt="beer" data-aos="zoom-in" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            {ROADMAP.map((curr, index) => (
              <div className="left-side-wrapper" key={index}>
                {curr.rightSide.map((item, index) => (
                  <div
                    className="roadmap-single"
                    data-aos="fade-left"
                    key={index}
                  >
                    <h5>{item.year}</h5>
                    <h4>{item.title}</h4>
                    <ul>
                      {item.list.map((currList, index) => (
                        <li key={index}>{currList}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
