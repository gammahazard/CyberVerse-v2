import { Box, Typography, Button, Snackbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };



  return (
    <Box 
      display="flex" 
      flexDirection={isMobile ? 'column' : 'row'} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={isMobile ? 2 : 4}
      gap={isMobile ? 2 : 4} // Added gap between elements
    >
      <Box flex={1} p={2} mb={isMobile ? 2 : 0} maxWidth="100%">
        <Typography 
          variant="h4" 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: isMobile ? '32px' : '60px',
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : '70px',
          }}
        >
          CyberVerse
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: isMobile ? '18px' : '22px', // Increased font size
            width: '70%',
            fontFamily: '"pixelFont"',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Cyberverse is a vast open world where you can play, earn and have fun bmlamgleamglreamgrlamgarl
        </Typography>
        <Box display="flex" gap={2} style={{ maxWidth: '100%' }}>
          <Button 
            variant="contained"
            onClick={handleSnackbarOpen}
            style={{
              backgroundColor: '#FF00FC',
              color: '#E1EBFA',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '26px',
              width: '100%', // Adjusted width
              height: '60px',
              marginRight: '20px',
              outline: 'none',
            }}
          >
            Discover CyberVerse
          </Button>
          <Button 
            onClick={() => window.open('https://skyharbor.io', '_blank', 'noopener,noreferrer')}
            variant="outlined"
            style={{
              borderColor: '#FF00FC',
              color: '#FF00FC',
              fontSize: '20px',
              fontFamily: 'pixelFont',
              fontWeight: 700,
              lineHeight: '26px',
              width: '100%', // Adjusted width
              height: '60px',
              outline: 'none',
            }}
          >
            Marketplace
          </Button>
        </Box>
      </Box>
      <Box 
        flex={1} 
        p={2} 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', 
          width: '100%', 
          overflow: 'hidden', 
        }}
      >
        <Box
          style={{
            position: 'relative',
            paddingBottom: '100%', // 1:1 aspect ratio
            width: '100%',
            maxWidth: 'auto', // Max width for larger screens
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/SZh_vjE96ZU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionText;
