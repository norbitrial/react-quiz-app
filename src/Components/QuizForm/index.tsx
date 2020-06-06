import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import IQuiz from "../../Interfaces/IQuiz";
import useStyles from "./styles";
import QuizCard from "../QuizCard";
import Consts from "../../Consts";
import IImages from "../../Interfaces/IImages";
import Emoji from "../Emoji";

interface IProps {
  mode: "edit" | "create";
  selectedQuiz: IQuiz | null;
}

const QuizForm = ({ mode, selectedQuiz }: IProps) => {
  const classes = useStyles();
  const [quiz, setQuiz] = useState<IQuiz>(
    selectedQuiz
      ? selectedQuiz
      : {
          name: "Preview Name",
          createdAt: new Date(),
          imageUrl: Consts.Images[0].imageUrl,
          description:
            "Preview description for Quiz, provide the value in order to modify",
          questions: [],
        }
  );

  return (
    <form noValidate autoComplete="off">
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes["grid-item"]}
        >
          <Typography variant="h6">
            Fill or change the below form to {mode} quiz <Emoji text={"⌨️"} />
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6} className={classes["grid-item"]}>
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes["grid-item"]}
            >
              <TextField
                required
                id="name-field"
                label="Name"
                variant="outlined"
                className={classes["input-field"]}
                onChange={({ target }: any) =>
                  setQuiz((p) => ({ ...p, name: target.value }))
                }
                defaultValue={quiz.name}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes["grid-item"]}
            >
              <TextField
                id="description-field"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                className={classes["input-field"]}
                onChange={({ target }: any) =>
                  setQuiz((p) => ({ ...p, description: target.value }))
                }
                defaultValue={quiz.description}
              />
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes["grid-item"]}
            >
              <FormControl
                component="fieldset"
                className={classes["input-field"]}
              >
                <RadioGroup
                  row
                  aria-label="quiz-selector"
                  name="quiz-selector"
                  value={quiz.imageUrl}
                  onChange={({ target }: any) =>
                    setQuiz((p) => ({ ...p, imageUrl: target.value }))
                  }
                >
                  {Consts.Images.map((image: IImages, index: number) => (
                    <FormControlLabel
                      key={`${index}_${image.name}`}
                      value={image.imageUrl}
                      control={<Radio />}
                      label={image.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6} className={classes["grid-item"]}>
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes["grid-item"]}
            >
              <Typography variant="subtitle1">Preview</Typography>
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes["grid-item"]}
            >
              <QuizCard quiz={quiz} showActions={false} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes["grid-item"]}
        >
          <div>question / answer creator placeholder</div>
        </Grid>
      </Grid>
    </form>
  );
};

export default QuizForm;
