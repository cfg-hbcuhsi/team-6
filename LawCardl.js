import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link, BrowserRouter } from "react-router-dom";
import useStyles from "./styles";
import { AnimationWrapper } from "react-hover-animation";
import CountUp from "react-countup";

const infoCards = [
  { color: "#00838f", title: "Software Engineer Law Card", text: "", idx: 0 }
];

let arr = [
  "https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_md.jpg"
];

let salary = [80000];
let majors = ["Law"];
let employmentGrowth = [4];
let yearsToCompleteSchool = [7];

const NewsCard = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={9}
      >
        {infoCards.map(infoCard => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <AnimationWrapper>
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <CardActionArea>
                  <Typography className={classes.tex}>
                    {infoCard.title}
                  </Typography>
                  <CardMedia
                    className={classes.pic}
                    image={arr[infoCard.idx]}
                  />
                  <Typography variant="h6" component="h6">
                    Starting Salary: <br /> <i>{infoCard.text}</i>
                  </Typography>
                  <Typography className={classes.sal}>
                    $
                    <CountUp
                      start={0}
                      end={salary[infoCard.idx]}
                      duration={2.75}
                      separator={","}
                    />
                  </Typography>
                  <Typography>
                    Employment Growth:
                    <br /> <i>{infoCard.text}</i>
                  </Typography>
                  <Typography className={classes.growth}>
                    <CountUp
                      start={0}
                      end={employmentGrowth[infoCard.idx]}
                      duration={8}
                    />
                    %
                  </Typography>
                  <Typography>
                    Years to Complete School:
                    <br /> <i>{infoCard.text}</i>
                  </Typography>
                  <Typography className={classes.years}>
                    {yearsToCompleteSchool[infoCard.idx]}
                  </Typography>
                  <Typography>
                    Popular College Majors: <br /> <i>{infoCard.text}</i>
                  </Typography>
                  <Typography className={classes.major}>
                    {majors[infoCard.idx]}
                  </Typography>
                </CardActionArea>
              </div>
            </AnimationWrapper>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCard;
