import ReusableTable from "../Components/Reusable/ReusableTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

const Jobs = ({ recordId }) => {
  const [record, setRecord] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log("record", record);
  //   console.log("loading", loading);
  //   console.log("error", error);
  // }, [error, loading, record]);

  const getAllJobsHandle = () => {
    axios
      .get("http://127.0.0.1:8090/api/collections/jobs/records")
      .then((res) => setRecord(res.data.items))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllJobsHandle();
  }, []);

  // useEffect(() => {
  //   axios
  //     // .delete("http://127.0.0.1:8090/api/collections/jobs/records/rs2ultvn2sw53pp")
  //     // .get("http://127.0.0.1:8090/api/collections/jobs/records/rs2ultvn2sw53pp")
  //     // .patch("http://127.0.0.1:8090/api/collections/jobs/records/rs2ultvn2sw53pp")
  //     // .POST("http://127.0.0.1:8090/api/collections/jobs/records")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const deleteHandle = (id) => {
 

    axios
      .delete("http://127.0.0.1:8090/api/collections/jobs/records/" + id)
      .then(() => getAllJobsHandle())
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();

  return (
    <>
      <Button
        sx={{ mb: 3 }}
        variant="contained"
        onClick={() => navigate("/add-job")}
      >
        add new job
      </Button>
      <ReusableTable
        data={record}
        deleteHandle={deleteHandle}
        editHandle={(id) => navigate("/edit-job/" + id)}
      />
    </>
  );
};

export default Jobs;
