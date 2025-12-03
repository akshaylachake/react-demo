import { useState } from "react";

export default function CheckboxGroup() {
  const [checks, setChecks] = useState({
    amazon: false,
    flipkart: false,
    myntra: false,
  });

  const allSelected = Object.values(checks).every(Boolean);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setChecks({
      amazon: checked,
      flipkart: checked,
      myntra: checked,
    });
  };

  const handleSingle = (e) => {
    const { id, checked } = e.target;
    setChecks((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Select All */}
      <div>
        <input
          type="checkbox"
          id="all"
          checked={allSelected}
          onChange={handleSelectAll}
        />
        <label htmlFor="all">Select All</label>
      </div>

      {/* Amazon */}
      <div>
        <input
          type="checkbox"
          id="amazon"
          checked={checks.amazon}
          onChange={handleSingle}
        />
        <label htmlFor="amazon">Amazon</label>
      </div>

      {/* Flipkart */}
      <div>
        <input
          type="checkbox"
          id="flipkart"
          checked={checks.flipkart}
          onChange={handleSingle}
        />
        <label htmlFor="flipkart">Flipkart</label>
      </div>

      {/* Myntra */}
      <div>
        <input
          type="checkbox"
          id="myntra"
          checked={checks.myntra}
          onChange={handleSingle}
        />
        <label htmlFor="myntra">Myntra</label>
      </div>
    </div>
  );
}
