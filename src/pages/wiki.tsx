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
          src="https://cyberverse.fandom.com/wiki/Cyberverse_Wiki"
          title="Cyberverse Wiki"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </Box>
      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
};

export default Wiki;
