import { Box, Typography, Button, Snackbar } from '@mui/material';
import { useState } from 'react';

const SectionText = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  return (
    <Box 
      display="flex" 
      flexDirection="row" 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={4}
      gap={4}
    >
      <Box flex={1} p={2}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: '60px',
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: '70px',
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
            fontSize: '22px',
            width: '70%',
            fontFamily: '"pixelFont"',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Cyberverse is a vast open world where you can play, earn and have fun bmlamgleamglreamgrlamgarl
        </Typography>
        <Box display="flex" gap={2} style={{  }}>
          <Button 
            variant="contained"
            onClick={handleSnackbarOpen}
            style={{
              backgroundColor: '#FF00FC',
              color: '#E1EBFA',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '26px',
              width: '100%', 
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
              width: '100%', 
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
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%', 
          
          width: '50%', 
          overflow: 'hidden', 
        }}
      >
        <Box
          style={{
            position: 'relative',
           // 1:1 aspect ratio
            width: '60%',
            height: '100%',
            marginLeft:'15%',
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
              position: 'relative',
           marginTop:'70px',
              width: '80%',
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
