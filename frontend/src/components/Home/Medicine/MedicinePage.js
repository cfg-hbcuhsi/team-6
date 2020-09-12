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
  { color: '#7405ED', title: 'Physician', text: '', idx: 0 },
  { color: '#8425ED', title: 'Dentist', info: '', text: '', idx: 1 },
  { color: '#5415ED', title: 'Nurse Practitioner', info: '', text: '', idx: 2},
];

let arr = ['https://resize.hswstatic.com/w_1024/gif/becoming-doctor.jpg', 
'https://qcitymetro.com/wp-content/uploads/2020/04/shutterstock_1145601335.jpg', 
'https://www.onwardhealthcare.com/uploadedImages/TravelNursing/Content/Resources/News_Features_And_More/News_Articles/male%20nurse.png?n=4339', 
]

let salary = [90000, 81000, 45000]
let majors = ['Physician', 'Dentist', 'Nurse Practitioner']
let employmentGrowth = [7, 7, 26]
let yearsToCompleteSchool = ['7-10', 4, '2-4']

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