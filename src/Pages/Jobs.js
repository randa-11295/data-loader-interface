import ReusableTable from "../Components/Reusable/ReusableTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Jobs = () => {
  const navigate = useNavigate();
  const jobDataRes = [
    { name: "job1", activation: "Active", lastRun: "1/12/2024" },
    { name: "job2", activation: "not Active", lastRun: "1/12/2024" },
    { name: "job3", activation: "pending ", lastRun: "1/12/2024" },
    { name: "job4", activation: "Active", lastRun: "1/12/2024" },
    { name: "job5", activation: "Active", lastRun: "1/12/2024" },
  ];

  return (
    <>
      <Button
        sx={{ mb: 3 }}
        variant="contained"
        onClick={() => navigate("/add-job")}
      >
        {" "}
        add new job{" "}
      </Button>
      <ReusableTable data={jobDataRes} />
    </>
  );
};

export default Jobs;
