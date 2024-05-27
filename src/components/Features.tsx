import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

const Features = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column-reverse', md: 'row' }} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={4}
      gap={4}
    >
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          style={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <img
            src="/filler.jpg" // Path to your image in the public folder
            alt="Filler"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <Box flex={1} p={2}>
        <Typography 
          variant="h2" 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: '3rem',
            fontWeight: 700,
          }}
        >
          FEATURES
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: '1.2rem',
            lineHeight: '1.5',
            marginBottom: '20px',
          }}
        >
          Cyberverse is a vast open world where you can play, earn and have fun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia purus non velit ultrices, id vulputate eros pellentesque. Suspendisse potenti. Nulla facilisi. Integer non pulvinar tortor, id laoreet orci. Aenean malesuada velit in lectus convallis, id varius nulla eleifend. Donec ac lectus vitae libero aliquet dapibus. Curabitur tempus sollicitudin risus nec venenatis. Cras hendrerit metus id nisl faucibus, non dictum turpis laoreet. Quisque convallis, erat vel scelerisque viverra, mi eros vehicula libero, id varius eros velit ut nisl. Morbi tempus massa at lacus pharetra scelerisque. Ut sed semper ipsum, in viverra ligula. Donec facilisis orci non diam fringilla, nec luctus elit ullamcorper. Mauris nec magna vitae orci malesuada tristique. Nam sit amet orci lacus. Nam et turpis eu orci tristique viverra. Sed sit amet ipsum magna.
        </Typography>
        <Box display="flex" gap={2}>
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
    </Box>
  );
};

export default Features;