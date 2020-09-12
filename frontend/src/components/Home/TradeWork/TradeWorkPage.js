import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './styles';
import { AnimationWrapper } from 'react-hover-animation';
import CountUp from 'react-countup';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';

const infoCards = [
  { color: '#00838f', title: 'Electrician', text: '', idx: 0 },
  { color: '#1565c0', title: 'Welder', info: '', text: '', idx: 1 },
  { color: '#6495ED', title: 'Plumber', info: '', tSext: '', idx: 2},
];

let arr = ['https://lirp-cdn.multiscreensite.com/0f137ce1/dms3rep/multi/opt/electrician-640w.jpg', 
'https://www.alpinme.com/files/career-consultant-1.jpg', 
'https://careertraining.ed2go.com/common/images/1/18271/welderlarge.jpg', 
]

let salary = [34000, 30000, 25000]
let majors = ['Electrician', 'Welder', 'Plumber']
let employmentGrowth = [8, 3, 14]
let yearsToCompleteSchool = [0, 0, 0]

const CardDetails = () => {
  const classes = useStyles();

  return (
    <Grow in>
      
      <Grid className={classes.container} container alignItems="stretch" spacing={9}>
      
      
        {infoCards.map((infoCard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
            <Box boxShadow={3}
      style={{ width: 'flex', height: 'flex' }}>
            <AnimationWrapper>
            
            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
              <CardActionArea >
                <Typography className={classes.tex}>
                  {infoCard.title}
                </Typography>
                <CardMedia className={classes.pic} image={arr[infoCard.idx]}/>

                <Typography> Career:<br /> <i>{infoCard.text}</i></Typography>
                  <Typography variant = 'h4' className= {classes.majors}>{majors[infoCard.idx]}</Typography>

                <Typography variant="h7" component="h7"> Entry Level Salary: <br /> <i>{infoCard.text}</i></Typography>
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
            </Box>
          </Grid>
          
        ))}
        
      </Grid>
      
    </Grow>
  );
}

export default CardDetails;