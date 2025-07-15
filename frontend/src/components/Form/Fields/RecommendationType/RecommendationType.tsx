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
    <div className="mb-6">
      <h3 className="text-base font-semibold text-rd-primary mb-4" tabIndex={0}>
        Tipo de Recomendação:
      </h3>
      <div className="space-y-3">
        {options.map(({ label, value }, index) => (
          <Checkbox
            key={index}
            label={label}
            data-testid={value}
            type="radio"
            id={value}
            name="recommendationType"
            value={value}
            checked={selectedRecommendationType === value}
            onChange={() => onRecommendationTypeChange(value)}
            className="accent-rd-highlight mt-0.5"
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendationType;
