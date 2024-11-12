import React, { useEffect, lazy, Suspense } from "react";

// Functions
import prepareApp from "../../../../utils/lib/prepareApp.js";

// Components
import LoaderPage from "../../components/LoaderPage.jsx";
const Middleware = lazy(() => import("../../middleware/Middleware.js"));

const App = () => {
  useEffect(() => {
    prepareApp();
  }, []);

  return (
    <>
      <Suspense fallback={<LoaderPage />}>
        <Middleware />
      </Suspense>
    </>
  );
};

export default App;
