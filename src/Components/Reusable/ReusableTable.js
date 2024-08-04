import { useEffect, useState } from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import {Card, TableHead,TableRow,TableCell ,styled ,TableBody ,Table} from "@mui/material";
import DesBtn from "../Inputs/DesBtn";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    textAlight : "center"
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReusableTable({ data , editHandle}) {
  const [tableTitlesHeaderArr, setTableTitlesHeaderArr] = useState([]);

  useEffect(() => {
    let titleTableData = [];
    if (data && data[1]) {
      for (const property in data[1]) {
        titleTableData.push(property);
      }
    }
    setTableTitlesHeaderArr(titleTableData);
  }, [data]);

  return (
    <Card sx={{p:2}}>
      <Table sx={{ minWidth: "min-content" , borderRadius : 1 , overflow : "hidden"}} >
        <TableHead>
          <TableRow>
            {tableTitlesHeaderArr?.map((el) => (
              <StyledTableCell align="center" key={el}>{el}</StyledTableCell>
            ))}
            <StyledTableCell align="center">control</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow key={row.name}>
              {tableTitlesHeaderArr?.map((item) => (
                <StyledTableCell align="center" component="td" scope="row">
                  {row[item]}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center" component="td" scope="row">
                <DesBtn>
                  <AnalyticsOutlinedIcon text={"Show"} />
                </DesBtn>
                <DesBtn fun={editHandle} text={"Edit"}>
                  <EditOutlinedIcon />
                </DesBtn>
                <DesBtn>
                  <DeleteOutlineOutlinedIcon text={"Delete"} />
                </DesBtn>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
