import ReusableTable from "../Components/Reusable/ReusableTable";
import { useNavigate } from "react-router-dom";

const Summary = () => {
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
      <ReusableTable
        data={jobDataRes}
        editHandle={() => navigate("/edit-job")}
      />
    </>
  );
};

export default Summary;
