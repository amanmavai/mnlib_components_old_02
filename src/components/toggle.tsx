import * as React from "react";
export function Toggle() {
  const [checked, setChecked] = React.useState(false);
  return (
    <input
      type="checkbox"
      className="tw-toggle tw-toggle-accent"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}
