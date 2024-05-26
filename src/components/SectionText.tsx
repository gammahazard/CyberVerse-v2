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
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={4}
      gap={4}
    >
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
          CYBERVERSE
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
              backgroundColor: '#00CFFF',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 700,
              width: '120px',
              height: '40px',
              textTransform: 'none',
            }}
          >
            Play Now
          </Button>
        </Box>
      </Box>
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
