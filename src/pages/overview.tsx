import { Box, Button, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image'
export default function AboutUs() {
  return (
    <Box>
      <Navbar />

      <Box mt={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '60px',
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: '70px',
            mb: 4,
            textAlign: 'center',
          }}
        >
       Coming very soon
        </Typography>

       
      </Box>

      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
}