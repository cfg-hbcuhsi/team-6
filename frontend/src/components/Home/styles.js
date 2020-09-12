import { makeStyles } from '@material-ui/core/styles';



export default makeStyles({
  card: {
    display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%', justifyContent: 'center', position: 'relative'
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // width: '100%',
    // height: '30vh',
    // padding: '0%',
    // borderRadius: 10,
    // color: 'white',
    // position: 'relative',
    // top: '100px',
  },
  infoCard: {
    // display: 'flex', flexDirection: 'column', textAlign: 'center',
    display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%', justifyContent: 'center', position: 'relative'
    
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0, padding: '0 0 100px 0', position: 'relative'
    
  },
  pic: {
    height: '30vh',
    borderRadius: 10,
    position: 'relative'
    
  },
  tex: {
    display: 'flex',
    position: 'absolute',
    fontFamily: 'helvetica',
    alignItems: 'left',
    justifyContent: 'top',
    bottom: '230px',
    // left: '20px',
    fontSize: '40px',
    color: 'whitesmoke',
    
  },
  
  // mainTitle: {
  //   fontSize: '100px',
  //   fontFamily: "helvetica",
  //   margin: 'auto'
  // },

  footer: {
    backgroundColor: 'dark blue',
    padding: 100,
    // background: linear-gradient('-45deg', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'),
  },

  heroContent: {
    padding: '0px 0 40px 0',
    
  },

  easypic: {
    height: '30vh',
  },

  easypicmini: {
    height: '10vh'
  },

  titletext: {
    color: 'white',
    // alight: 'beb,as'
    fontFamily: 'sans-serif',
    fontSize: '100px',
    
  },

  appbar: {
    color: 'white'
  }
});
