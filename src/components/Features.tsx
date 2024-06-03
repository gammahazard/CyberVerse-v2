import { Box, Typography, IconButton, useMediaQuery, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const featuresData = [
  {
    title: "Feature 1",
    subheading: "Subheading for Feature 1",
    description: [
      "Feature 1 Bullet point 1",
      "Feature 1 Bullet point 2",
      "Feature 1 Bullet point 3",
      "Feature 1 Bullet point 4",
    ],
    image: "/gen2.png"
  },
  {
    title: "Feature 2",
    subheading: "Subheading for Feature 2",
    description: [
      " Feature 2 Bullet point 1",
      " Feature 2 Bullet point 2",
      " Feature 2 Bullet point 3",
      " Feature 2 Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 3",
    subheading: "Subheading for Feature 3",
    description: [
      "Feature 3 Bullet point 1",
      "Feature 3 Bullet point 2",
      "Feature 3 Bullet point 3",
      "Feature 3 Bullet point 4",
    ],
    image: "/gen2.png"
  },
  {
    title: "Feature 4",
    subheading: "Subheading for Feature 4",
    description: [
      "Feature 4 Bullet point 1",
      "Feature 4 Bullet point 2",
      "Feature 4 Bullet point 3",
      "Feature 4 Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 5",
    subheading: "Subheading for Feature 5",
    description: [
      "Feature 5 Bullet point 1",
      "Feature 5 Bullet point 2",
      "Feature 5 Bullet point 3",
      "Feature 5 Bullet point 4",
    ],
    image: "/gen2.png"
  },
];

const Features = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + featuresData.length) % featuresData.length);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const currentFeature = featuresData[currentFeatureIndex];

  return (
    <Box 
      display="flex" 
      width="88%"
    
      margin="auto"
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={2}
      gap={4}
      style={{
        backgroundColor: '#121212',
        marginTop: "15rem",
        border: '2px solid #FF00FC',
        borderRadius: '12px',
        padding: isMobile ? '10px' : '20px',
        position: 'relative' // Ensure positioning context for the arrows
      }}
    >
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        order={{ xs: 2, md: 1 }}
        sx={{ marginBottom: 'auto' }} // Adjusted margin to move content up
      >
        <Typography 
          variant={isMobile ? "h4" : "h2"} 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
            marginBottom: '10px', // Adjusted margin to move content up
          }}
        >
          FEATURES
        </Typography>
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          gutterBottom 
          align="left"
          style={{
            color: '#FF00FC',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 500,
            marginBottom: '20px', // Adjusted margin to move content up
          }}
        >
          {currentFeature.subheading}
        </Typography>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <AnimatePresence initial={false} onExitComplete={handleAnimationComplete}>
            <motion.div
              key={currentFeatureIndex}
              initial={{ opacity: 0, position: 'absolute', width: '100%' }}
              animate={{ opacity: 1, position: 'absolute', width: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }} // Increased duration to make the fade more noticeable
            >
              <List>
                {currentFeature.description.map((point, index) => (
                  <ListItem key={index} sx={{ color: '#E1EBFA', padding: '0' }}>
                    <ListItemText primaryTypographyProps={{ variant: 'body1', sx: { fontSize: isMobile ? '1rem' : '1.2rem' } }}>
                      {`• ${point}`}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        justifyContent="center"
        alignItems="center"
        order={{ xs: 1, md: 2 }}
        style={{ width: '100%' }}
      >
        <Box
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            height: isMobile ? '300px' : '500px', // Set height on mobile to ensure visibility
          }}
        >
          <AnimatePresence initial={false} onExitComplete={handleAnimationComplete}>
            <motion.img
              key={currentFeature.image}
              src={currentFeature.image} // Path to your image
              alt="Feature Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }} // Increased duration to make the fade more noticeable
            />
          </AnimatePresence>
        </Box>
      </Box>
      <Box 
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          display: 'flex',
          gap: 2,
        }}
      >
        <IconButton onClick={handlePrev} style={{ color: '#FF00FC' }} disabled={isAnimating}>
          <ArrowBackIosIcon style={{ fontSize: '2rem' }} />
        </IconButton>
        <IconButton onClick={handleNext} style={{ color: '#FF00FC' }} disabled={isAnimating}>
          <ArrowForwardIosIcon style={{ fontSize: '2rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Features;