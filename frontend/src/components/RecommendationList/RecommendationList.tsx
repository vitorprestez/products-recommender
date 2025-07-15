import { Product } from "../../types/product";

interface RecommendationListProps {
  recommendations: Product[];
}

function RecommendationList({ recommendations }: RecommendationListProps) {
  return (
    <section aria-label="Lista de Recomendações" className="w-full">
      <h2 className="text-xl font-semibold mb-4" tabIndex={0}>
        Lista de Recomendações:
      </h2>

      {recommendations.length === 0 ? (
        <p tabIndex={0}>Nenhuma recomendação encontrada.</p>
      ) : (
        <ul className="space-y-1">
          {recommendations.map((recommendation, index) => (
            <li key={recommendation.id || index} tabIndex={0}>
              {recommendation.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecommendationList;
