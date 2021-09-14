import "./App.css";
import React, { Suspense } from "react";
const Table = React.lazy(() => import("./components/TableComponent/Table"));

function App() {
  return (
    // Table to show students data
    <div>
      <Suspense fallback={<div id="spinnerHolder"><div id="spinner"></div></div>}>
        <Table />
      </Suspense>
    </div>
  );
}

export default App;
