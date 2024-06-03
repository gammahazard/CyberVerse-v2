// @ts-ignore
// @ts-nocheck
import { Box, Typography, IconButton, useMediaQuery, List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const detailedFeaturesData = [
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Looting Items",
    description: [
      "Explore and loot objects to gather valuable items."
    ],
    image: "/explore.png"
  },
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Crafting",
    description: [
      "Use gathered resources to create new items and enhance existing ones."
    ],
    image: "/crafting.png"
  },
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Fishing",
    description: [
      "Engage in fishing activities to catch various types of fish."
    ],
    image: "/fishing.png"
  },
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Farming",
    description: [
      "Grow and harvest plants to gather resources and earn rewards."
    ],
    image: "/farming.png"
  },
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Mining",
    description: [
      "Extract precious minerals and resources from different locations."
    ],
    image: "/mining.png"
  },
  {
    title: "Survival Gameplay Mechanics",
    subheading: "Skill Level Progression",
    description: [
      "Improve your character's abilities and skills through various in-game activities."
    ],
    image: "/skill_level.png"
  },
  {
    title: "Economy Gameplay Mechanics",
    subheading: "Community Market",
    description: [
      "Community market is a place located inside the bank where players can sell or buy in-game items to other players."
    ],
    image: "/community_market.png"
  },
  {
    title: "Economy Gameplay Mechanics",
    subheading: "Merchants",
    description: [
      "Merchants are NPCs that players use to buy certain resources or fulfill merchants' limited daily deals to earn CYPX."
    ],
    image: "/merchants.png"
  },
  {
    title: "Economy Gameplay Mechanics",
    subheading: "Sketchy Dealer",
    description: [
      "Players can sell unlimited in-game items to sketchy dealer at 25% below standard prices, with a 5-25% chance of being scammed for an additional 25% less."
    ],
    image: "/sketchy_dealer.png"
  },
  {
    title: "Minigames Gameplay Mechanics",
    subheading: "Racing Cars",
    description: [
      "Players need to reach the finish line within 2 minutes, avoiding oil puddles and collecting coins, with NFT car behavior influenced by its model."
    ],
    image: "/racing_cars.png"
  },
  {
    title: "Minigames Gameplay Mechanics",
    subheading: "Bartender",
    description: [
      "Serve drinks to customers in a timed mini-game to earn points."
    ],
    image: "/bartender.png"
  },
  {
    title: "Minigames Gameplay Mechanics",
    subheading: "DJ",
    description: [
      "Players hit the correct notes through five stages to earn points, with skill levels affecting gameplay, consuming 1 stamina per run, and allowing up to 5 runs daily per CyberCitizen."
    ],
    image: "/dj.png"
  },
  {
    title: "Minigames Gameplay Mechanics",
    subheading: "Wolf and Sheep",
    description: [
      "The game sets the stage for an intense chase where the wolf needs to hunt all the sheep before time runs out, while the sheep must cleverly evade their predator to survive until the countdown expires."
    ],
    image: "/wolf_and_sheep.png"
  },
  {
    title: "Other Mechanics",
    subheading: "Daily Quests",
    description: [
      "Complete daily tasks to earn experience and rewards."
    ],
    image: "/daily_quests.png"
  },
  {
    title: "Other Mechanics",
    subheading: "Monthly Leaderboard",
    description: [
      "Participate in monthly leaderboard to win prizes by playing minigames or doing any activity such as farming, fishing, looting and mining ores."
    ],
    image: "/monthly_leaderboard.png"
  },
  {
    title: "Other Mechanics",
    subheading: "Mining Rigs",
    description: [
      "Daily tasks to earn experience and rewards."
    ],
    image: "/mining_rigs.png"
  },
  {
    title: "Other Mechanics",
    subheading: "Apartment Customization",
    description: [
      "Own an NFT apartment, buy or craft furniture and customize your apartment."
    ],
    image: "/apartment_customization.png"
  }
];

const Features = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 3000); // 3000ms (3 seconds) interval to match the slider

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % detailedFeaturesData.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + detailedFeaturesData.length) % detailedFeaturesData.length);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const currentFeature = detailedFeaturesData[currentFeatureIndex];

  return (
    <Box 
      display="flex" 
      width="88%"
      margin="auto"
      flexDirection={{ xs: 'row', md: 'row' }} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={2}
      gap={4}
      sx={{
        backgroundColor: '#121212',
        marginTop: "15rem",
        border: '2px solid #FF00FC',
        borderRadius: '12px',
        padding: isMobile ? '10px' : '20px',
        position: 'relative',
        minHeight: isMobile ? '900px' : 'auto', // Increased minHeight for mobile
        height: 'auto',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        order={{ xs: 2, md: 1 }}
        sx={{ marginBottom: 'auto' }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: isMobile ? '1.5rem' : '2.5rem',
            fontWeight: 700,
            marginBottom: '10px',
          }}
        >
          {currentFeature.title}
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          gutterBottom 
          align="left"
          style={{
            color: '#FF00FC',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            fontWeight: 500,
            marginBottom: '20px',
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
              transition={{ duration: 0.6 }}
            >
              <List>
                {currentFeature.description.map((point, index) => (
                  <ListItem key={index} sx={{ color: '#E1EBFA', padding: '0' }}>
                    <ListItemText primaryTypographyProps={{ variant: 'body2', sx: { fontSize: isMobile ? '0.9rem' : '1rem' } }}>
                      {`• `}{point}
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
          sx={{
            position: 'relative',
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            height: isMobile ? '400px' : '600px', // Increased height for mobile
            maxWidth: isMobile ? '300px' : '600px' // Added maxWidth to control the aspect ratio
          }}
        >
          <AnimatePresence initial={false} onExitComplete={handleAnimationComplete}>
            <motion.img
              key={currentFeature.image}
              src={currentFeature.image}
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
              transition={{ duration: 0.6 }}
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
