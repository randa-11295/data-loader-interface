import { Card, Stack, Button } from "@mui/material";
import InputTextCustom from "../Components/Inputs/InputTextCustom";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditJob = (props) => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: { id: "", job_name: "", server_name: "", states: "" },
    // validationSchema: logInSchema,
    onSubmit: (values) => {
      id ? updateDataFetchHandle(values) : addNewDataFetchHandle(values);
    },
  });

  useEffect(() => {
    if (!id) return;
    axios
      .get("http://127.0.0.1:8090/api/collections/jobs/records/" + id)
      .then((res) => {
        formik.setValues(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateDataFetchHandle = (values) => {
    axios
      .patch("http://127.0.0.1:8090/api/collections/jobs/records/" + id, values)

      .then((res) => {
        alert("done");
      })
      .catch((err) => console.log(err));
  };

  const addNewDataFetchHandle = (values) => {
    axios
      .post("http://127.0.0.1:8090/api/collections/jobs/records", values)

      .then((res) => {
        alert("done");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card component="form" sx={{ p: 2 }} onSubmit={formik.handleSubmit}>
 
      <InputTextCustom
        disabled={props.isShow}
        name="job_name"
        label="job name"
        formik={formik}
      />
      <InputTextCustom
        disabled={props.isShow}
        name="server_name"
        label="server name"
        formik={formik}
      />
      {/* <InputTextCustom name="server_name" label="server_name" formik={formik} /> */}

      {!props.isShow && (
        <Stack justifyContent="flex-end" direction="row">
          <Button
            variant="outlined"
            onClick={formik.handleReset}
            sx={{ mx: 2 }}
          >
            clear
          </Button>
          <Button
            variant="contained"
            sx={{ boxShadow: 0 }}
            onClick={formik.handleSubmit}
          >
            Edit
          </Button>
          {/* <LoadBtn loading={loading} /> */}
        </Stack>
      )}
    </Card>
  );
};

export default EditJob;
