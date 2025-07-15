import Checkbox from "../../../shared/Checkbox";

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
      ? selectedFeatures.filter((feat) => feat !== feature)
      : [...selectedFeatures, feature];

    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-rd-primary mb-4" tabIndex={0}>
        Funcionalidades:
      </h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index}>
            <Checkbox
              label={feature}
              id={feature}
              value={feature}
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="accent-rd-highlight mt-0.5"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
