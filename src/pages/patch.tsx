import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PatchPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe 
            src="https://www.cyberversewiki.com/updates.html" 
            title="CyberVerse Updates"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PatchPage;
