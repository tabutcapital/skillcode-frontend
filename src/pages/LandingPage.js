import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2C3E50", padding: "0.5rem 0" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>SkillCode</Typography>
        <Button color="inherit" component={Link} to="/login?role=mentor">Login as TM</Button>
        <Button color="inherit" component={Link} to="/login?role=student">Login as Student</Button>
      </Toolbar>
    </AppBar>
  );
};

const HeroSection = () => (
  <Box sx={{ textAlign: "center", padding: "4rem 0", backgroundColor: "#f4f4f4" }}>
    <Typography variant="h2" sx={{ fontWeight: "bold" }}>Welcome to SkillCode</Typography>
    <Typography variant="h5" sx={{ marginTop: "1rem" }}>Assess and enhance your coding skills with ease.</Typography>
  </Box>
);

const Footer = () => (
  <Box sx={{ textAlign: "center", padding: "1rem 0", backgroundColor: "#2C3E50", color: "white", marginTop: "3rem" }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} SkillCode. All rights reserved.</Typography>
  </Box>
);

const LandingPage = () => {
    return (
      <Box sx={{ backgroundColor: '#10163D', color: 'white', height: '100vh' }}>
        <Container>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', paddingTop: '4rem' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '3rem' }}>
              Elevate Your Coding Skills
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '2rem', fontWeight: 300 }}>
              Take real-time coding tests and boost your programming expertise.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ padding: '1rem 2rem' }} 
              component={Link} 
              to="/login"
            >
              Get Started
            </Button>
          </Box>
  
          {/* Testimonials Section */}
          <Box sx={{ marginTop: '4rem' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700, marginBottom: '2rem' }}>
              What People Say
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ backgroundColor: '#1e1e2f', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">John Doe</Typography>
                    <Typography variant="body1">
                      "This platform helped me improve my coding skills with real-world problems."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ backgroundColor: '#1e1e2f', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">Jane Smith</Typography>
                    <Typography variant="body1">
                      "An excellent place to practice, learn, and test your coding knowledge."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
  
          {/* Footer */}
          <Box sx={{ textAlign: 'center', padding: '2rem 0', marginTop: '3rem', backgroundColor: '#2C3E50', color: 'white' }}>
            <Typography variant="body2">&copy; {new Date().getFullYear()} SkillCode. All rights reserved.</Typography>
          </Box>
        </Container>
      </Box>
    );
  };
  
export default LandingPage;
