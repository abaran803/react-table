import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

// Function for default filter
export const ColumnFilter = ({ column }) => {
  
  // Filter values to show item
  const { filterValue, setFilter } = column;

  // Value to change instantly to show in search box
  const [value, setValue] = useState(filterValue);

  // Perform action after a delay to avoid overhead for large data
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 800);

  return (
    <span>
      {/* Input lable and box */}
      Filter:{" "}
      <input
        value={value || ""}
        onChange={(event) => {
          setValue(event.target.value)
          onChange(event.target.value);
        }}
      />
    </span>
  );
};
