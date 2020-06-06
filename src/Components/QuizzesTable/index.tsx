import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import IQuizColumn from "../../Interfaces/IQuizColumn";
import useStyles from "./styles";
import IQuiz from "../../Interfaces/IQuiz";
import Emoji from "../Emoji";
import StyledTableCell from "../StyledTableCell";

const columns: Array<IQuizColumn> = [
  { id: "actions", label: "" },
  { id: "name", label: "Name" },
  { id: "created", label: "Created At" },
  { id: "questionsCount", label: "Questions Count" },
];

interface IProps {
  data: Array<IQuiz>;
}

const QuizzesTable = ({ data }: IProps) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((quiz: IQuiz, index: number) => {
            return (
              <TableRow hover tabIndex={-1} key={index}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => console.log("quiz start", quiz)}
                  >
                    <Emoji text={"📝"} />
                  </IconButton>
                </TableCell>
                <TableCell>{quiz.name}</TableCell>
                <TableCell>{quiz.createdAt.toDateString()}</TableCell>
                <TableCell>{quiz.questions.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuizzesTable;
