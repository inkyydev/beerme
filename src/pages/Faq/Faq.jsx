import AccordionFaq from "../Faq/AccordionFaq";

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-parent">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2 data-aos="fade-in">
                Frequently <br /> asked questions
              </h2>
            </div>
            <div className="col-12 col-md-7" data-aos="fade-left">
              <AccordionFaq />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
