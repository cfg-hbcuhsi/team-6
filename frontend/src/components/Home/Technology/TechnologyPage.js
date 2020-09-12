import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './styles';
import { AnimationWrapper } from 'react-hover-animation';
import CountUp from 'react-countup';

const infoCards = [
  { color: '#00438E', title: 'Software Engineer', text: '', idx: 0 },
  { color: '#1565c0', title: 'IT Support', info: '', text: '', idx: 1 },
  { color: '#6495ED', title: 'Data Scientist', info: '', text: '', idx: 2},
];

let arr = ['https://www.walterpmoore.com/sites/default/files/styles/img-project-slider/public/expertise-header-image/software-header.jpg?itok=4YEsa7Vs', 
'https://www.skyviewtek.com/wp-content/uploads/2019/08/IT-services.jpg', 
'https://miro.medium.com/max/860/1*9onqVYdPPrCcwDX6mGKCpg.jpeg', 
]

let salary = [80000, 45000, 78000]
let majors = ['Software Engineer', 'IT Support', 'Data Scientist']
let employmentGrowth = [22, 15, 18]
let yearsToCompleteSchool = [4, '2 - 4', 4]

const CardDetails = () => {
  const classes = useStyles();

    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={9}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
              <AnimationWrapper>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <CardActionArea >
                  <Typography className={classes.tex}>
                    {infoCard.title}
                  </Typography>
                  <CardMedia className={classes.pic} image={arr[infoCard.idx]}/>

                  <Typography> Career:<br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.majors}>{majors[infoCard.idx]}</Typography>

                  <Typography variant="h7" component="h7"> Median Salary: <br /> <i>{infoCard.text}</i></Typography>
                  <Typography className= {classes.sal}>
                    $<CountUp start={0} end={salary[infoCard.idx]} duration={2.75} separator={","}  />
                  </Typography>
                  <Typography>Employment Growth:<br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.growth}>
                      <CountUp start={0} end={employmentGrowth[infoCard.idx]} duration={8}/>%
                    </Typography>
                  <Typography>Years to Complete School:<br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.years}>{yearsToCompleteSchool[infoCard.idx]}</Typography>

                </CardActionArea>
               
              </div>
              </AnimationWrapper>
            </Grid>
            
          ))}
        </Grid>
      </Grow>
    );
  }

export default CardDetails;