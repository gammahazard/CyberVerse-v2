import { Box, Typography, Grid } from '@mui/material';

const Section2 = () => {
  return (
    <Box py={8} px={2} style={{ backgroundColor: '#000C56', color: '#fff' }}>
      <Typography 
        variant="h5" 
        paragraph 
        align="center"
        style={{
          color: '#E1EBFA',
          fontSize: '24px',
          fontFamily: '"pixelFont"',
          lineHeight: '31px',
          marginBottom: '40px',
        }}
        gutterBottom
      >
        CyberCitizens, insert description about cybercitizens here pls!
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {[
          {
            title: 'Playable NFT Characters',
            text: 'mlemmlkemmlmelmelmle.'
          },
          {
            title: 'Earn CYPX',
            text: 'mlemlemlmelmelmle'
          },
          {
            title: 'Have fun!',
            text: 'hang out with friends, play minigames and much more'
          }
        ].map((item, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Box 
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"  // Added this to center the text
              style={{ maxWidth: '350px', width: '100%', margin: '0 auto' }}  // Added auto margins to center the box
            >
              <Typography 
                variant="h6" 
                style={{
                  color: '#E1EBFA',
                  fontSize: '40px',
                  fontFamily: '"pixelFont"',
                  fontWeight: 700,
                  lineHeight: '52px',
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body1"
                style={{
                  color: '#E1EBFA',
                  fontSize: '20px',
                  fontFamily: '"pixelFont"',
                  lineHeight: '26px',
              
                  height: '52px'
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section2;
