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
import EditJobPage from "../Pages/EditJob";
import ConnectorSettingPage from "../Pages/ConnectorSetting";
import GlobalSettingPage from "../Pages/GlobalSetting";

export const AppRouter = () => {



  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />}>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/add-job" element={<EditJobPage />} />
          <Route path="/edit-job/:id" element={<EditJobPage />} />
          <Route path="/show-job/:id" element={<EditJobPage isShow />} />
          <Route path="/global-setting" element={<GlobalSettingPage />} />
          <Route path="/connector-setting" element={<ConnectorSettingPage />} />

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
