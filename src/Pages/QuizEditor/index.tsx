import React, { useState } from "react";
import QuizzesTable from "../../Components/QuizzesTable";
import { useSelector } from "react-redux";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Grid,
  Divider,
} from "@material-ui/core";
import IQuiz from "../../Interfaces/IQuiz";
import QuizForm from "../../Components/QuizForm";
import useStyles from "./styles";

const QuizEditor = () => {
  const quizzes = useSelector((state: any) => state.quizzesReducer);
  const [mode, setMode] = useState<"edit" | "create">("create");
  const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(null);
  const classes = useStyles();

  const onModeChange = ({ target }: any) => {
    setMode(target.value);
    setSelectedQuiz(null);
  };

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes["grid-item"]}
      >
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="mode-selector"
            name="mode-selector"
            value={mode}
            onChange={onModeChange}
          >
            <FormControlLabel
              value="create"
              control={<Radio />}
              label="Create mode"
            />
            <FormControlLabel
              value="edit"
              control={<Radio />}
              label="Edit mode"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes["grid-item"]}
      >
        <Divider />
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes["grid-item"]}
      >
        {mode === "edit" && !selectedQuiz ? (
          <QuizzesTable
            data={quizzes}
            onSelect={(quiz: IQuiz) => setSelectedQuiz(quiz)}
          />
        ) : (
          <QuizForm mode={mode} selectedQuiz={selectedQuiz} />
        )}
      </Grid>
    </Grid>
  );
};

export default QuizEditor;
