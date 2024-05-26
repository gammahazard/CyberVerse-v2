import { Box, Typography, Button, Snackbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react';
const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event : any, reason : any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
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
            fontSize: '20px',
            width:'70%',
            fontFamily: '"pixelFont"',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Cyberverse is a vast open world where you can play, earn and have fun bmlamgleamglreamgrlamgarl
        </Typography>
        <Box display="flex" gap={2} style={{maxWidth: '80%'}}>
          <Button 
            variant="contained"
            onClick={handleSnackbarOpen}
            style={{
              backgroundColor: '#FF00FC',
              color: '#E1EBFA',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '26px',
              width: '60%', // Adjusted width
              height: '60px',
              marginRight: '20px',
              outline: 'none',
            }}
          >
            Discover CyberVerse
          </Button>
          <Button 
  onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
  variant="outlined"
  style={{
    borderColor: '#FF00FC',
    color: '#FF00FC',
    fontSize: '20px',
   
    fontFamily:'pixelFont',
    fontWeight: 700,
    lineHeight: '26px',
    width: '40%', // Adjusted width
    height: '60px',
    outline: 'none',
  }}
>
  Buy on Secondary Marketplace
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
    height: '100%', // Change height to match width
    width: '100%', // Add width to ensure square-like appearance
    overflow: 'hidden',  // Ensures the video is contained within the box
    marginTop:"40px"
  }}
>
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/SZh_vjE96ZU"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen  // Add allowfullscreen attribute
  style={{
    border: 'none',
    borderRadius: '8px',
    maxWidth: '50%',
    maxHeight: '100%',
  }}
></iframe>
</Box>

    </Box>
  );
};

export default SectionText;
