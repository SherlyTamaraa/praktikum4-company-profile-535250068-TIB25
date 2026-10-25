
export default function ContactPage() {
  return (
    <div className="home-page">
      <section className="contact-heading">
        <p className="eyebrow">SAY HELLO</p>
        <h1>Let&apos;s talk scents.</h1>
        <p>Have a question or simply want to say hello?</p>
      </section>

      <section className="contact-grid">
        <div className="contact-note">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>A little hello goes a long way.</h2>
          <p>
            We would love to hear your thoughts, questions,
            and fragrance stories.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span>EMAIL</span>
            <p>nuvafragrance@gmail.com</p>
          </div>

          <div className="contact-item">
            <span>INSTAGRAM</span>
            <p>@nuva.fragrance</p>
          </div>

          <div className="contact-item">
            <span>STUDIO</span>
            <p>Made for everyday moments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
