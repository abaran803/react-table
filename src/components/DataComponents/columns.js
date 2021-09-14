import { SliderColumnFilter } from "../FilterComponents/SliderColumnFilter";

// Model for Column, value and its connection to data
export const Columns = [
  {

    // Header value
    Header: "Id",
    // Value of connected data name
    accessor: "id",
    // Disable the filter option
    disableFilters: true,

  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Final Year Marks",
    accessor: "marks_of_final_year",

    // Not default, but slider filter
    Filter: SliderColumnFilter,

  },
];
