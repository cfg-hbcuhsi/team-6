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
import useStyles from './styles.js';


const infoCards = [
  { color: '#00838f', title: 'Law', text: '', idx: 0, link: '/Home' },
  { color: '#1565c0', title: 'Medicine', info: '', text: '', idx: 1, link: '/CardDetails' },
  { color: '#6495ED', title: 'Technology', info: '', text: '', idx: 2, link: '/CardDetails'},
  { color: '#283593', title: 'Finance', info: '', text: '', idx: 3, link: '/CardDetails' },
  { color: '#00838f', title: 'Education', text: '', idx: 4, link: '/CardDetails'},
  { color: '#1565c0', title: 'Business', info: '', text: '', idx: 5, link: '/CardDetails'},
  { color: '#6495ED', title: 'Trade Work', info: '', text: '', idx: 6, link: '/CardDetails'},
  { color: '#283593', title: 'Engineering', info: '', text: '', idx: 7, link: '/CardDetails'},
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



const NewsCards = () => {
  const classes = useStyles();


  
    return (
      <div>
        <AppBar position="relative">
        <Toolbar>
          <Typography className={classes.mainTitle} color="inherit" noWrap>
            Eat. Learn. Play.
          </Typography>
          <Button component={RouterLink} to='/CardDetails'>
            Learn.
          </Button>
        </Toolbar>
      </AppBar>

      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={9}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
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
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
    </div>
    );
  }

  


export default NewsCards;
