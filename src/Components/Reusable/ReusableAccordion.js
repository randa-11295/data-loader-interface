import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ReusableAccordion =(props)=>{
    return (
        <Accordion sx={{ background: "none", color: "white", boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
         {props.children }
        </AccordionDetails>
      </Accordion>
    )
}

export default ReusableAccordion
