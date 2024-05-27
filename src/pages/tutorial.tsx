// src/pages/gamelibrary.tsx

import { Box, Typography, Button, TextField } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tutorial = () => {
  return (
    <Box>
      <Navbar />

      <Box textAlign="center" py={5} bgcolor="#000" color="#fff">
        <Typography
          sx={{
            color: '##FF00FC',
            fontSize: '96px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '125px',
          }}
        >
          CyberVerse
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
          }}
        >
          Tutorial
        </Typography>
      </Box>

    
        

       <Footer />
    </Box>
  );
};

export default Tutorial;
