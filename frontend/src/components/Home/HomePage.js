import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { AnimationWrapper } from 'react-hover-animation';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import makeStyles from './styles.js';
import { Container } from 'react-layout-components';
import NavBar from '../NavBar/NavBar'
import { Redirect } from 'react-router';
import cookie from 'react-cookies';

const infoCards = [
  { color: '#00838f', title: 'Law', text: '', idx: 0, link: '/Home' },
  { color: '#1565c0', title: 'Medicine', info: '', text: '', idx: 1, link: '/Medicine' },
  // { color: '#6495ED', title: 'Technology', info: '', text: '', idx: 2, link: '/Technology' },
  // { color: '#283593', title: 'Finance', info: '', text: '', idx: 3, link: '/CardDetails' },
  // { color: '#00838f', title: 'Education', text: '', idx: 4, link: '/CardDetails' },
  // { color: '#1565c0', title: 'Business', info: '', text: '', idx: 5, link: '/CardDetails' },
  // { color: '#6495ED', title: 'Trade Work', info: '', text: '', idx: 6, link: '/CardDetails' },
  // { color: '#283593', title: 'Engineering', info: '', text: '', idx: 7, link: '/Engineering' },
  { color: '#6495ED', title: 'Technology', info: '', text: '', idx: 2, link: '/Technology'},
  { color: '#283593', title: 'Finance', info: '', text: '', idx: 3, link: '/Finance' },
  { color: '#00838f', title: 'Education', text: '', idx: 4, link: '/Education'},
  { color: '#1565c0', title: 'Business', info: '', text: '', idx: 5, link: '/CardDetails'},
  { color: '#6495ED', title: 'Trade Work', info: '', text: '', idx: 6, link: '/CardDetails'},
  { color: '#283593', title: 'Engineering', info: '', text: '', idx: 7, link: '/Engineering'},
];

let arr = ['https://cdn.britannica.com/51/190451-050-0E9B50F5/soundblock-Wood-scales-books-stack-background-leather.jpg',
  'https://img.freepik.com/free-vector/abstract-health-medical-science-healthcare-icon_36402-277.jpg?size=626&ext=jpg',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://cdn.hipwallpaper.com/i/87/59/yaQMpF.jpg',
  'https://giveme-5.org/wp-content/uploads/2019/11/modern-education-system.jpg',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://mk0pathwaytoausoq5ql.kinstacdn.com/wp-content/uploads/2017/10/pexels-photo-175039-1080x675.jpeg',
  'https://wallpapercave.com/wp/wp2700096.jpg'
]



// const NewsCards = () => {
//   const classes = useStyles();
    
//   return (
//     <div>
      
//       <AppBar position="relative">
//         <Toolbar>
//           <Grid
//           justify="space-between" // Add it here :)
//           container 
//           spacing={24}>
//             <Grid item>
//               <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypicmini} />
//             </Grid>
//             <Grid item>
//               <Button component={RouterLink} onClick={() => { sessionStorage.removeItem("authFlag")}} color="inherit" to='/login'>
//                 Logout
//               </Button>
//             </Grid>
//           </Grid>          
//         </Toolbar>
//       </AppBar>
//       <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypic} />
//       <CardMedia src='https://i.imgur.com/4QjZKXG.png' />
//       <div className={classes.heroContent}>
//         <Container maxWidth="sm">
//           <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//             Envision A Smarter You.
//               </Typography>
//           <Typography variant="h5" align="center" color="textSecondary" paragraph>
//             A jobs first approach at career path development for college students.
//               </Typography>
//           <Typography variant="h5" align="center" color="textSecondary" paragraph>
//             Never be affraid to reinvent yourself.
//               </Typography>
//           <div className={classes.heroButtons}>
//             <Grid container spacing={2} justify="center">
//               <Grid item>
//                 <Button variant="contained" color="primary">
//                   Main call to action
//                     </Button>
//               </Grid>
//               <Grid item>
//                 <Button variant="outlined" color="primary">
//                   Secondary action
//                     </Button>
//               </Grid>
//             </Grid>
//           </div>
//         </Container>
//       </div>


const HomePage = () => {
  const classes = makeStyles();

    return (
      <div className={classes.appbar}>
        <AppBar position="relative" >
        <Toolbar>
        <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypicmini}/>
        </Toolbar>
      </AppBar>
      {/* <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypic}/> */}
      <CardMedia src = 'https://i.imgur.com/4QjZKXG.png'/>
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography align="center" className={classes.titletext}>
                Envision A Smarter You.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                A jobs first approach at career path development for students.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Never be afraid to reinvent yourself.
              </Typography>
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={10} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" textAlign = "center">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}

             <div className={classes.heroButtons}>
               <Grid container spacing={2} justify="center">
                 <Grid item>
                   <Button variant="contained" color="primary" component={RouterLink} to={"/college"}>
                     scholarships and college
                       </Button>
                 </Grid>
                 <Grid item>
                   <Button variant="contained"  color="secondary" component={RouterLink} to={"/mentor"}>
                     Find a mentor
                       </Button>
                 </Grid>
               </Grid>
             </div>
            </Container>
        </div>
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={9}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} key = {infoCard.title}>
              <AnimationWrapper>
                <Typography className={classes.tex} color="inherit">
                      {infoCard.title}      
                </Typography>
                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Link underline='none' component={RouterLink} to={infoCard.link}>
                  <CardActionArea>
                    <CardMedia className={classes.pic} component="img" alt="contemplative reptile" height="140" image={arr[infoCard.idx]} title="contemplative reptile"/>
                  </CardActionArea>
                  </Link>
                </div>
              </AnimationWrapper>
            </Grid>
          ))}
      </Grid>
    </Grow>
      <footer className={classes.footer}>
        <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypicmini}/>
        <Typography className={classes.footertext} variant="subtitle1" align="center" component="p">
          Made with 🤍 by Team 6
        </Typography>
      </footer>
    </div>
  );
}


export default HomePage;
