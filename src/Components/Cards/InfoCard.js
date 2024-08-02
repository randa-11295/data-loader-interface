import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Title from "../Text/Title";
import Stack from "@mui/material/Stack";

const InfoCard = (props) => {
  return (
    <Card sx={{ mb: 3, mt: 4 ,  p: 2 , }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          {props.icon}
          <Title  text={props.title} />
        </Stack>

        {props.action}
      </Stack>

      <Box sx={{pt : 2 , pb: 1}}>{props.content}</Box>

      {props.alert}
    </Card>
  );
};

export default InfoCard;
