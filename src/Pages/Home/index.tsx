import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router";
import Emoji from "../../Components/Emoji";
import { useSelector } from "react-redux";
import IQuiz from "../../Interfaces/IQuiz";
import QuizCard from "../../Components/QuizCard";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const quizzes = useSelector((state: any) => state.quizzesReducer);
  const [name, setName] = useState<string>("");
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number>(0);
  const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(
    quizzes.length > 0 ? quizzes[0] : null
  );

  const onQuizSelect = ({ target }: any) => {
    const index = Number(target.value);
    setSelectedQuizIndex(index);
    setSelectedQuiz(quizzes[index]);
  };

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  const onStart = () => {
    console.log("dispatch saga action to store current quiz");

    history.push("/quiz");
  };

  const renderWelcomeText = () => (
    <Grid item lg={12} md={12} sm={12} xs={12} className={classes["grid-item"]}>
      <Typography>
        Make your creative quiz for your friends, let's have fun together!{" "}
        <Emoji text={"🎉"} />
      </Typography>
    </Grid>
  );

  const renderQuizSelector = () => (
    <FormControl component="fieldset">
      {/*<FormLabel component="legend">Quiz Selector</FormLabel>*/}
      <RadioGroup
        aria-label="quiz-selector"
        name="quiz-selector"
        value={selectedQuizIndex}
        onChange={onQuizSelect}
      >
        {quizzes.map((quiz: IQuiz, index: number) => (
          <FormControlLabel
            key={`${index}_${quiz.name}`}
            value={index}
            control={<Radio />}
            label={quiz.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );

  return (
    <Grid container className={classes["grid-container"]}>
      {renderWelcomeText()}

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

      <Grid item lg={4} md={4} sm={4} xs={4} className={classes["grid-item"]}>
        {/* placeholder only */}
      </Grid>

      <Grid item lg={4} md={4} sm={4} xs={4} className={classes["grid-item"]}>
        <TextField
          id="name-field"
          label="Provide your name"
          variant="outlined"
          onChange={onNameChange}
          className={classes["name-field"]}
        />
      </Grid>

      <Grid
        item
        lg={4}
        md={4}
        sm={4}
        xs={4}
        className={`${classes["grid-item"]} ${classes["align-right"]}`}
      >
        <Button variant="outlined" onClick={() => history.push("/editor")}>
          Open Quiz Editor
        </Button>
      </Grid>

      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes["grid-item"]}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            {renderQuizSelector()}
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            {selectedQuiz ? (
              <QuizCard
                quiz={selectedQuiz}
                startCallback={onStart}
                showActions={name !== "" && selectedQuiz.questions.length > 0}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
