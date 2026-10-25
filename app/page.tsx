import Image from "next/image";
import Link from "next/link";
import { perfumes } from "../data/perfumes";
import PerfumeCard from "../components/PerfumeCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">A FRAGRANCE STUDIO</p>

          <h1>
            Scents for
            <br />
            brighter days.
          </h1>

          <p className="hero-description">
            Little fragrances inspired by everyday moments,
            little joys, and the beauty around us.
          </p>

          <Link href="/collection" className="button">
            Explore collection →
          </Link>
        </div>


        <div className="hero-image">
          <Image
            src="/peach-day.jpg"
            alt="NUVA Peach Day perfume"
            fill
            priority
            unoptimized
            sizes="(max-width: 650px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="favorites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW GOOD THINGS</p>
            <h2>Our favorites</h2>
          </div>

          <Link href="/collection" className="text-link">
            View all →
          </Link>
        </div>

        <div className="favorite-grid">
          {perfumes.slice(0, 3).map((perfume) => (
            <PerfumeCard
              key={perfume.slug}
              perfume={perfume}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
