import React from "react";
import Table, { TableProps } from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";

export default function MuiTable({
  size,
  stickyHeader,
  children,
  ...rest
}:TableProps) {
  return (
    <Table
      size={size}
      stickyHeader={stickyHeader}
      {...rest}>
      {children}
    </Table>
  );
}

MuiTable.Container = TableContainer;
MuiTable.Head = TableHead;
MuiTable.Body = TableBody;
MuiTable.Footer = TableFooter;
MuiTable.Cell = TableCell;
MuiTable.Row = TableRow;
MuiTable.SortLabel = TableSortLabel;
MuiTable.Pagination = TablePagination;
