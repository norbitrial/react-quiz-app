import React from "react";
import QuizzesTable from "../../Components/QuizzesTable";
import IQuiz from "../../Interfaces/IQuiz";
import { Grid } from "@material-ui/core";

const data: Array<IQuiz> = [
  { name: "quiz 1", createdAt: new Date("2019-05-02"), questions: [] },
  { name: "quiz 2", createdAt: new Date("2020-04-29"), questions: [] },
  { name: "quiz 3", createdAt: new Date("2019-03-02"), questions: [] },
];

const Home = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2>Home</h2>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <QuizzesTable data={data} />
      </Grid>
    </Grid>
  );
};

export default Home;
