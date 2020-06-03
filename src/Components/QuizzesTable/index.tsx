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
import LaunchIcon from "@material-ui/icons/Launch";

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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
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
                      <LaunchIcon fontSize="small" />
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
    </Paper>
  );
};

export default QuizzesTable;
