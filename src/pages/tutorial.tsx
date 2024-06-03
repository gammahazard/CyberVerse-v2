import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tutorial = () => {
  return (
    <Box>
      <Navbar />
      
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography
          sx={{
            color: '#FF00FC',
            fontSize: '48px',
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: '58px',
            mb: 2,
          }}
        >
          CyberVerse Tutorial
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gwSUI3DUtlA"
            title="CyberVerse Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Tutorial;
