import beers from "../Assets/multiple-beers.svg";

const BUY_LIST = [
  {
    title: "Set Up a Wallet",
    description: "Install a compatible cryptocurrency wallet like MetaMask.",
  },
  {
    title: "Fund Your Wallet",
    description:
      "Deposit Ethereum (ETH) or Binance Coin (BNB) into your wallet",
  },
  {
    title: "Visit an Exchange",
    description: "Go to Raydium, Jupiter, Dextools, or Dexscreener.",
  },
  {
    title: "Swap for MemCoin",
    description:
      "Use your ETH or BNB to purchase MemCoin simply enter the amount you wish",
  },
];

export default function HowToBuy() {
  return (
    <section id="how_to_buy">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6">
            <div className="buy-content">
              <h2 data-aos="fade-right">How to Buy MemCoin</h2>
              <p data-aos="fade-right">
                Getting your hands on MemCoin is easy! Follow these steps:
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={beers} alt="beers" data-aos="fade-left" />
          </div>
        </div>
        <div className="row">
          {BUY_LIST.map((list, index) => (
            <div
              className="col-12 col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
            >
              <div className="buy-single">
                <div className="buy-single__number">0{index + 1}</div>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
