import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

export default function ReusableTable({ data }) {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "min-content"  }} >
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
                  <AnalyticsOutlinedIcon />
                </DesBtn>
                <DesBtn>
                  <EditOutlinedIcon />
                </DesBtn>
                <DesBtn>
                  <DeleteOutlineOutlinedIcon />
                </DesBtn>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
