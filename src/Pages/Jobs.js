import { Box } from "@mui/material";
import ReusableTable from "../Components/Reusable/ReusableTable";

const Jobs = () => {
  const jobDataRes = [
    { name: "job1", activation: "Active", lastRun: "1/12/2024" },
    { name: "job2", activation: "not Active", lastRun: "1/12/2024" },
    { name: "job3", activation: "pending ", lastRun: "1/12/2024" },
    { name: "job4", activation: "Active", lastRun: "1/12/2024" },
    { name: "job5", activation: "Active", lastRun: "1/12/2024" },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <ReusableTable data={jobDataRes} />
    </Box>
  );
};

export default Jobs;
