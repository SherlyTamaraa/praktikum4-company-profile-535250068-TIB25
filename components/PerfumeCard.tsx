import Image from "next/image";
import Link from "next/link";
import type { Perfume } from "../data/perfumes";

type PerfumeCardProps = {
  perfume: Perfume;
};

export default function PerfumeCard({
  perfume,
}: PerfumeCardProps) {
  return (
    <Link
      href={`/collection/${perfume.slug}`}
      className="favorite-card"
    >
      <div className={`product-image ${perfume.color}`}>
        <Image
          src={`/${perfume.slug}.jpg`}
          alt={`${perfume.name} perfume`}
          fill
          unoptimized
          sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3>{perfume.name}</h3>
      <p>{perfume.notes}</p>
    </Link>
  );
}
