import React, { useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { Columns } from "../DataComponents/columns";
import { Student_Data } from "../DataComponents/student_data";
import { ColumnFilter } from "../FilterComponents/ColumnFilter";

// Table styling
import "./Table.css";

const Table = () => {
  // Data of all the students
  const student_data = useMemo(() => Student_Data, []);

  // Format of column and its header value
  const columns = useMemo(() => Columns, []);

  // Default values for every columns
  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter };
  }, []);

  // Instance of Table
  const tableInstance = useTable(
    { columns, data: student_data, defaultColumn },

    // Use to filter the contents columnwise
    useFilters,
    useSortBy
  );

  // Storing values of table instance for showing rows and columns
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // Table
    <table {...getTableProps()}>
      {/* Table Header */}
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th>
                <div id="headerContent">
                  <div>
                    {/* Showing header contents */}
                    {column.render("Header")}

                    {/* Logic to show filter option */}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </div>

                  {/* Showing the sorting methods */}
                  <div
                    id="sortingIcon"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className={`fas fa-sort-down`}></i>
                      ) : (
                        <i className={`fas fa-sort-up`}></i>
                      )
                    ) : (
                      <i class="fas fa-sort"></i>
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* Table Body */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                // Showing table body contents
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;