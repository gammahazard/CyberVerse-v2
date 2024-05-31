import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Custom404 = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#000" color="#fff">
      <Navbar />

      <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: '#FF00FC',
            fontSize: '96px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '125px',
            mb: 4,
            textShadow: '2px 2px 10px #FF00FC',
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            color: '#E1EBFA',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
            mb: 4,
            textShadow: '2px 2px 10px #FF00FC',
          }}
        >
          Page Not Found
        </Typography>
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF00FC',
              color: '#E1EBFA',
              fontSize: '20px',
              fontFamily: '"pixelFont"',
              fontWeight: 700,
              lineHeight: '26px',
              width: '220px',
              height: '58px',
              outline: 'none',
              '&:hover': {
                backgroundColor: '#E1EBFA',
                color: '#FF00FC',
              },
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default Custom404;
