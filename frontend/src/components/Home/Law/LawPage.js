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
  { color: '#00838f', title: 'Lawyer', text: '', idx: 0 },
  { color: '#1565c0', title: 'Judge', info: '', text: '', idx: 1 },
  { color: '#6495ED', title: 'Political Scientist', info: '', tSext: '', idx: 2},
];

let arr = ['https://content.thriveglobal.com/wp-content/uploads/2019/01/Lawyer.jpeg', 
'https://supremecourt.nebraska.gov/sites/default/files/styles/banner/public/banners/COA_formal_2018.jpg?itok=KMmWo9py', 
'https://warontherocks.com/wp-content/uploads/2015/08/15747957678_1b9f3bfb03_k3.jpg', 
]

let salary = [45000, 42000, 75000]
let majors = ['Lawyer', 'Judge', 'Political Scientist']
let employmentGrowth = [3, 2, 6]
let yearsToCompleteSchool = [6, 6, 6]

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
                  <Typography className= {classes.majors}>{majors[infoCard.idx]}</Typography>

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