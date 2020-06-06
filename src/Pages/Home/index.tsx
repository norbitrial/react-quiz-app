import React from "react";
import QuizzesTable from "../../Components/QuizzesTable";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const quizzes = useSelector((state: any) => state.quizzesReducer);

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
        <QuizzesTable data={quizzes} />
      </Grid>
    </Grid>
  );
};

export default Home;
