import { Tabs, Tab, Box } from "@mui/material";

export default function TabsReusable(props) {
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={props.val}
        onChange={(e, value) => {
          props.changeHandel(props.arr.find((el) => el.title === value));
        }}
      >
        {props?.arr?.map((el, indx) => (
          <Tab
            sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 } }}
            key={el?.title + indx}
            label={el?.title}
            value={el?.title}
          />
        ))}
        
      </Tabs>
    </Box>
  );
}
