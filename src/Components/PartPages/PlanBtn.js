import { Button } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useContentHook from "../../hooks/useContentHook";
import { useSelector } from "react-redux";
  
const PlanBtn = (props) => {
  const navigate = useNavigate();
  const  globalVars  = useSelector((state) => state.globalVars);
  const { keycloak } = useKeycloak();
  const [textBtn, setTextBtn] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [isContact, setIsContact] = useState(true);
  const { getContentText } = useContentHook();

  const goToLoIn = () => {
    keycloak.login();
  };

  const goToContactForm = () => {
    navigate("/contact-us");
  };

  const updateBtnContentHandle = (text, isDisable, isConnect = true) => {
    setTextBtn(text);
    setBtnDisable(isDisable);
    setIsContact(isConnect);
  };
  useEffect(() => {
    globalVars?.token?.Authorization === "Bearer undefined"
      ? props.type === "free"
        ? updateBtnContentHandle("plan_btnPlans_logIn", false, false)
        : updateBtnContentHandle("plan_btnPlans_contact", false, true)
      : props.type === "free"
      ? props.isFreePlan
        ? updateBtnContentHandle("plan_btnPlans_yourPlan", true)
        : updateBtnContentHandle("plan_btnPlans_contact", false)
      : !props.isFreePlan
      ? updateBtnContentHandle("plan_btnPlans_yourPlan", true)
      : updateBtnContentHandle("plan_btnPlans_contact", false);
  }, [globalVars?.token?.Authorization, props]);

  return (
    <Button
      fullWidth
      disabled={btnDisable}
      sx={btnStyle}
      variant={props.type === "free" ? "outlined" : "contained"}
      onClick={isContact ? goToContactForm : goToLoIn}
    >
      {getContentText(textBtn)}
    </Button>
  );
};

export default PlanBtn;

const btnStyle = {
  boxShadow: 0,
  textTransform: "capitalize",
};
