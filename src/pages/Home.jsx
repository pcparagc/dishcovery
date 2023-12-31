import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "../components/card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dropzone from "../components/Dropzone";
import TextArea from "../components/TextArea";
import Logo from "../components/Logo";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link as RouterLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("background-2.jpg")',
          backgroundSize: "cover",
          zIndex: -1,
        }}
      >
        <AppBar position="relative" style={{ backgroundColor: "#ffb703" }}>
          <Toolbar>
            <Logo src="dishcovery_icon.png" width={120} height={120} />
            <Stack direction="column">
              <Typography variant="h3" color="inherit" align="left" noWrap>
                Dishcovery
              </Typography>
              <Typography variant="h6" color="inherit" fontStyle="italic" noWrap>
              Ingredients. Inspire. Indulge.
              </Typography>
            </Stack>
            <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
              <Grid item>
                <Tabs
                  value={false}
                  textColor="inherit"
                  indicatorColor="secondary"
                  aria-label="tabs navigation"
                >
                  <Tab label="Signup" component="a" href="/signup" target="_blank" />
                  <Tab label="Recipes" component="a" href="https://www.simplyrecipes.com/" target="_blank" />
                  <Tab label="Contact" component="a" href="#contact" onClick={(event) => {
                    event.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });}}}
                  />
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              pt: 8,
              pb: 6,
              flexGrow: 1,
              color: "#000", // Set text color to black or your preferred color
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                fontStyle="italic"
                fontFamily="serif"
                gutterBottom
              >
                Let's Dishcover
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                 Your Culinary Companion for Personalized Recipes - Unleash a world of flavors at your fingertips!
              </Typography>
              <Dropzone />
              
              {/* Add border color to the divider */}
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <TextArea />
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ backgroundColor: "rgba(255, 183, 3, 0.7)", p: 6 }} component="footer" id="contact">
          <Typography variant="h6" align="center" sx={{color:"darkblack", fontStyle:"italic", fontFamily:"'Segoe UI', serif"}} gutterBottom>
          "You don't need a silver fork to eat good food."
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
           To know more, visit 
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
          <Link href="https://m.facebook.com/thefoodblog.net">
            <FacebookIcon />
          </Link>
          <Link href="https://instagram.com/budgetbytes?igshid=NzZlODBkYWE4Ng==">
            <InstagramIcon />
          </Link>
          <Link href="mailto:kveena@calstatela.edu">
            <MailOutlineIcon />
          </Link>
          </Stack>
          <Copyright />
        </Box>
        {/* End footer */}
      </Box>
    </ThemeProvider>
  );
}
