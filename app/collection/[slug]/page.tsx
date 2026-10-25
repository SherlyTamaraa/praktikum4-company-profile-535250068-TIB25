
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { perfumes } from "../../../data/perfumes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return perfumes.map((perfume) => ({
    slug: perfume.slug,
  }));
}

export default async function PerfumeDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const perfume = perfumes.find(
    (item) => item.slug === slug
  );

  if (!perfume) {
    notFound();
  }

  return (
    <div className="home-page">
      <Link href="/collection" className="text-link">
        ← Back to collection
      </Link>

      <section className="detail-layout">
        <div className={`detail-image ${perfume.color}`}>
          <Image
            src={`/${perfume.slug}.jpg`}
            alt={`${perfume.name} perfume`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="detail-info">
          <p className="eyebrow">NUVA FRAGRANCE STUDIO</p>
          <h1>{perfume.name}</h1>

          <p className="detail-notes">{perfume.notes}</p>

          <p className="detail-description">
            {perfume.description}
          </p>

          <div className="notes-box">
            <div>
              <span>TOP NOTES</span>
              <p>{perfume.topNotes}</p>
            </div>

            <div>
              <span>HEART NOTES</span>
              <p>{perfume.heartNotes}</p>
            </div>

            <div>
              <span>BASE NOTES</span>
              <p>{perfume.baseNotes}</p>
            </div>
          </div>

          <Link href="/collection" className="button">
            Explore other scents →
          </Link>
        </div>
      </section>
    </div>
  );
}
