import Checkbox from "../../../shared/Checkbox";

interface PreferenceProps {
  preferences: string[];
  selectedPreferences: string[];
  onPreferenceChange: (selected: string[]) => void;
}

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}: PreferenceProps) {
  const handlePreferenceChange = (preference: string) => {
    const updatedPreferences = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((pref) => pref !== preference)
      : [...selectedPreferences, preference];

    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-rd-primary mb-4" tabIndex={0}>
        Preferências:
      </h3>
      <ul className="space-y-3">
        {preferences.map((preference, index) => (
          <li key={index}>
            <Checkbox
              label={preference}
              id={preference}
              value={preference}
              checked={selectedPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="accent-rd-highlight mt-0.5"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
