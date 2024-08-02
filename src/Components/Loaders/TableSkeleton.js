import { Skeleton, TableCell } from "@mui/material";
import { v4 as uuid } from 'uuid';

const TableSkeleton = () => (
  <>
    {[1, 2, 3 , 4 ].map(()=>(
      <TableCell component="td" key={uuid()}>
        <Skeleton />
      </TableCell>
    ))}
  </>
);


export default TableSkeleton
