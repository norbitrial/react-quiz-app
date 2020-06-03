import React from "react";
import QuizzesTable from "../../Components/QuizzesTable";
import IQuiz from "../../Interfaces/IQuiz";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router";

const data: Array<IQuiz> = [
  { name: "quiz 1", createdAt: new Date("2019-05-02"), questions: [] },
  { name: "quiz 2", createdAt: new Date("2020-04-29"), questions: [] },
  { name: "quiz 3", createdAt: new Date("2019-03-02"), questions: [] },
];

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes["grid-container"]}>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
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
        <QuizzesTable data={data} />
      </Grid>
    </Grid>
  );
};

export default Home;
