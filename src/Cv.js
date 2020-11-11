import { Accordion, AccordionDetails, AccordionSummary, Avatar, Container, Grid, LinearProgress, makeStyles, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import Bisry from './bisryy.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'rgb(228, 125, 151)',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#000',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  kiri: {
    backgroundColor: 'rgb(228, 125, 151)',
    padding: 10,
  },
  kanan: {
    backgroundColor: 'rgb(230, 46, 92)',
    color: '#fff'
  },
  rootGrid: {
    height: 800,

  },
  large: {
    width: 150,
    height: 150,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'underline',
  },
  name: {
    margin: 'auto',
  },
  spacingTop: {
    height: 150,
  },
  kotaka: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  displayDetail : {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    color: 'rgb(0, 4, 255)',
    marginLeft: theme.spacing(2),
    '&:hover':{
      textDecoration: 'underline',
      cursor: 'pointer'
  },  
}}));



function Cv() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.rootGrid}>
        <Grid item xs={8} className={classes.kiri}>
          <div className={classes.top}>
            <Avatar alt="bisry" src={Bisry} className={classes.large} />
            <Typography variant="h4" component="h2" className={classes.name}>
              Uzumaki bisri tanPa basa-basi
            </Typography>
          </div>
          <Container style={{ marginTop: 30 }}>
            <Typography variant="h5" component="body">
              Kata kata Motivasi
            </Typography>
            <Typography variant="body1" component="body">
            “In nomine Dei nostri Satanas Lucifer Excelsa! Dalam nama Setan, penguasa bumi, Raja dari dunia, yang memerintahkan prajurit-prajurit neraka, kami memintamu untuk memberi kuasa kegelapan dalam tangan kami! Buka lebar-lebar gerbang nerakamu dan datanglah dari tempat yang sangat dalam untuk menemui kami sebagai teman dan saudara!”
            </Typography>
            <br>
            </br>
            <Typography variant="h5" component="body">
              Pemuda Tersesat
            </Typography>
            <div className={classes.kotaka}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography className={classes.heading}>Kesesatan 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Ketika di surga, apakah saya bisa meminta kepada tuhan untuk memasukan teman-teman saya yang berada di surga ke neraka?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography className={classes.heading}>Kesesatan 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Jika saya menyembah 2 sampai 5 tuhan, surga manakah yang dapat saya tempati? apakah bisa keluar masuk seperti di hotel alexis?
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <br></br>
            <Typography variant='h5' component='body'>
              Education
            </Typography>
            <Typography variant='body1' component='body'>
              I graduated from ninja academy, Konohagakure
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={4} className={classes.kanan}>
        <Container style={{ marginTop: 30 }}>
          <Typography variant='h5' component='body'>
            Detail +
          </Typography>
          <br></br>
          <div className={classes.displayDetail}>
          <EmailIcon style={{fontSize:25, paddingRight: 10}} />
          <Typography variant='body1'>kazekagebisri123@ourmail.com</Typography>
          </div>
          <div className={classes.displayDetail}>
         <WhatsAppIcon style={{fontSize:25, paddingRight: 10}} />
         <Typography variant='body1'>+6281261912750</Typography>
          </div>
          <div className={classes.displayDetail}>
          <InstagramIcon style={{fontSize:25, paddingRight: 10}} />
          <a onClick={()=>{window.open('https://www.instagram.com/habibrizieqlover/')}} className={classes.link}>     Our Lort     </a>
          </div>
          <br></br>
          <div>
          <Typography variant='h5' component='body'>
            Skills +
          </Typography>
          </div>
          <br></br>
          <div>
          <Typography variant='body1' component='body'>
              Religious
            </Typography>
            <BorderLinearProgress variant="determinate" value={5} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Horny
            </Typography>
            <BorderLinearProgress variant="determinate" value={95} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Sarcasm
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Satire
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Hate Speech
            </Typography>
            <BorderLinearProgress variant="determinate" value={79} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Racist
            </Typography>
            <BorderLinearProgress variant="determinate" value={67} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Cancer
            </Typography>
            <BorderLinearProgress variant="determinate" value={35} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Gay
            </Typography>
            <BorderLinearProgress variant="determinate" value={22} />
          </div>
          <div>
          <Typography variant='body1' component='body'>
              Nobody Loves Me
            </Typography>
            <BorderLinearProgress variant="determinate" value={100} />
          </div>
        </Container>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cv;