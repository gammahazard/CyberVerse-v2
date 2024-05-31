import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tutorial = () => {
  return (
    <Box>
      <Navbar />

      <Box textAlign="center" py={5} bgcolor="#000" color="#fff">
        <Typography
          sx={{
            color: '#FF00FC',
            fontSize: '96px',
            fontFamily: '"pixelFont"',
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
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: '70px',
          }}
        >
          Tutorial
        </Typography>
        <Typography
          sx={{
            color: '#FF00FC',
            fontSize: '48px',
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: '58px',
            mt: 4,
            textShadow: '2px 2px 10px #FF00FC',
          }}
        >
          Coming Soon
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default Tutorial;
