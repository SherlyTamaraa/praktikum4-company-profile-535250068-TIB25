
import { perfumes } from "../../data/perfumes";
import PerfumeCard from "../../components/PerfumeCard";

export default function CollectionPage() {
  return (
    <div className="home-page">
      <section className="collection-header">
        <p className="eyebrow">FIND YOUR EVERYDAY SCENT</p>
        <h1>Our collection.</h1>
        <p>Little scents for different moods and moments.</p>
      </section>

      <section className="favorite-grid collection-grid">
        {perfumes.map((perfume) => (
          <PerfumeCard
            key={perfume.slug}
            perfume={perfume}
          />
        ))}
      </section>
    </div>
  );
}
