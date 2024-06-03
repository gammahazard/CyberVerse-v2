import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wiki = () => {
  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <iframe
          src="https://www.cyberversewiki.com/"
          title="Cyberverse Wiki"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </Box>
       <Footer />
    </Box>
  );
};

export default Wiki;
