import { Typography, Stack, Box } from "@mui/material";
const Notes = (props) => {
  return (
    props.value && (
      <Stack direction="row" sx={{ py: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" } }}
        >
          {props.title}
          <Box component="span" sx={{ pl: 2 }}>
            :
          </Box>
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          sx={{
            px: 2,
            fontWeight: "800",
            fontSize: { xs: "1.1rem", md: "1.5rem" },
          }}
        >
          {props.value || 0}
        </Typography>
      </Stack>
    )
  );
};

export default Notes;
