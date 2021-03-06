import * as React from 'react';
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./SignIn.css";
import Profile from '../data/profiles.json'

function Copyright(props) {
  window.scrollTo(0, 0);
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href = "/">
        UčeničkiWebServis
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if(data.get('email').split('@')[1] === 'skole.hr'){
      window.location.href= '/prijava-aaiedu';
    }
    else {
      let i = 0
      Profile.poslodavci.forEach(element => {
        if(element['e-mail'] === data.get('email') && element['sifra'] === data.get('password')){
          localStorage.setItem('prof_index', `${i}`);
          localStorage.setItem('prof_type', 'p')
          localStorage.setItem('profile_test', '2')
          window.location.href= '/poslodavac';
        }
        i++;
      })
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <br/><br/><br/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            <img  className= "image-e-gradani" src = "/images/E-gradani.png" width = "50px" height = "50px" alt = ""></img> e-Građani
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail Adresa"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Lozinka"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zapamti prijavu"
            />
            <Button
              //onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onclick="submitcheck()"
            > 
              Prijavi se
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href = "/resetpassword" variant="body2">
                  Zaboravili ste lozinku?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/prijava-aaiedu" variant="body2">
                  {"AAI@EDU.hr"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </ThemeProvider>
  );
}

