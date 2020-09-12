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
  { color: '#00838f', title: 'Teacher', text: '', idx: 0 },
  { color: '#1565c0', title: 'Guidance Counselor', info: '', text: '', idx: 1 },
  { color: '#6495ED', title: 'Financial Analyst', info: '', tSext: '', idx: 2},
];

let arr = ['https://www.pennlive.com/resizer/a40Y2ixSU7xvyJ73sBpgnEN7Vcw=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SOM52536QRCOVFL5GSUGU3OW5Y.jpg', 
'https://media.istockphoto.com/photos/male-college-student-meeting-with-campus-counselor-discussing-mental-picture-id1218975578?k=6&m=1218975578&s=612x612&w=0&h=2cHqXQ6QNYw6mCH8UBfXdk_0He53kfFnVX-jun3-zbA=', 
'https://coachad.com/wp-content/uploads/hinsdale-coach-group-550x306.jpg', 
]

let salary = [37000, 41000, 34000]
let majors = ['Teacher', 'Guidance Counselor', 'Sports Coach']
let employmentGrowth = [4, 8, 12]
let yearsToCompleteSchool = [4, 6, 4]

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