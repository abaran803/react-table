import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

// Function for slider filter
export const SliderColumnFilter = ({ column }) => {

  // Filter values to show item
  const { filterValue, setFilter } = column;

  // Value to change instantly to change slider
  const [value, setValue] = useState(filterValue);

  // Perform action after a delay to avoid overhead for large data
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 800);

  return (
    <span>

      {/* Range slider to select value (from 51 to 100) */}
      Filter:{" "}
      <input
        type="range"
        value={value || "51"}
        min="51"
        max="100"
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event.target.value)
        }}
      />
      
    </span>
  );
};
