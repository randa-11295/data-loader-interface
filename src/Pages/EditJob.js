import { Card, Stack, Button } from "@mui/material";
import InputTextCustom from "../Components/Inputs/InputTextCustom";
import { useFormik } from "formik";
// import LoadBtn from "../Components/Inputs/LoadBtn";

const EditJob = () => {
  const formik = useFormik({
    initialValues: {
        last_status_date: "",
        last_status: "",
        destination: "",
        source: "",
        logs: "",
    },
    // validationSchema: logInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Card component="form" sx={{ p: 2 }} onSubmit={formik.handleSubmit}>
      <InputTextCustom name="source" label="Source" formik={formik} />
      <InputTextCustom name="destination" label="Destination" formik={formik} />
      <InputTextCustom name="last_status" label="Last Status" formik={formik} />
      <InputTextCustom name="last_status_date" label="Last Status Date" formik={formik} />
      <InputTextCustom
        name="Logs"
        label="Logs"
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
          Edit
        </Button>
        {/* <LoadBtn loading={loading} /> */}
      </Stack>
    </Card>
  );
};

export default EditJob;
