// Preferences.js

import Checkbox from "../../shared/Checkbox";

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
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={preference}
              checked={selectedPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="text-blue-500"
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
