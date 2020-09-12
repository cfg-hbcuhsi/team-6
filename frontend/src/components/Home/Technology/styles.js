import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '110%',
    height: '78vh',
    padding: '0%',
    borderRadius: 10,
    color: 'white',
    position: 'relative',
    backgroundColor: 'red'

  
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%', justifyContent: 'center', 
    
  },
  container: {
    padding: '0% 0% 0% 0%', width: '100%', height: '100%', margin: 0,  justifyContent: 'center', 
    
  },
  pic: {
    position: 'relative',
    height: '20vh',
    borderRadius: 10,
    
    
  },
  tex: {
    
    position: 'absolute',
    fontFamily: 'arial',
    backgroundColor: 'black',
    borderRadius: 10,
    left: '0px',
    top: '0px',
    fontSize: '30px',
    color: '#00bcd4',
    
  },
  sal: {
    fontSize: '50px',
  },
  major: {
    fontSize: '30px'
  },
  growth: {
    fontSize: '50px'
  },
  years: {
    fontSize: '60px'
  }

  
});