import React from "react";
import IQuiz from "../../Interfaces/IQuiz";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

interface StartCallback {
  (): void;
}

interface IProps {
  quiz: IQuiz;
  startCallback?: StartCallback;
  showActions: boolean;
}

const QuizCard = ({ quiz, startCallback, showActions }: IProps) => {
  const classes = useStyles();

  const onClick = () => {
    if (startCallback) {
      startCallback();
    }
  };

  return (
    <Card>
      <CardActionArea>
        {quiz.imageUrl ? (
          <CardMedia
            className={classes["card-media"]}
            image={quiz.imageUrl}
            title={quiz.name}
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {quiz.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {quiz.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {showActions ? (
        <CardActions className={classes["card-actions"]}>
          <Button size="small" color="primary" onClick={onClick}>
            Start Quiz
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default QuizCard;
