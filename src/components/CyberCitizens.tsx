import { Box, Typography, Button, Grid } from '@mui/material';
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
          CYBERCITIZENS
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
            onClick={() => window.open('https://www.skyharbor.io/collection/cybercitizens', '_blank', 'noopener,noreferrer')}
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
          GEN 2
          </Button>
          <Button 
            onClick={() => window.open('https://www.skyharbor.io/collection/cybercitizensgen3', '_blank', 'noopener,noreferrer')}
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
        GEN 3
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4} flex={1} p={2}>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/gen2.png" // Path to your image in the public folder
              alt="GEN 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/gen3.png" // Path to your image in the public folder
              alt="GEN 3"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionText;
