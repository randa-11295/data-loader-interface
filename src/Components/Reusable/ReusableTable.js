import { useEffect, useState } from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import {
  Card,
  TableHead,
  TableRow,
  TableCell,
  styled,
  TableBody,
  Table,
} from "@mui/material";
import DesBtn from "../Inputs/DesBtn";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { v4 as uuidv4 } from "uuid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    textAlight: "center",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReusableTable(props) {
  const [tableTitlesHeaderArr, setTableTitlesHeaderArr] = useState([]);

  useEffect(() => {
    let titleTableData = [];
    if (props.data && props.data[1]) {
      for (const property in props.data[1]) {
        titleTableData.push(property);
      }
    }
    setTableTitlesHeaderArr(titleTableData);
  }, [props.data]);

  return (
    <Card sx={{ p: 2 }}>
      <Table
        sx={{ minWidth: "min-content", borderRadius: 1, overflow: "hidden" }}
      >
        <TableHead>
          <TableRow>
            {tableTitlesHeaderArr?.map((el) => (
              <StyledTableCell align="center" key={uuidv4()}>
                {el}
              </StyledTableCell>
            ))}
            <StyledTableCell align="center">control</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((row) => (
            <StyledTableRow key={uuidv4()}>
              {tableTitlesHeaderArr?.map((item) => (
                <StyledTableCell
                  key={uuidv4()}
                  align="center"
                  component="td"
                  scope="row"
                >
                  {row[item]}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center" component="td" scope="row">

                <DesBtn fun={() => props.showHandle(row.id)} text={"show"}>
                  <AnalyticsOutlinedIcon />
                </DesBtn>
                <DesBtn fun={() => props.editHandle(row.id)} text={"Edit"}>
                  <EditOutlinedIcon />
                </DesBtn>
                <DesBtn fun={() => props.deleteHandle(row.id)} text={"Delete"}>
                  <DeleteOutlineOutlinedIcon />
                </DesBtn>
                
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
