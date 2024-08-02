import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import axios from "axios";
import LoadBtn from "../Inputs/LoadBtn";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckArea from "../Areas/CheckArea";
import InputTextCustom from "../Inputs/InputTextCustom";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInSchema } from "../../utils/vaildationShema";
import { loginHandel } from "../../Redux/sliceReducers/rejesterSlice";
import { showNotificationHandel } from "../../Redux/sliceReducers/notificationsSlice";
import { useNavigate } from "react-router-dom";
import Login from "./Welcome";
import useContentHook from "../../hooks/useContentHook";

const textStyle = {
  cursor: "pointer",
  display: "inline-block",
  borderBottom: 1,
  transition: ".3s",
  fontSize: ".8rem",
  "&:hover": {
    color: "primary.main",
  },
};

const login = {
  username: "yharby@cartologic.com",
  password: "testpass123",
};
const Rejecter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const globalVars  = useSelector((state) => state.globalVars);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getContentText } = useContentHook();
  const changeCheckedHandel = () => {
    const toggleChecked = !isChecked;
    setIsChecked(toggleChecked);
  };

  const formik = useFormik({
    initialValues: login,
    validationSchema: logInSchema,
    onSubmit: (values) => {
      setLoading(true);
      sendRequest(values);
    },
  });

  const sendRequest = (val) => {
    axios
      .post(`${globalVars.ApiUrl}secrets/v1/flow/login/`, val)
      .then((res) => {
        navigate("/");
        dispatch(loginHandel(res.data.access_token));
        saveToken(res.data.access_token);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        dispatch(
          showNotificationHandel({ msg: getContentText("account_errorMsg"), variant: "error" })
        );
      });
  };

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <Paper
      component="form"
      onSubmit={formik.handleSubmit}
      elevation={6}
      sx={{ width: { xs: "80%", sm: "370px" }, p: 2, borderRadius: "15px" }}
    >
      <CardContent>
        <InputTextCustom formik={formik} name="username" label="Email" />
        <InputTextCustom
          formik={formik}
          pass={true}
          name="password"
          label="Password"
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CheckArea checked={isChecked} fun={changeCheckedHandel} />
          <Typography variant="p" component="p" sx={textStyle}>
          {getContentText("account_forgetPassword")}
          </Typography>
        </Stack>
      </CardContent>
      <Login />
      <CardActions>
        <LoadBtn loading={loading} />
      </CardActions>
    </Paper>
  );
};

export default Rejecter;
