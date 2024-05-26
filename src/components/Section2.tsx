import { Box, Typography, Grid } from '@mui/material';

const Section2 = () => {
  return (
    <Box py={8} px={2} style={{ backgroundColor: 'pink', color: '#fff' }}>
      <Typography 
        variant="h5" 
        paragraph 
        align="center"
        style={{
          color: '#000000',
          fontSize: '24px',
          fontFamily: '"Source Sans Pro"',
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
                  color: '#000000',
                  fontSize: '40px',
                  fontFamily: '"Source Sans Pro"',
                  fontWeight: 700,
                  lineHeight: '52px',
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body1"
                style={{
                  color: '#000000',
                  fontSize: '20px',
                  fontFamily: '"Source Sans Pro"',
                  lineHeight: '26px',
                  marginTop: '10px',
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
