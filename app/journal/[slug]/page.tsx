import Link from "next/link";
import { notFound } from "next/navigation";
import { journal } from "../../../data/journal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journal.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const article = journal.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="home-page">
      <article className="journal-detail">
        <div className={`journal-detail-top ${article.color}`}>
          <p className="eyebrow">{article.category}</p>
          <p>{article.date}</p>
        </div>

        <div className="journal-detail-content">
          <Link href="/journal" className="text-link">
            ← Back to journal
          </Link>

          <h1>{article.title}</h1>
          <p className="journal-detail-intro">
            {article.excerpt}
          </p>

          <div className="journal-body">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
