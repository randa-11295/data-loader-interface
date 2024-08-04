import { Card, Stack, Button } from "@mui/material";
import InputTextCustom from "../Components/Inputs/InputTextCustom";
import { useFormik } from "formik";
// import LoadBtn from "../Components/Inputs/LoadBtn";

const AddJob = () => {
  const formik = useFormik({
    initialValues: {
      job_name: "",
      job_data: "",
    },
    // validationSchema: logInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Card component="form" sx={{ p: 2 }} onSubmit={formik.handleSubmit}>
      <InputTextCustom name="job_name" label="job name" formik={formik} />
      <InputTextCustom
        name="job_data"
        label="job data"
        formik={formik}
        multi
      />
      <Stack justifyContent="flex-end" direction="row">
        <Button
          variant="outlined"
          onClick={formik.handleReset}
          sx={{ mx: 2 }}
          onclick={formik.handleSubmit}
        >
          clear
        </Button>
        <Button
          variant="contained"
          sx={{ boxShadow: 0 }}
          onClick={formik.handleSubmit}
        >
          add
        </Button>
        {/* <LoadBtn loading={loading} /> */}
      </Stack>
    </Card>
  );
};

export default AddJob;
