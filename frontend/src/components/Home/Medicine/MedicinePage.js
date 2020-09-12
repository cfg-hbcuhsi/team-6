import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './styles';
import { AnimationWrapper } from 'react-hover-animation';
import CountUp from 'react-countup';

const infoCards = [
  { color: '#00838f', title: 'Software Engineer', text: '', idx: 0 },
  { color: '#1565c0', title: 'IT Support', info: '', text: '', idx: 1 },
  { color: '#6495ED', title: 'Data Scientist', info: '', text: '', idx: 2},
];

let arr = ['https://resize.hswstatic.com/w_1024/gif/becoming-doctor.jpg', 
'https://www.thebalancecareers.com/thmb/5PUQ3eYS60TpLsOdjNYmY4kxY6U=/1500x844/smart/filters:no_upscale()/nurses-discussing-over-documents-in-hospital-493216353-595690893df78c4eb647536e-5bd78e3446e0fb0051debf7f.jpg', 
'https://d2ueix13hy5h3i.cloudfront.net/wp-content/uploads/2019/12/inteligencia-artificial-e-ciencia-de-dados-para-executivos-data-science-1140x641-1024x576.jpg', 
]

let salary = [80000, 45000, 78000]
let majors = ['Computer Science', 'Information Technology', 'Computer Science']
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
                  <Typography variant="h6" component="h6">Starting Salary: <br /> <i>{infoCard.text}</i></Typography>
                  <Typography className= {classes.sal}>
                    $<CountUp start={0} end={salary[infoCard.idx]} duration={2.75} separator={","}  />
                  </Typography>
                  <Typography>Employment Growth:<br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.growth}>
                      <CountUp start={0} end={employmentGrowth[infoCard.idx]} duration={8}/>%
                    </Typography>
                  <Typography>Years to Complete School:<br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.years}>{yearsToCompleteSchool[infoCard.idx]}</Typography>
                    <Typography>Popular College Majors: <br /> <i>{infoCard.text}</i></Typography>
                    <Typography className= {classes.major}>{majors[infoCard.idx]}</Typography>
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