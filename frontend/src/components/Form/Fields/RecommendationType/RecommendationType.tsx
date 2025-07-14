import { RecommendationMode } from "../../../../types/recommendation";
import Checkbox from "../../../shared/Checkbox";

interface RecommendationTypeProps {
  onRecommendationTypeChange: (mode: RecommendationMode) => void;
  selectedRecommendationType: RecommendationMode;
}

const options = [
  { label: "Produto Único", value: RecommendationMode.SingleProduct },
  { label: "Múltiplos Produtos", value: RecommendationMode.MultipleProducts },
];

function RecommendationType({
  onRecommendationTypeChange,
  selectedRecommendationType = RecommendationMode.SingleProduct,
}: RecommendationTypeProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        {options.map(({ label, value }) => (
          <label key={value} htmlFor={value} className="flex items-center mr-4">
            <Checkbox
              data-testid={value}
              type="radio"
              id={value}
              name="recommendationType"
              value={value}
              checked={selectedRecommendationType === value}
              onChange={() => onRecommendationTypeChange(value)}
              className="mr-2"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RecommendationType;
