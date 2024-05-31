import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const featuresData = [
  {
    title: "Feature 1",
    subheading: "Subheading for Feature 1",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3",
      "Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 2",
    subheading: "Subheading for Feature 2",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3",
      "Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 3",
    subheading: "Subheading for Feature 3",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3",
      "Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 4",
    subheading: "Subheading for Feature 4",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3",
      "Bullet point 4",
    ],
    image: "/gen3.png"
  },
  {
    title: "Feature 5",
    subheading: "Subheading for Feature 5",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3",
      "Bullet point 4",
    ],
    image: "/gen3.png"
  },
];

const Features = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
  };

  const handlePrev = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + featuresData.length) % featuresData.length);
  };

  const currentFeature = featuresData[currentFeatureIndex];

  return (
    <Box 
      display="flex" 
      width="90%"
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
        border: '2px solid #FF00FC',
        borderRadius: '12px',
        padding: isMobile ? '10px' : '20px',
      }}
    >
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        order={{ xs: 2, md: 1 }}
      >
        <Typography 
          variant={isMobile ? "h4" : "h2"} 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
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
          }}
        >
          {currentFeature.subheading}
        </Typography>
        <Box>
          {currentFeature.description.map((point, index) => (
            <Typography 
              key={index}
              variant="body1" 
              paragraph 
              align="left"
              style={{
                color: '#E1EBFA',
                fontSize: isMobile ? '1rem' : '1.2rem',
                lineHeight: '1.5',
                marginBottom: '10px',
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
        <Box display="flex" gap={2}>
          <IconButton onClick={handlePrev} style={{ color: '#FF00FC' }}>
            <ArrowBackIosIcon style={{ fontSize: '2rem' }} />
          </IconButton>
          <IconButton onClick={handleNext} style={{ color: '#FF00FC' }}>
            <ArrowForwardIosIcon style={{ fontSize: '2rem' }} />
          </IconButton>
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
          <motion.img
            key={currentFeature.image}
            src={currentFeature.image} // Path to your image
            alt="Feature Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
