import Checkbox from "../../shared/Checkbox";

interface FeaturesProps {
  features: string[];
  selectedFeatures: string[];
  onFeatureChange: (selected: string[]) => void;
}

function Features({
  features,
  selectedFeatures = [],
  onFeatureChange,
}: FeaturesProps) {
  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={feature}
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="text-green-500"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
