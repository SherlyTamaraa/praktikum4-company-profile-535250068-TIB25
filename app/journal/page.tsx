import Link from "next/link";
import { journal } from "../../data/journal";

export default function JournalPage() {
  return (
    <div className="home-page">
      <section className="journal-heading">
        <p className="eyebrow">NOTES FROM NUVA</p>
        <h1>The journal.</h1>
        <p>Little thoughts about fragrance and everyday life.</p>
      </section>

      <section className="journal-grid">
        {journal.map((article) => (
          <article className="journal-card" key={article.slug}>
            <div className={`journal-card-top ${article.color}`}>
              <p className="eyebrow">{article.category}</p>
            </div>

            <div className="journal-card-content">
              <p className="eyebrow">{article.date}</p>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>

              <Link
                href={`/journal/${article.slug}`}
                className="journal-read"
              >
                Read story →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
