
export default function AboutPage() {
  return (
    <div className="home-page">
      <section className="about-simple">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h1>Little scents, everyday stories.</h1>

        <p className="about-description">
          NUVA is a fictional fragrance studio inspired by
          everyday moments, small joys, and the feeling of
          finding a scent that feels like you.
        </p>
      </section>

      <section className="about-values-simple">
        <article className="value-simple">
          <p className="eyebrow">01</p>
          <h3>Everyday</h3>
          <p>Fragrances made for the little moments in life.</p>
        </article>

        <article className="value-simple">
          <p className="eyebrow">02</p>
          <h3>Personal</h3>
          <p>A scent can express a mood without saying a word.</p>
        </article>

        <article className="value-simple">
          <p className="eyebrow">03</p>
          <h3>Simple</h3>
          <p>Enjoy fragrance without making it complicated.</p>
        </article>
      </section>
    </div>
  );
}
