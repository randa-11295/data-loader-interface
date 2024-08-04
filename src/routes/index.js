import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../Pages/Home";
import SummaryPage from "../Pages/Summary";
import OutputPage from "../Pages/Output";
import JobsPage from "../Pages/Jobs";
import AddJobPage from "../Pages/AddJob";

export const AppRouter = () => {



  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />}>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/add-job" element={<AddJobPage />} />

          {/* <Route
            path="/Keys"
            element={
              <PrivateRoute>
                <Keys />
              </PrivateRoute>
            }
          /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
