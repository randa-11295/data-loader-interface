import { Stack, Grid , Card , Skeleton} from "@mui/material";
import { staticLoadingArr } from "../../utils/StaticVariables";
import { v4 as uuid } from "uuid";

export default function SkeletonCardsMapServices() {
  return (
    <Grid container py={3} spacing={6}>
      {staticLoadingArr?.map((el, indx) => (
        <Grid item key={uuid()} xs={12} sm={6} lg={4} xl={3}>
          <Card sx={{p: 1.5 , borderRadius : "22px" , "& *" : {borderRadius : "5px" }}}>

          <Stack spacing={2} sx={{ p: 1 }}>
            <Skeleton variant="rectangular" width="100%" height={185}  />
            <Skeleton variant="h2" />
            <Skeleton variant="p" height={50} />
            <Stack spacing={2} direction="row">
              <Skeleton variant="rectangular" width={80} height={25} />
              <Skeleton variant="rectangular" width={80} height={25} />
            </Stack>
          </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
